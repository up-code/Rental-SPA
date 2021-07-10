using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Sitio.Forms
{
    [FormScript("Sitio.Slider")]
    [BasedOnRow(typeof(Entities.SliderRow), CheckNames = true)]
    public class SliderForm
    {
        [Category ("Slider Cabecera")]
        public String Titulo { get; set; }
        public String SubTitulo { get; set; }
        public String Foto { get; set; }
    }
}