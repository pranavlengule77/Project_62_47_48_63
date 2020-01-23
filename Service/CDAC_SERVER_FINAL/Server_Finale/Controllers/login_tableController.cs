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
    [RoutePrefix("api/admin")]
    public class login_tableController : ApiController
    {
        private CDAC_POLDEntities db = new CDAC_POLDEntities();

        [HttpPost]
        [Route("login")]
        public IHttpActionResult isValidLogin(login_table adminLogin)  //admin login
        {
            login_table admin = db.login_table.Where(x => x.login_id == adminLogin.login_id && x.login_password == adminLogin.login_password).FirstOrDefault();
            if (admin != null)
            {
                return Ok(admin);
            }
            return NotFound();
        }

        [HttpGet]
        [Route("searchdoctor")]
        public IHttpActionResult SearchDoctor(string doctor_id)
        {
            doctor_data doctor = db.doctor_data.Where(doc => doc.doctor_id == doctor_id).FirstOrDefault();
            doctor.speciality_data = null;
            if (doctor != null)
            {
                return Ok(doctor);
            }
            return NotFound();
        }

        [HttpPost]
        [Route("deletepatients")]
        public IHttpActionResult deletePatient(patient_data patient)
        {
            patient_data _patient = db.patient_data.Where(x => x.mobile_no == patient.mobile_no).FirstOrDefault();
            if (_patient != null)
            {
                db.patient_data.Remove(_patient);
                db.SaveChanges();
                return Ok(patient);
            }
            return NotFound();
        }

        [HttpPost]
        [Route("managedoctors/deletedoctor")]
        public async Task<IHttpActionResult> deleteDoctor(doctor_data doctor)
        {
            doctor_data _doctor = db.doctor_data.Where(x => x.doctor_id == doctor.doctor_id).FirstOrDefault();
            if (_doctor != null)
            {
                db.doctor_data.Remove(_doctor);
                try
                {
                    await db.SaveChangesAsync();
                }
                catch (DbUpdateException)
                {
                    if (doctor_dataExists(doctor.doctor_id))
                    {
                        return Conflict();
                    }
                    else
                    {
                        throw;
                    }
                }
                return Ok(doctor);
            }
            return NotFound();
        }

        //Search Patient For Admin
        [HttpGet]
        [Route("searchPatient")]
        public IHttpActionResult SearchPatientAdmin(long mobile_no)
        {
            patient_data patient = db.patient_data.Where(x => x.mobile_no == mobile_no).FirstOrDefault();
            if (patient != null)
            {
                return Ok(patient);
            }
            return NotFound();
        }

        //Update Doctor
        [HttpPost]
        [Route("managedoctors/updatedoctor")]
        public async Task<IHttpActionResult> updateDoctor(doctor_data doctor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(doctor).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!doctor_dataExists(doctor.doctor_id))
                {
                    return NotFound();
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
        private bool doctor_dataExists(string id)
        {
            return db.doctor_data.Count(e => e.doctor_id == id) > 0;
        }
    }
}