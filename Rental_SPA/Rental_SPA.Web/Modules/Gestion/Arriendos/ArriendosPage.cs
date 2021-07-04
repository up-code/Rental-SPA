using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    [PageAuthorize(typeof(Entities.ArriendosRow))]
    public class ArriendosController : Controller
    {
        [Route("Gestion/Arriendos")]
        public ActionResult Index()
        {
            return View("~/Modules/Gestion/Arriendos/ArriendosIndex.cshtml");
        }
    }
}