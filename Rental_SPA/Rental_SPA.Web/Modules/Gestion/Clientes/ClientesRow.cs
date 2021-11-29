using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Gestion.Entities
{
    [ConnectionKey("Default"), Module("Gestion"), TableName("[dbo].[Clientes]")]
    [DisplayName("Clientes"), InstanceName("Clientes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class ClientesRow : Row<ClientesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Rut"), Size(12), NotNull, QuickSearch]
        public String Rut
        {
            get => fields.Rut[this];
            set => fields.Rut[this] = value;
        }

        [DisplayName("Razon Social"), Column("Razon_Social"), Size(350), NotNull, NameProperty]
        public String RazonSocial
        {
            get => fields.RazonSocial[this];
            set => fields.RazonSocial[this] = value;
        }

        [DisplayName("Nombre Fantasia"), Column("Nombre_Fantasia"), Size(250)]
        public String NombreFantasia
        {
            get => fields.NombreFantasia[this];
            set => fields.NombreFantasia[this] = value;
        }

        [DisplayName("Direccion"), Size(350), NotNull]
        public String Direccion
        {
            get => fields.Direccion[this];
            set => fields.Direccion[this] = value;
        }

        [DisplayName("Ciudad"), Size(200), NotNull]
        public String Ciudad
        {
            get => fields.Ciudad[this];
            set => fields.Ciudad[this] = value;
        }

        [DisplayName("Telefono"), Size(15), NotNull]
        public String Telefono
        {
            get => fields.Telefono[this];
            set => fields.Telefono[this] = value;
        }

        [DisplayName("E Mail"), Column("E-mail"), Size(150), NotNull]
        public String EMail
        {
            get => fields.EMail[this];
            set => fields.EMail[this] = value;
        }

        public ClientesRow()
            : base()
        {
        }

        public ClientesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Rut;
            public StringField RazonSocial;
            public StringField NombreFantasia;
            public StringField Direccion;
            public StringField Ciudad;
            public StringField Telefono;
            public StringField EMail;
        }
    }
}
