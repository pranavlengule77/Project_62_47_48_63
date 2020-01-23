using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Server_Finale;

namespace Server_Finale.Controllers
{
    [RoutePrefix("api/doctor")]
    public class doctor_dataController : ApiController
    {
        private CDAC_POLDEntities db = new CDAC_POLDEntities();

        //Doctor login
        [HttpPost]
        [Route("login")]
        public IHttpActionResult verifyDoctor(login_table doctorCheck)
        {
            doctor_data doctor = db.doctor_data.Where(doc => doc.doctor_id == doctorCheck.login_id && doc.password == doctorCheck.login_password).FirstOrDefault();
            doctor.speciality_data = null;
            if (doctor != null)
            {
                return Ok(doctor);
            }
            return NotFound();
        }

        //Doctor's Today Appointments
        [HttpGet]
        [Route("today")]
        public IQueryable<reception_view> GetTodayAppointment(string doctor_id)
        {
            return db.reception_view.Where(x => x.doctor_id == doctor_id && x.appointment_date == DateTime.Today &&x.appointment_status == "C");
        }

        //Doctor's Future Appointments
        [HttpGet]
        [Route("future")]
        public IQueryable<reception_view> GetFutureAppointment(string doctor_id)
        {
            return db.reception_view.Where(x => x.doctor_id == doctor_id && x.appointment_date > DateTime.Today && x.appointment_status == "C");
        }

        //Doctor's Appointment Requests
        [HttpGet]
        [Route("requests")]
        public IQueryable<reception_view> GetAppointmentRequest(string doctor_id)
        {
            return db.reception_view.Where(x => x.doctor_id == doctor_id && x.appointment_date > DateTime.Today && x.appointment_status == "NC");
        }

        //Confirm Appointment Requests
        [HttpGet]
        [Route("confirm")]
        public async Task<IHttpActionResult> ConfirmAppointment(string appointment_id)
        {
            appointment_data temp = db.appointment_data.Where(x => x.appointment_id == appointment_id).FirstOrDefault();
            temp.appointment_status = "C";
            db.Entry(temp).State = EntityState.Modified;
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
               throw;
            }
            return Ok(temp);
        }

        //Cancel Appointment
        [HttpPost]
        [Route("cancel")]
        public async Task<IHttpActionResult> CancelAppointment(appointment_data appointment)
        {
            appointment_data temp = db.appointment_data.Where(x => x.appointment_id == appointment.appointment_id).FirstOrDefault();
            temp.appointment_status = "Cancelled";
            db.Entry(temp).State = EntityState.Modified;
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok(temp);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool doctor_dataExists(string id)
        {
            return db.doctor_data.Count(e => e.doctor_id == id) > 0;
        }
    }
}