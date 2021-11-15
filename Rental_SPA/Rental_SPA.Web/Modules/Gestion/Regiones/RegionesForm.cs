using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Forms
{
    [FormScript("Gestion.Regiones")]
    [BasedOnRow(typeof(Entities.RegionesRow), CheckNames = true)]
    public class RegionesForm
    {
        public String Nombre { get; set; }
        public String Sigla { get; set; }
    }
}