using Serenity.Services;

namespace Rental_SPA.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}