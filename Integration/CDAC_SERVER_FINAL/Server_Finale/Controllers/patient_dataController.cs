using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace Server_Finale.Controllers
{
    [RoutePrefix("api/patients")]
    public class patient_dataController : ApiController
    {
        private CDAC_POLDEntities db = new CDAC_POLDEntities();

        [HttpPost]
        [Route("appointments")] //appointment details of the patient
        public async Task<IHttpActionResult> patientAppointment(patient_data patient)
        {
            List<reception_view> allAppointments = await db.reception_view.Where(temp => temp.patient_name == patient.patient_name).ToListAsync();
            if (allAppointments!=null)
            {
                return Ok(allAppointments);
            }
            return NotFound();
        }

        [HttpPost]
        [Route("cancelappointment")]
        public async Task<IHttpActionResult> cancelAppointment(appointment_data appointmentOld)
        {
            appointment_data appointment = await db.appointment_data.FindAsync(appointmentOld.appointment_id);
            if (appointment == null)
            {
                return NotFound();
            }

            db.appointment_data.Remove(appointment);
            await db.SaveChangesAsync();
            return Ok(appointment);
        }

        // GET: api/patient_data
        // GetAll patients Data
        [Route("allpatients")]
        public IQueryable<patient_data> Getpatient_data()
        {
            return db.patient_data;
        }

        [HttpPost]
        [Route("appointmentreq")]//book Appointment
        public async Task<IHttpActionResult> bookAppointment(appointment_data newAppointment)
        {
            appointment_id_factory temp = db.appointment_id_factory.FirstOrDefault();
            if (temp == null)
            {
                int appointmentNumber = db.appointment_data.Count();
                appointmentNumber += 1;
                newAppointment.appointment_id = "A" + appointmentNumber;
            }
            else
            {
                newAppointment.appointment_id = temp.appointment_id.ToString();
                db.appointment_id_factory.Remove(temp);
            }
            newAppointment.appointment_status = "NC";

            db.appointment_data.Add(newAppointment);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (appointment_dataExists(newAppointment.appointment_id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return Ok(newAppointment);
        }


        //post: /login
        [HttpPost]
        [Route("login")]
        public async Task<IHttpActionResult> patientLogin(patient_data verifyPatient)
        {
            long patientId = Convert.ToInt64(verifyPatient.mobile_no);
            string patientPassword = verifyPatient.password;
            patient_data patient = await db.patient_data.FindAsync(patientId);
            if (patient != null)
            {
                if (patient.password == patientPassword)
                {
                    return Ok(patient);
                }
            }
            return NotFound();
        }

        // PUT: api/patient_data/5
        // Update patient data
        [HttpPost]
        [Route("updateprofile")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putpatient_data(patient_data patient_data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(patient_data).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!patient_dataExists(patient_data.mobile_no))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(System.Net.HttpStatusCode.NoContent);
        }

        // POST: api/patient_data
        // Insert Patient Data
        [HttpPost]
        [Route("newpatient")]
        [ResponseType(typeof(patient_data))]
        public async Task<IHttpActionResult> Postpatient_data(patient_data patient_data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.patient_data.Add(patient_data);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (patient_dataExists(patient_data.mobile_no))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool patient_dataExists(long id)
        {
            return db.patient_data.Count(e => e.mobile_no == id) > 0;
        }

        private bool appointment_dataExists(string appointment_id)
        {
            return db.appointment_data.Count(e => e.appointment_id == appointment_id) > 0;
        }
    }
}