using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Sitio.Pages
{

    [PageAuthorize(typeof(Entities.NosotrosRow))]
    public class NosotrosController : Controller
    {
        [Route("Sitio/Nosotros")]
        public ActionResult Index()
        {
            return View("~/Modules/Sitio/Nosotros/NosotrosIndex.cshtml");
        }
    }
}