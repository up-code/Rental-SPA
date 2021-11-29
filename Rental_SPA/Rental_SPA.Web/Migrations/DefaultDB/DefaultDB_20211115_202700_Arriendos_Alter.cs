using FluentMigrator;

using Rental_SPA.Gestion.Entities;

using System;

namespace Rental_SPA.Migrations.DefaultDB
{
    [Migration(20211115202700)]
    public class DefaultDB_20211115_202700_Arriendos_Alter : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("Arriendos")
                .AddColumn(ArriendosRow.Fields.Cantidad.Name).AsInt16().NotNullable().WithDefaultValue(0);
        }
    }
}