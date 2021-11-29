using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;

using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Gestion.Entities
{
    [ConnectionKey("Default"), Module("Gestion")]
    [DisplayName("Arriendos"), InstanceName("Arriendo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [InsertPermission("*")]
    public sealed class ArriendoWizardRow : Row<ArriendoWizardRow.RowFields>, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Dirección"), Column("Direccion_Obra"), Size(250), NotNull, QuickSearch, NameProperty]
        public String DireccionObra
        {
            get => fields.DireccionObra[this];
            set => fields.DireccionObra[this] = value;
        }

        [DisplayName("Region"), NotNull]
        public Int32? Region
        {
            get => fields.Region[this];
            set => fields.Region[this] = value;
        }

        [DisplayName("Ciudad"), Size(100), NotNull]
        public String Ciudad
        {
            get => fields.Ciudad[this];
            set => fields.Ciudad[this] = value;
        }

        [DisplayName("Cliente")]
        public Int32? IdCliente
        {
            get => fields.IdCliente[this];
            set => fields.IdCliente[this] = value;
        }

        [DisplayName("Producto"), NotNull]
        public Int32? IdProducto
        {
            get => fields.IdProducto[this];
            set => fields.IdProducto[this] = value;
        }


        [DisplayName("Cantidad"), NotNull]
        public Int32? Cantidad
        {
            get => fields.Cantidad[this];
            set => fields.Cantidad[this] = value;
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

        [DisplayName("Fecha Inicio"), Column("Fecha_Inicio"), NotNull]
        public DateTime? FechaInicio
        {
            get => fields.FechaInicio[this];
            set => fields.FechaInicio[this] = value;
        }

        [DisplayName("Fecha Devolución"), Column("Fecha_Devolucion"), NotNull]
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

        #region Cliente
        [DisplayName("Rut"), Size(12), NotNull, NotMapped]
        public String Rut
        {
            get => fields.Rut[this];
            set => fields.Rut[this] = value;
        }

        [DisplayName("Razon Social"), Column("Razon_Social"), Size(350), NotNull, NotMapped]
        public String RazonSocial
        {
            get => fields.RazonSocial[this];
            set => fields.RazonSocial[this] = value;
        }

        [DisplayName("Nombre Fantasia"), Column("Nombre_Fantasia"), Size(250), NotMapped]
        public String NombreFantasia
        {
            get => fields.NombreFantasia[this];
            set => fields.NombreFantasia[this] = value;
        }

        [DisplayName("Direccion"), Size(350), NotNull, NotMapped]
        public String Direccion
        {
            get => fields.Direccion[this];
            set => fields.Direccion[this] = value;
        }

        [DisplayName("Ciudad"), Size(200), NotNull, NotMapped]
        public String ClienteCiudad
        {
            get => fields.ClienteCiudad[this];
            set => fields.ClienteCiudad[this] = value;
        }

        [DisplayName("Telefono"), Size(15), NotNull, NotMapped]
        public String Telefono
        {
            get => fields.Telefono[this];
            set => fields.Telefono[this] = value;
        }

        [DisplayName("E Mail"), Column("E-mail"), Size(150), NotNull, NotMapped]
        public String EMail
        {
            get => fields.EMail[this];
            set => fields.EMail[this] = value;
        }
        #endregion


        public ArriendoWizardRow()
            : base()
        {
        }

        public ArriendoWizardRow(RowFields fields)
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

            public Int32Field Cantidad;

            public StringField Rut;
            public StringField RazonSocial;
            public StringField NombreFantasia;
            public StringField Direccion;
            public StringField ClienteCiudad;
            public StringField Telefono;
            public StringField EMail;
        }
    }
}
