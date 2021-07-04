using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    [PageAuthorize(typeof(Entities.AtributosRow))]
    public class AtributosController : Controller
    {
        [Route("Gestion/Atributos")]
        public ActionResult Index()
        {
            return View("~/Modules/Gestion/Atributos/AtributosIndex.cshtml");
        }
    }
}