using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Sitio.Columns
{
    [ColumnsScript("Sitio.NuestrosClientes")]
    [BasedOnRow(typeof(Entities.NuestrosClientesRow), CheckNames = true)]
    public class NuestrosClientesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Logo { get; set; }
        public String Nombre { get; set; }
        public String Url { get; set; }
    }
}