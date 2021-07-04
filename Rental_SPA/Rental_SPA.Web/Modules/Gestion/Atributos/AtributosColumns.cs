using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Columns
{
    [ColumnsScript("Gestion.Atributos")]
    [BasedOnRow(typeof(Entities.AtributosRow), CheckNames = true)]
    public class AtributosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Descripcion { get; set; }
        public String Codigo { get; set; }
        public Double Porciento { get; set; }
        public Double Importe { get; set; }
    }
}