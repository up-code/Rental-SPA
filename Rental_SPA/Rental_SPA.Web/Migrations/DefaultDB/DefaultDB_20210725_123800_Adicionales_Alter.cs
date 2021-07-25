using FluentMigrator;

using Rental_SPA.Gestion.Entities;

using System;

namespace Rental_SPA.Migrations.DefaultDB
{
    [Migration(20210725123800)]
    public class DefaultDB_20210725_123800_Adicionales_Alter : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("Tipos_Adicionales")
                .AlterColumn(nameof(TiposAdicionalesRow.Fields.MostrarPorcentaje)).AsBoolean().Nullable()
                .AlterColumn(nameof(TiposAdicionalesRow.Fields.MostrarImporte)).AsBoolean().Nullable();
        }
    }
}