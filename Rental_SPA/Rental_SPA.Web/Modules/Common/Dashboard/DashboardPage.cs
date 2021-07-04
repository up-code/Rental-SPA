using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;

namespace Rental_SPA.Common.Pages
{
    [Route("Dashboard/{action=index}")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet]
        public ActionResult Index(
            )
        {
            return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
        }
    }
}
