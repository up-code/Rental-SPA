using Microsoft.AspNetCore.Mvc;
using MimeKit;
using Rental_SPA.Web.Modules.Common.Mail;
using Serenity.ComponentModel;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
using Rental_SPA.Common;
using Microsoft.Extensions.Configuration;

namespace Rental_SPA.Web.Modules.Sitio.Home
{
    [Route("~/{action=index}/{id?}")]
    [ScriptSkip]
    public class SitioController : Controller
    {
        private readonly SmtpSettings Smtp;

        public SitioController(IConfiguration config)
        {
            Smtp = config.GetSection(SmtpSettings.SectionKey).Get<SmtpSettings>();
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(Email correo)
        {
            var mess = new MimeMessage();
            mess.From.Add(new MailboxAddress("Contacto Online Rental SPA", Smtp.From));
            mess.To.Add(new MailboxAddress("Administrador", Smtp.To));
            mess.Subject = correo.Subject;
            mess.Body = new TextPart("html")
            {
                Text = "<p>Nombre: " + correo.Name + "</p></br>" +
                       "<p>E-mail: " + correo.Mail + "</p></br>" +
                       "<p>Mensaje: " + correo.Message + "</p>"
            };

            using (var client = new SmtpClient())
            {
                client.Connect(Smtp.Host, Smtp.Port, Smtp.UseSsl);
                client.Authenticate(Smtp.User, Smtp.Password);
                client.Send(mess);
                client.Disconnect(true);
            }

            var result = "ok";

            return Json(new { res = result });
        }
    }
}
