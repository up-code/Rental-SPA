using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    [PageAuthorize(typeof(Entities.RegionesRow))]
    public class RegionesController : Controller
    {
        [Route("Gestion/Regiones")]
        public ActionResult Index()
        {
            return View("~/Modules/Gestion/Regiones/RegionesIndex.cshtml");
        }
    }
}