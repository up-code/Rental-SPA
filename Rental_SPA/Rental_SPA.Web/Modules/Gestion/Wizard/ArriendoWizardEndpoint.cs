using System;
using System.Data;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using Serenity.Data;
using Serenity.Services;

using MyRepository = Rental_SPA.Gestion.Repositories.ArriendoWizardRepository;
using MyRow = Rental_SPA.Gestion.Entities.ArriendoWizardRow;

namespace Rental_SPA.Gestion.Endpoints
{
    [Route("Services/Gestion/ArriendoWizard/[action]")]
    [ConnectionKey(typeof(MyRow))]
    public class ArriendoWizardController : ServiceEndpoint
    {
        [HttpPost, AllowAnonymous]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] Common.IEmailSender emailSender,
            [FromServices] IServiceProvider services,
            [FromServices] IConfiguration configuration)
        {
            return new MyRepository(Context, emailSender, services, configuration).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return null;//new MyRepository(Context).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return null; // new MyRepository(Context).Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return null; // new MyRepository(Context).Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return null; // new MyRepository(Context).List(connection, request);
        }
    }
}
