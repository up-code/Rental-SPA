using FluentMigrator;

using Rental_SPA.Gestion.Entities;

using System;

namespace Rental_SPA.Migrations.DefaultDB
{
    [Migration(20210724150000)]
    public class DefaultDB_20210724_150000_Productos_Alter : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("Tipo_Arriendo").AddColumn(nameof(TipoArriendoRow.Fields.Detalles)).AsString(250).Nullable();
            Alter.Table("ProductoDet").AlterColumn(nameof(ProductoDetalleRow.Fields.Valor)).AsString(250).Nullable();
        }
    }
}