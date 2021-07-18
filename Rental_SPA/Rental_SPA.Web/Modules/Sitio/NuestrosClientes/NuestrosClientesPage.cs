using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Sitio.Pages
{

    [PageAuthorize(typeof(Entities.NuestrosClientesRow))]
    public class NuestrosClientesController : Controller
    {
        [Route("Sitio/NuestrosClientes")]
        public ActionResult Index()
        {
            return View("~/Modules/Sitio/NuestrosClientes/NuestrosClientesIndex.cshtml");
        }
    }
}