using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Configuration;

using MimeKit;

using Rental_SPA.Common;

using Serenity;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;

using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

using MyRow = Rental_SPA.Gestion.Entities.ArriendoWizardRow;

namespace Rental_SPA.Gestion.Repositories
{
    public class ArriendoWizardRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        private Common.IEmailSender EmailSender;
        private IServiceProvider Services;
        private SmtpSettings Smtp;

        public ArriendoWizardRepository(IRequestContext context, Common.IEmailSender emailSender = null, IServiceProvider services = null, IConfiguration configuration = null)
            : base(context)
        {
            EmailSender = emailSender;
            Services = services;
            Smtp = configuration.GetSection(SmtpSettings.SectionKey).Get<SmtpSettings>();
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var returnValue = new SaveResponse();

            // Guardo el Cliente
            ClientesRepository clientesRepository = new(Context);
            SaveResponse clientesResponse = clientesRepository.Create(uow, new SaveRequest<Entities.ClientesRow>
            {
                Entity = new Entities.ClientesRow
                {
                    Rut = request.Entity.Rut,
                    RazonSocial = request.Entity.RazonSocial,
                    NombreFantasia = request.Entity.NombreFantasia,
                    Direccion = request.Entity.Direccion,
                    Ciudad = request.Entity.ClienteCiudad,
                    Telefono = request.Entity.Telefono,
                    EMail = request.Entity.EMail
                }
            });

            if (!string.IsNullOrEmpty(clientesResponse?.Error?.Message))
            {
                throw new Exception(clientesResponse.Error.Message);
            }

            // TODO: Validar stock del idproducto!

            // Guardo el arriendo.
            ArriendosRepository ArriendoRepository = new(Context);
            SaveResponse ArriendoResponse = ArriendoRepository.Create(uow, new SaveRequest<Entities.ArriendosRow>
            {
                Entity = new Entities.ArriendosRow
                {
                    DireccionObra = request.Entity.DireccionObra,
                    Region = request.Entity.Region,
                    Ciudad = request.Entity.Ciudad,
                    IdCliente = (int)(long)clientesResponse.EntityId,
                    IdProducto = request.Entity.IdProducto,
                    Cantidad = request.Entity.Cantidad,
                    Garantia = request.Entity.Garantia,
                    ConGarantia = request.Entity.ConGarantia,
                    FechaInicio = request.Entity.FechaInicio,
                    FechaDevolucion = request.Entity.FechaDevolucion,
                    Neto = request.Entity.Neto,
                    Iva = request.Entity.Iva,
                    Total = request.Entity.Total
                }
            });

            if ((long)ArriendoResponse.EntityId > 0)
            {
                uow.Connection.GetCurrentActualTransaction().Commit();

                returnValue.EntityId = ArriendoResponse.EntityId;

                // List<Task> task = new List<Task>();

                //// Mandamos el email al Paciente
                //task.Add(Task.Run(() =>
                //{
                //    var email = new MimeMessage();
                //    email.From.Add(new MailboxAddress("Dr. Rental_SPA Jablonka", Smtp.From));
                //    email.To.Add(new MailboxAddress(request.Entity.Nombres + " " + request.Entity.Apellidos, request.Entity.Email));
                //    email.Subject = Texts.Site.Reports.MailSubjectPaciente.ToString(Localizer);
                //    email.Body = new TextPart("html")
                //    {
                //        Text = TemplateHelper.RenderViewToString(Services, MVC.Views.Reports.Mails.MailPaciente, request.Entity)
                //    };
                //    EmailSender.Send(email, true);
                //}));

                //// Mandamos el email al Medico
                //task.Add(Task.Run(() =>
                //{
                //    var emailDr = new MimeMessage();
                //    emailDr.From.Add(new MailboxAddress("Sitio Web", Smtp.From));   // sitio@misitio.com
                //    emailDr.To.Add(new MailboxAddress("Dr. Rental_SPA", Smtp.To)); // Doctor
                //    emailDr.Subject = Texts.Site.Reports.MailSubjectDoctor.ToString(Context.Localizer);
                //    emailDr.Body = new TextPart("html")
                //    {
                //        Text = TemplateHelper.RenderViewToString(Services, MVC.Views.Reports.Mails.MailDoctor, request.Entity)
                //    };
                //    EmailSender.Send(emailDr, true);
                //}));

                // Task.WaitAll(task.ToArray());
            }

            return returnValue;
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }

            protected override void ExecuteSave()
            {
                base.ExecuteSave();
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
        }
    }
}