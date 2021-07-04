using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Forms
{
    [FormScript("Gestion.Atributos")]
    [BasedOnRow(typeof(Entities.AtributosRow), CheckNames = true)]
    public class AtributosForm
    {
        public String Descripcion { get; set; }
        public String Codigo { get; set; }
        public Double Porciento { get; set; }
        public Double Importe { get; set; }
    }
}