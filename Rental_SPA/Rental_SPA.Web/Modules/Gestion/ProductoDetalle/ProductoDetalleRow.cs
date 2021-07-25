using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Rental_SPA.Gestion.Entities
{
    [ConnectionKey("Default"), Module("Gestion"), TableName("[dbo].[ProductoDet]")]
    [DisplayName("Producto Detalle"), InstanceName("Producto Detalle")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductoDetalleRow : Row<ProductoDetalleRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Id Producto"), NotNull]
        public Int32? IdProducto
        {
            get => fields.IdProducto[this];
            set => fields.IdProducto[this] = value;
        }

        [DisplayName("Id Atributo")]
        public Int32? IdAtributo
        {
            get => fields.IdAtributo[this];
            set => fields.IdAtributo[this] = value;
        }

        [DisplayName("Id Tipo Adicional")]
        [ForeignKey("[dbo].[Tipos_Adicionales]", "Id"), LeftJoin("T5")]
        public Int32? IdTipoAdicional
        {
            get => fields.IdTipoAdicional[this];
            set => fields.IdTipoAdicional[this] = value;
        }

        [DisplayName("Tipo Adicional"), Expression("T5.[Titulo]"), MinSelectLevel(SelectLevel.Always)]
        public String IdTipoAdicionalTitulo
        {
            get => fields.IdTipoAdicionalTitulo[this];
            set => fields.IdTipoAdicionalTitulo[this] = value;
        }

        [DisplayName("Valor")]
        public String Valor
        {
            get => fields.Valor[this];
            set => fields.Valor[this] = value;
        }

        public ProductoDetalleRow()
            : base()
        {
        }

        public ProductoDetalleRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdProducto;
            public Int32Field IdAtributo;
            public Int32Field IdTipoAdicional;
            public StringField Valor;
            public StringField IdTipoAdicionalTitulo;
        }
    }
}
