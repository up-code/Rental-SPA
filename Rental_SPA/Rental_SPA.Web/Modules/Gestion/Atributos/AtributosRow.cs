using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Gestion.Entities
{
    [ConnectionKey("Default"), Module("Gestion"), TableName("[dbo].[Atributos]")]
    [DisplayName("Atributos"), InstanceName("Atributos")]
    [ReadPermission("*")]
    [ModifyPermission("Administration:General")]
    public sealed class AtributosRow : Row<AtributosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Descripcion"), Size(400), NotNull, QuickSearch, NameProperty]
        public String Descripcion
        {
            get => fields.Descripcion[this];
            set => fields.Descripcion[this] = value;
        }

        [DisplayName("Codigo"), Size(4)]
        public String Codigo
        {
            get => fields.Codigo[this];
            set => fields.Codigo[this] = value;
        }

        [DisplayName("Porciento")]
        public Double? Porciento
        {
            get => fields.Porciento[this];
            set => fields.Porciento[this] = value;
        }

        [DisplayName("Importe")]
        public Double? Importe
        {
            get => fields.Importe[this];
            set => fields.Importe[this] = value;
        }

        public AtributosRow()
            : base()
        {
        }

        public AtributosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Descripcion;
            public StringField Codigo;
            public DoubleField Porciento;
            public DoubleField Importe;
        }
    }
}
