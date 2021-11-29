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
    [FormScript("Gestion.Arriendos")]
    [BasedOnRow(typeof(Entities.ArriendosRow), CheckNames = true)]
    public class ArriendosForm
    {
      [Category("Obra")]

        [CssClass("col-md-6 col-md-offset-6")]
        public string Id { get; set; }
        public String DireccionObra { get; set; }

        [HalfWidth]
        public Int32 Region { get; set; }
        [HalfWidth]
        public String Ciudad { get; set; }

        [LookupEditor(typeof(ClientesRow))]
        public Int32 IdCliente { get; set; }
        [LookupEditor(typeof(ProductosRow))]
        public Int32 IdProducto { get; set; }

        [Category("Detalle")]

        [HalfWidth]
        public DateTime FechaInicio { get; set; }
        [HalfWidth]
        public DateTime FechaDevolucion { get; set; }

        [CssClass("col-md-6 col-md-offset-6")]
        public Int32 Cantidad { get; set; }

        [CssClass("col-md-2 col-md-offset-6")]
        public Boolean ConGarantia { get; set; }

        [LabelWidth(100)]
        [CssClass("col-md-4")]
        [DecimalEditor(Decimals = 0)]
        [ReadOnly(true)]
        public Decimal Garantia { get; set; }

        [ReadOnly(true)]
        [CssClass("col-md-6 col-md-offset-6")]
        [DecimalEditor(Decimals = 0)]
        public Decimal Neto { get; set; }

        [ReadOnly(true)]
        [CssClass("col-md-6 col-md-offset-6")]
        [DecimalEditor(Decimals = 0)]
        public Decimal Iva { get; set; }

        [ReadOnly(true)]
        [CssClass("col-md-6 col-md-offset-6")]
        [DecimalEditor(Decimals = 0)]
        public Decimal Total { get; set; }
    }
}