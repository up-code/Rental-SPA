using Microsoft.AspNetCore.Mvc;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rental_SPA.Web.Modules.Sitio.Home
{
    [Route("~/{action=index}/{id?}")]
    [ScriptSkip]
    public class SitioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
