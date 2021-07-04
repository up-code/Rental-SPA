using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Gestion.Entities
{
    [ConnectionKey("Default"), Module("Gestion"), TableName("[dbo].[Productos]")]
    [DisplayName("Productos"), InstanceName("Productos")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductosRow : Row<ProductosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Nombre"), Size(150), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Foto")]
        public String Foto
        {
            get => fields.Foto[this];
            set => fields.Foto[this] = value;
        }

        [DisplayName("Cantidad")]
        public Int32? Cantidad
        {
            get => fields.Cantidad[this];
            set => fields.Cantidad[this] = value;
        }

        [DisplayName("Precio"), NotNull]
        public Double? Precio
        {
            get => fields.Precio[this];
            set => fields.Precio[this] = value;
        }

        [DisplayName("Iva"), NotNull]
        public Double? Iva
        {
            get => fields.Iva[this];
            set => fields.Iva[this] = value;
        }

        [DisplayName("Activo")]
        public Boolean? Activo
        {
            get => fields.Activo[this];
            set => fields.Activo[this] = value;
        }

        [DisplayName("Garantia")]
        public Double? Garantia
        {
            get => fields.Garantia[this];
            set => fields.Garantia[this] = value;
        }

        [DisplayName("Id Tipo Arriendo"), Column("IdTipo_Arriendo"), NotNull]
        public Int32? IdTipoArriendo
        {
            get => fields.IdTipoArriendo[this];
            set => fields.IdTipoArriendo[this] = value;
        }

        public ProductosRow()
            : base()
        {
        }

        public ProductosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nombre;
            public StringField Foto;
            public Int32Field Cantidad;
            public DoubleField Precio;
            public DoubleField Iva;
            public BooleanField Activo;
            public DoubleField Garantia;
            public Int32Field IdTipoArriendo;
        }
    }
}
