using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Forms
{
    [FormScript("Gestion.ProductoDetalle")]
    [BasedOnRow(typeof(Entities.ProductoDetalleRow), CheckNames = true)]
    public class ProductoDetalleForm
    {
        public Int32 IdProducto { get; set; }
        public Int32 IdAtributo { get; set; }
        public Int32 IdTipoAdicional { get; set; }
        public Double Valor { get; set; }
    }
}