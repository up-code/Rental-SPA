using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    [PageAuthorize(typeof(Entities.ProductosRow))]
    public class ProductosController : Controller
    {
        [Route("Gestion/Productos")]
        public ActionResult Index()
        {
            return View("~/Modules/Gestion/Productos/ProductosIndex.cshtml");
        }
    }
}