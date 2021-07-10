using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Sitio.Entities
{
    [ConnectionKey("Default"), Module("Sitio"), TableName("[dbo].[Slider]")]
    [DisplayName("Slider"), InstanceName("Slider")]
    [ReadPermission("*")]
    [ModifyPermission("Administration:General")]
    public sealed class SliderRow : Row<SliderRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Sub Titulo"), NotNull]
        [HtmlContentEditor(Rows = 5)]
        public String SubTitulo
        {
            get => fields.SubTitulo[this];
            set => fields.SubTitulo[this] = value;
        }
        
        [DisplayName("Foto"), Size(350), NotNull]
        [FileUploadEditor(FilenameFormat = "Slider/{1:00000}/{0:000}_{4}")]
        public String Foto
        {
            get => fields.Foto[this];
            set => fields.Foto[this] = value;
        }

        public SliderRow()
            : base()
        {
        }

        public SliderRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Titulo;
            public StringField SubTitulo;
            public StringField Foto;
        }
    }
}
