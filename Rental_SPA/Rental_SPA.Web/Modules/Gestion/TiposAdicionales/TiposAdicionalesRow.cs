using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;

using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Gestion.Entities
{
    [ConnectionKey("Default"), Module("Gestion"), TableName("[dbo].[Tipos_Adicionales]")]
    [DisplayName("Tipos Adicionales"), InstanceName("Tipos Adicionales")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    [LookupScript]
    public sealed class TiposAdicionalesRow : Row<TiposAdicionalesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Titulo"), Size(200), NotNull, QuickSearch, NameProperty]
        public String Titulo
        {
            get => fields.Titulo[this];
            set => fields.Titulo[this] = value;
        }

        [DisplayName("Descripcion"), Size(500), NotNull]
        public String Descripcion
        {
            get => fields.Descripcion[this];
            set => fields.Descripcion[this] = value;
        }

        [DisplayName("Orden"), LookupInclude, NotNull]
        public Int32? Orden
        {
            get => fields.Orden[this];
            set => fields.Orden[this] = value;
        }

        [DisplayName("Mostrar Porcentaje")]
        public Boolean? MostrarPorcentaje
        {
            get => fields.MostrarPorcentaje[this];
            set => fields.MostrarPorcentaje[this] = value;
        }

        [DisplayName("Mostrar Importe")]
        public Boolean? MostrarImporte
        {
            get => fields.MostrarImporte[this];
            set => fields.MostrarImporte[this] = value;
        }

        public TiposAdicionalesRow()
            : base()
        {
        }

        public TiposAdicionalesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Descripcion;
            public StringField Titulo;
            public Int32Field Orden;
            public BooleanField MostrarPorcentaje;
            public BooleanField MostrarImporte;
        }
    }
}
