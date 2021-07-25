using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using Rental_SPA.Gestion.Entities;

namespace Rental_SPA.Gestion.Columns
{
    [ColumnsScript("Gestion.Productos")]
    [BasedOnRow(typeof(Entities.ProductosRow), CheckNames = true)]
    public class ProductosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }

        [EditLink]
        public String Nombre { get; set; }

        public String IdTipoArriendoTipo { get; set; }

        //public String Foto { get; set; }

        [DisplayFormat("0"), AlignRight, HeaderCssClass("align-right")]
        public Int32 Cantidad { get; set; }

        [DisplayFormat("0.00"), AlignRight, HeaderCssClass("align-right")]
        public Double Precio { get; set; }

        [DisplayFormat("0.00"), AlignRight, HeaderCssClass("align-right")]
        public Double Iva { get; set; }

        [DisplayFormat("0.00"), AlignRight, HeaderCssClass("align-right")]
        public Double Garantia { get; set; }

        [AlignCenter, HeaderCssClass("align-center")]
        [Width(80)]
        public Boolean Activo { get; set; }

        [QuickFilter, FilterOnly]
        [LookupEditor(typeof(TipoArriendoRow))]
        public Int32 IdTipoArriendo { get; set; }
    }
}