using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Sitio.Columns
{
    [ColumnsScript("Sitio.Nosotros")]
    [BasedOnRow(typeof(Entities.NosotrosRow), CheckNames = true)]
    public class NosotrosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Titulo { get; set; }
        public String Body { get; set; }
        public String Comtario { get; set; }
        public String Icono { get; set; }
        public String Foto { get; set; }
    }
}