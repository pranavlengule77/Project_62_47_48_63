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
    [RoutePrefix("api/specialities_view")]
    public class specialities_viewController : ApiController
    {
        private CDAC_POLDEntities db = new CDAC_POLDEntities();

        // GET: api/specialities_view
        public IQueryable<specialities_view> Getspecialities_view()
        {
            return db.specialities_view;
        }

        // GET: api/specialities_view/5[Route("speciality")]
        [HttpGet]
        [ResponseType(typeof(specialities_view))]
        public IHttpActionResult Getspecialities_view(string speciality_name)
        {
            IQueryable<specialities_view> speciality = db.specialities_view.Where(item=>item.speciality_name == speciality_name);
            if (speciality == null)
            {
                return NotFound();
            }
            return Ok(speciality);
        }

        // PUT: api/specialities_view/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putspecialities_view(string id, specialities_view specialities_view)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != specialities_view.speciality_name)
            {
                return BadRequest();
            }

            db.Entry(specialities_view).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!specialities_viewExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/specialities_view
        [ResponseType(typeof(specialities_view))]
        public async Task<IHttpActionResult> Postspecialities_view(specialities_view specialities_view)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.specialities_view.Add(specialities_view);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (specialities_viewExists(specialities_view.speciality_name))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = specialities_view.speciality_name }, specialities_view);
        }

        // DELETE: api/specialities_view/5
        [ResponseType(typeof(specialities_view))]
        public async Task<IHttpActionResult> Deletespecialities_view(string id)
        {
            specialities_view specialities_view = await db.specialities_view.FindAsync(id);
            if (specialities_view == null)
            {
                return NotFound();
            }

            db.specialities_view.Remove(specialities_view);
            await db.SaveChangesAsync();

            return Ok(specialities_view);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool specialities_viewExists(string id)
        {
            return db.specialities_view.Count(e => e.speciality_name == id) > 0;
        }
    }
}