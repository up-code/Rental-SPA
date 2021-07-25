using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;

using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Gestion.Entities
{
    [ConnectionKey("Default"), Module("Gestion"), TableName("[dbo].[Tipo_Arriendo]")]
    [DisplayName("Tipo Arriendo"), InstanceName("Tipo Arriendo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    [LookupScript]
    public sealed class TipoArriendoRow : Row<TipoArriendoRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Tipo"), Size(50), NotNull, QuickSearch, NameProperty]
        public String Tipo
        {
            get => fields.Tipo[this];
            set => fields.Tipo[this] = value;
        }

        [DisplayName("Codigo"), Size(2), NotNull]
        public String Codigo
        {
            get => fields.Codigo[this];
            set => fields.Codigo[this] = value;
        }

        [DisplayName("Detalles"), Size(250), LookupInclude]
        public String Detalles
        {
            get => fields.Detalles[this];
            set => fields.Detalles[this] = value;
        }

        public TipoArriendoRow()
            : base()
        {
        }

        public TipoArriendoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Tipo;
            public StringField Codigo;
            public StringField Detalles;
        }
    }
}
