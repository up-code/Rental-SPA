using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    [PageAuthorize(typeof(Entities.TiposAdicionalesRow))]
    public class TiposAdicionalesController : Controller
    {
        [Route("Gestion/TiposAdicionales")]
        public ActionResult Index()
        {
            return View("~/Modules/Gestion/TiposAdicionales/TiposAdicionalesIndex.cshtml");
        }
    }
}