using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    [PageAuthorize(typeof(Entities.TipoArriendoRow))]
    public class TipoArriendoController : Controller
    {
        [Route("Gestion/TipoArriendo")]
        public ActionResult Index()
        {
            return View("~/Modules/Gestion/TipoArriendo/TipoArriendoIndex.cshtml");
        }
    }
}