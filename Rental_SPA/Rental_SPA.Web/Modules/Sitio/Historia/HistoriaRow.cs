using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Sitio.Entities
{
    [ConnectionKey("Default"), Module("Sitio"), TableName("[dbo].[Historia]")]
    [DisplayName("Historia"), InstanceName("Historia")]
    [ReadPermission("*")]
    [ModifyPermission("Administration:General")]
    public sealed class HistoriaRow : Row<HistoriaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Titulo"), Size(300), NotNull, QuickSearch, NameProperty]
        public String Titulo
        {
            get => fields.Titulo[this];
            set => fields.Titulo[this] = value;
        }

        [DisplayName("Body"), NotNull]
        public String Body
        {
            get => fields.Body[this];
            set => fields.Body[this] = value;
        }

        [DisplayName("Orden")]
        public Int32? Orden
        {
            get => fields.Orden[this];
            set => fields.Orden[this] = value;
        }

        public HistoriaRow()
            : base()
        {
        }

        public HistoriaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Titulo;
            public StringField Body;
            public Int32Field Orden;
        }
    }
}
