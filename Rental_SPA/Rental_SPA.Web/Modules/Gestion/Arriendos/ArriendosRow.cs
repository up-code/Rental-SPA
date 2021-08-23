using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Gestion.Entities
{
    [ConnectionKey("Default"), Module("Gestion"), TableName("[dbo].[Arriendos]")]
    [DisplayName("Arriendos"), InstanceName("Arriendos")]
    [ReadPermission("*")]
    [ModifyPermission("Administration:General")]
    public sealed class ArriendosRow : Row<ArriendosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Direccion Obra"), Column("Direccion_Obra"), Size(250), NotNull, QuickSearch, NameProperty]
        public String DireccionObra
        {
            get => fields.DireccionObra[this];
            set => fields.DireccionObra[this] = value;
        }

        [DisplayName("Region")]
        public Int32? Region
        {
            get => fields.Region[this];
            set => fields.Region[this] = value;
        }

        [DisplayName("Ciudad"), Size(100)]
        public String Ciudad
        {
            get => fields.Ciudad[this];
            set => fields.Ciudad[this] = value;
        }

        [DisplayName("Id Cliente")]
        public Int32? IdCliente
        {
            get => fields.IdCliente[this];
            set => fields.IdCliente[this] = value;
        }

        [DisplayName("Id Producto")]
        public Int32? IdProducto
        {
            get => fields.IdProducto[this];
            set => fields.IdProducto[this] = value;
        }

        [DisplayName("Garantia")]
        public Double? Garantia
        {
            get => fields.Garantia[this];
            set => fields.Garantia[this] = value;
        }

        [DisplayName("Con Garantia")]
        public Boolean? ConGarantia
        {
            get => fields.ConGarantia[this];
            set => fields.ConGarantia[this] = value;
        }

        [DisplayName("Fecha Inicio"), Column("Fecha_Inicio")]
        public DateTime? FechaInicio
        {
            get => fields.FechaInicio[this];
            set => fields.FechaInicio[this] = value;
        }

        [DisplayName("Fecha Devolucion"), Column("Fecha_Devolucion")]
        public DateTime? FechaDevolucion
        {
            get => fields.FechaDevolucion[this];
            set => fields.FechaDevolucion[this] = value;
        }

        [DisplayName("Neto")]
        public Double? Neto
        {
            get => fields.Neto[this];
            set => fields.Neto[this] = value;
        }

        [DisplayName("Iva")]
        public Double? Iva
        {
            get => fields.Iva[this];
            set => fields.Iva[this] = value;
        }

        [DisplayName("Total")]
        public Double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }

        public ArriendosRow()
            : base()
        {
        }

        public ArriendosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField DireccionObra;
            public Int32Field Region;
            public StringField Ciudad;
            public Int32Field IdCliente;
            public Int32Field IdProducto;
            public DoubleField Garantia;
            public BooleanField ConGarantia;
            public DateTimeField FechaInicio;
            public DateTimeField FechaDevolucion;
            public DoubleField Neto;
            public DoubleField Iva;
            public DoubleField Total;
        }
    }
}
