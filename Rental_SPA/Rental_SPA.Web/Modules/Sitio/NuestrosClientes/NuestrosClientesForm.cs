using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Sitio.Forms
{
    [FormScript("Sitio.NuestrosClientes")]
    [BasedOnRow(typeof(Entities.NuestrosClientesRow), CheckNames = true)]
    public class NuestrosClientesForm
    {
        [Category("Información de Nuestros Clientes")]
        public String Logo { get; set; }
        public String Nombre { get; set; }
        public String Url { get; set; }
    }
}