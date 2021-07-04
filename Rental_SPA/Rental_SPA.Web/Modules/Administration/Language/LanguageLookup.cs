using Rental_SPA.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace Rental_SPA.Administration.Lookups
{
    [LookupScript]
    public sealed class LanguageLookup : RowLookupScript<LanguageRow>
    {
        public LanguageLookup(ISqlConnections sqlConnections)
            : base(sqlConnections)
        {
            IdField = LanguageRow.Fields.LanguageId.PropertyName;
            Permission = "*";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Select(LanguageRow.Fields.LanguageId);
        }
    }
}