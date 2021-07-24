using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Sitio.Columns
{
    [ColumnsScript("Sitio.Historia")]
    [BasedOnRow(typeof(Entities.HistoriaRow), CheckNames = true)]
    public class HistoriaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Titulo { get; set; }
        public String Body { get; set; }
        [Hidden]
        public Int32 Orden { get; set; }
    }
}