using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    [PageAuthorize(typeof(Entities.ClientesRow))]
    public class ClientesController : Controller
    {
        [Route("Gestion/Clientes")]
        public ActionResult Index()
        {
            return View("~/Modules/Gestion/Clientes/ClientesIndex.cshtml");
        }
    }
}