using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Sitio.Forms
{
    [FormScript("Sitio.Historia")]
    [BasedOnRow(typeof(Entities.HistoriaRow), CheckNames = true)]
    public class HistoriaForm
    {
        [Description("Agregue contenido a Tabs de Rental SPA")]
        public String Titulo { get; set; }
        [HtmlContentEditor(Rows = 20)]
        public String Body { get; set; }
        [Hidden]
        public Int32 Orden { get; set; }
    }
}