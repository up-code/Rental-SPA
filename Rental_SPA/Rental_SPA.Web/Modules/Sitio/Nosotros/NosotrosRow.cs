using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Sitio.Entities
{
    [ConnectionKey("Default"), Module("Sitio"), TableName("[dbo].[Nosotros]")]
    [DisplayName("Nosotros"), InstanceName("Nosotros")]
    [ReadPermission("*")]
    [ModifyPermission("Administration:General")]
    public sealed class NosotrosRow : Row<NosotrosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Titulo"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Titulo
        {
            get => fields.Titulo[this];
            set => fields.Titulo[this] = value;
        }

        [DisplayName("Body"), Column("body"), NotNull]
        public String Body
        {
            get => fields.Body[this];
            set => fields.Body[this] = value;
        }

        [DisplayName("Comtario"), Column("comtario"), Size(300), NotNull]
        public String Comtario
        {
            get => fields.Comtario[this];
            set => fields.Comtario[this] = value;
        }

        [DisplayName("Icono"), Column("icono"), Size(50)]
        public String Icono
        {
            get => fields.Icono[this];
            set => fields.Icono[this] = value;
        }
        [DisplayName("Foto"), Column("Foto"), Size(50)]
        [ImageUploadEditor(FilenameFormat = "Nosotros/{1:00000}/{0:000}_{4}")]
        public String Foto
        {
            get => fields.Foto[this];
            set => fields.Foto[this] = value;
        }

        public NosotrosRow()
            : base()
        {
        }

        public NosotrosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Titulo;
            public StringField Body;
            public StringField Comtario;
            public StringField Icono;
            public StringField Foto;
        }
    }
}
