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
    [RoutePrefix("api/reception")]
    public class reception_viewController : ApiController
    {
        private CDAC_POLDEntities db = new CDAC_POLDEntities();

        //Reception Login
        [HttpPost]
        [Route("login")]
        public async Task<IHttpActionResult> receptionLogin(login_table verifyReception)
        {
            login_table reception = await db.login_table.FindAsync(verifyReception.login_id);
            if (reception != null)
            {
                if (reception.login_password == verifyReception.login_password)
                {
                    return Ok("login successfull");
                }
            }
            return NotFound();
        }

        //Reception Search
        [HttpGet]
        [Route("search")]
        [ResponseType(typeof(reception_view))]
        public async Task<IHttpActionResult> Getreception_view(string appointment_id)// searching using appointment id
        {
            reception_view reception_view = await db.reception_view.Where(item => item.appointment_id == appointment_id).FirstOrDefaultAsync();
            if (reception_view == null)
            {
                return NotFound();
            }

            return Ok(reception_view);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}