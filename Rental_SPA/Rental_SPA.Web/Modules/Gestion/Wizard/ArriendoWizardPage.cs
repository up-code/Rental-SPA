using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Gestion.Pages
{

    //[PageAuthorize(typeof(Entities.ArriendoWizardRow))]
    public class ArriendoWizardController : Controller
    {
        [Route("Wizard/{id?}")]
        public ActionResult Index(int id)
        {
            return View(MVC.Views.Gestion.Wizard.ArriendoWizardIndex, id);
        }
    }
}