using FluentMigrator;

using Rental_SPA.Gestion.Entities;

using System;

namespace Rental_SPA.Migrations.DefaultDB
{
    [Migration(20211115174100)]
    public class DefaultDB_20211115_174100_Adicionales_Alter : ForwardOnlyMigration
    {
        public override void Up()
        {
            //Tabla Nuestros Clientes (Socios)
            this.CreateTableWithId32("Regiones", "Id", c => c
            .WithColumn("Nombre").AsString(300).NotNullable()
            .WithColumn("Sigla").AsString(5).Nullable());

            Insert.IntoTable("Regiones").Row(new
            {
                Nombre = "Región de Coquimbo",
                Sigla = "IV"
                
            });

        }
    }
}