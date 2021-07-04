using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

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
        public String Foto { get; set; }
        public Int32 Cantidad { get; set; }
        public Double Precio { get; set; }
        public Double Iva { get; set; }
        public Boolean Activo { get; set; }
        public Double Garantia { get; set; }
        public Int32 IdTipoArriendo { get; set; }
    }
}