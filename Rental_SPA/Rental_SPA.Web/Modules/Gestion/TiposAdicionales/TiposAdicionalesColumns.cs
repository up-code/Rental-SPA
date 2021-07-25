using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Columns
{
    [ColumnsScript("Gestion.TiposAdicionales")]
    [BasedOnRow(typeof(Entities.TiposAdicionalesRow), CheckNames = true)]
    public class TiposAdicionalesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Descripcion { get; set; }
        public String Titulo { get; set; }
        public Int32 Orden { get; set; }
        //public Boolean MostrarPorcentaje { get; set; }
        //public Boolean MostrarImporte { get; set; }
    }
}