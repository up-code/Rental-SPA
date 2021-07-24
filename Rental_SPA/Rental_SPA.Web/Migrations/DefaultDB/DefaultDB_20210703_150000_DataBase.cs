using FluentMigrator;
using System;

namespace Rental_SPA.Migrations.DefaultDB
{
    [Migration(20210703150000)]
    public class DefaultDB_20210703_150000_DataBase : AutoReversingMigration
    {
        public override void Up()
        {

            //Tabla para las fotos del Slider
            this.CreateTableWithId32("Slider", "Id", s => s
              .WithColumn("Titulo").AsString(100).NotNullable()
              .WithColumn("SubTitulo").AsString(int.MaxValue).NotNullable()
              .WithColumn("Foto").AsString(350).NotNullable());

            //Tabla para el contenido de Nosotros.
            this.CreateTableWithId32("Nosotros", "Id", n => n
            .WithColumn("Titulo").AsString(100).NotNullable()
            .WithColumn("body").AsString(int.MaxValue).NotNullable()
            .WithColumn("comtario").AsString(300).NotNullable()
            .WithColumn("icono").AsString(50).Nullable()
            .WithColumn("Foto").AsString(500).NotNullable());

            this.CreateTableWithId32("Historia", "Id", h => h
            .WithColumn("Titulo").AsString(300).NotNullable()
            .WithColumn("Body").AsString(int.MaxValue).NotNullable()
            .WithColumn("Orden").AsInt32()
            );




            //Tabla para tipos de arriendos
            this.CreateTableWithId32("Tipo_Arriendo", "Id", a => a
            .WithColumn("Tipo").AsString(50).NotNullable()
            .WithColumn("Codigo").AsString(2).NotNullable());

            //Tabla para los Productos
            this.CreateTableWithId32("Productos", "Id", s => s
            .WithColumn("Nombre").AsString(150).NotNullable()
            .WithColumn("Foto").AsString(int.MaxValue).Nullable()
            .WithColumn("Cantidad").AsInt32().Nullable()
            .WithColumn("Precio").AsDouble().NotNullable()
            .WithColumn("Iva").AsDouble().NotNullable()
            .WithColumn("Activo").AsBoolean().Nullable()
            .WithColumn("Garantia").AsDouble().Nullable()
            .WithColumn("IdTipo_Arriendo").AsInt32().NotNullable());

            //Tabla ProductoDet
            this.CreateTableWithId32("ProductoDet", "Id", d => d
            .WithColumn("IdProducto").AsInt32().NotNullable()
            .WithColumn("IdAtributo").AsInt32().Nullable()
            .WithColumn("IdTipoAdicional").AsInt32().Nullable()
            .WithColumn("Valor").AsDouble().Nullable());

            //Tabla Atributos
            this.CreateTableWithId32("Atributos", "Id", a => a
            .WithColumn("Descripcion").AsString(400).NotNullable()
            .WithColumn("Codigo").AsString(4).Nullable()
            .WithColumn("Porciento").AsDouble().Nullable()
            .WithColumn("Importe").AsDouble().Nullable());

            //Tabla Tipos Adicionales
            this.CreateTableWithId32("Tipos_Adicionales", "Id", t => t
            .WithColumn("Descripcion").AsString(500).NotNullable()
            .WithColumn("Titulo").AsString(200).NotNullable()
            .WithColumn("Orden").AsInt32().Nullable()
            .WithColumn("MostrarPorcentaje").AsBoolean()
            .WithColumn("MostrarImporte").AsBoolean());



            //Tabla para los Clientes
            this.CreateTableWithId32("Clientes", "Id", c => c
            .WithColumn("Rut").AsString(12).NotNullable()
            .WithColumn("Razon_Social").AsString(350).NotNullable()
            .WithColumn("Nombre_Fantasia").AsString(250).Nullable()
            .WithColumn("Direccion").AsString(350).NotNullable()
            .WithColumn("Ciudad").AsString(200).NotNullable()
            .WithColumn("Telefono").AsString(15).NotNullable()
            .WithColumn("E-mail").AsString(150).NotNullable());

            //Tabla para los arriendos y sus tipos
            this.CreateTableWithId32("Arriendos", "Id", a => a
            .WithColumn("Direccion_Obra").AsString(250).NotNullable()
            .WithColumn("Region").AsInt32().Nullable()
            .WithColumn("Ciudad").AsString(100).Nullable()
            .WithColumn("IdCliente").AsInt32().Nullable()
            .WithColumn("IdProducto").AsInt32().Nullable()
            .WithColumn("Garantia").AsDouble().Nullable()
            .WithColumn("ConGarantia").AsBoolean().Nullable()
            .WithColumn("Fecha_Inicio").AsDateTime().Nullable()
            .WithColumn("Fecha_Devolucion").AsDateTime().Nullable()
            .WithColumn("Neto").AsDouble().Nullable()
            .WithColumn("Iva").AsDouble().Nullable()
            .WithColumn("Total").AsDouble().Nullable());

            //Tabla Nuestros Clientes (Socios)
            this.CreateTableWithId32("Nuestros_Clientes", "Id", c => c
            .WithColumn("Logo").AsString(500).NotNullable()
            .WithColumn("Nombre").AsString(300).NotNullable()
            .WithColumn("Url").AsString(500).NotNullable());


           
        }
    }
}