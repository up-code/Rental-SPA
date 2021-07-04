using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Columns
{
    [ColumnsScript("Gestion.Arriendos")]
    [BasedOnRow(typeof(Entities.ArriendosRow), CheckNames = true)]
    public class ArriendosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String DireccionObra { get; set; }
        public Int32 Region { get; set; }
        public String Ciudad { get; set; }
        public Int32 IdCliente { get; set; }
        public Int32 IdProducto { get; set; }
        public Double Garantia { get; set; }
        public Boolean ConGarantia { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaDevolucion { get; set; }
        public Double Neto { get; set; }
        public Double Iva { get; set; }
        public Double Total { get; set; }
    }
}