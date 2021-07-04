using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Rental_SPA.Sitio.Pages
{

    [PageAuthorize(typeof(Entities.SliderRow))]
    public class SliderController : Controller
    {
        [Route("Sitio/Slider")]
        public ActionResult Index()
        {
            return View("~/Modules/Sitio/Slider/SliderIndex.cshtml");
        }
    }
}