using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Sitio.Columns
{
    [ColumnsScript("Sitio.Slider")]
    [BasedOnRow(typeof(Entities.SliderRow), CheckNames = true)]
    public class SliderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Titulo { get; set; }
        public String SubTitulo { get; set; }
        public String Foto { get; set; }
    }
}