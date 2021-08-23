using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using Rental_SPA.Gestion.Entities;

namespace Rental_SPA.Gestion.Forms
{
    [FormScript("Gestion.Productos")]
    [BasedOnRow(typeof(Entities.ProductosRow), CheckNames = true)]
    public class ProductosForm
    {

        [Category("Producto")]

        [ThreeQuarterWidth]
        public String Nombre { get; set; }
        [QuarterWidth]
        public Boolean Activo { get; set; }
        [HalfWidth]
        [LookupEditor(typeof(TipoArriendoRow), InplaceAdd = true)]
        public Int32 IdTipoArriendo { get; set; }


        [HtmlContentEditor]
        public String Descripcion { get; set; }

        [Category("Datos Especificos")]
        [ProductosDetEditorCard, DisplayName(""), LabelWidth(0)]
        public List<ProductoDetalleRow> ProductosDet { get; set; }

        [Category("Precio")]
        [QuarterWidth]
        public Int32 Cantidad { get; set; }
        [QuarterWidth]
        public Double Precio { get; set; }
        [QuarterWidth]
        public Double Iva { get; set; }
        [QuarterWidth]
        public Double Garantia { get; set; }

        [Category("Foto")]

        [LabelWidth(0), DisplayName("")]
        public String Foto { get; set; }

    }
}