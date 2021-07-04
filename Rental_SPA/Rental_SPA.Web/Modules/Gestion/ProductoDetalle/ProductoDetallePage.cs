using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    [PageAuthorize(typeof(Entities.ProductoDetalleRow))]
    public class ProductoDetalleController : Controller
    {
        [Route("Gestion/ProductoDetalle")]
        public ActionResult Index()
        {
            return View("~/Modules/Gestion/ProductoDetalle/ProductoDetalleIndex.cshtml");
        }
    }
}