using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Columns
{
    [ColumnsScript("Gestion.ProductoDetalle")]
    [BasedOnRow(typeof(Entities.ProductoDetalleRow), CheckNames = true)]
    public class ProductoDetalleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 IdProducto { get; set; }
        public Int32 IdAtributo { get; set; }
        public Int32 IdTipoAdicional { get; set; }
        public Double Valor { get; set; }
    }
}