using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Sitio.Entities
{
    [ConnectionKey("Default"), Module("Sitio"), TableName("[dbo].[Nuestros_Clientes]")]
    [DisplayName("Nuestros Clientes"), InstanceName("Nuestros Clientes")]
    [ReadPermission("*")]
    [ModifyPermission("Administration:General")]
    public sealed class NuestrosClientesRow : Row<NuestrosClientesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Logo"), Size(500), NotNull]
        [ImageUploadEditor(FilenameFormat = "OurClients/{1:00000}/{0:000}_{4}")]
        public String Logo
        {
            get => fields.Logo[this];
            set => fields.Logo[this] = value;
        }

        [DisplayName("Nombre"), Size(300), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Url"), Size(500)]
        public String Url
        {
            get => fields.Url[this];
            set => fields.Url[this] = value;
        }

        public NuestrosClientesRow()
            : base()
        {
        }

        public NuestrosClientesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Logo;
            public StringField Nombre;
            public StringField Url;
        }
    }
}
