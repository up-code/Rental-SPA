using FluentMigrator;

using Rental_SPA.Gestion.Entities;

using System;

namespace Rental_SPA.Migrations.DefaultDB
{
    [Migration(20211127202700)]
    public class DefaultDB_20211127_202700_TipoArriendo_Alter : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("Tipo_Arriendo")
                .AddColumn(TipoArriendoRow.Fields.Cotizacion.Name).AsInt16().Nullable();
        }
    }
}