using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Sitio.Pages
{

    [PageAuthorize(typeof(Entities.HistoriaRow))]
    public class HistoriaController : Controller
    {
        [Route("Sitio/Historia")]
        public ActionResult Index()
        {
            return View("~/Modules/Sitio/Historia/HistoriaIndex.cshtml");
        }
    }
}