using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Sitio.Forms
{
    [FormScript("Sitio.Nosotros")]
    [BasedOnRow(typeof(Entities.NosotrosRow), CheckNames = true)]
    public class NosotrosForm
    {
        [Category("Información de la Empresa")]
        public String Titulo { get; set; }
        [Category("Breve descripción de la empresa")]
        [HtmlContentEditor(Rows = 8)]
        public String Body { get; set; }
        [Category("Breve reseña")]
        [HtmlContentEditor(Rows = 8)]
        public String Comtario { get; set; }        
        public String Icono { get; set; }
        [Category("Foto destacada")]
        public String Foto { get; set; }
    }
}