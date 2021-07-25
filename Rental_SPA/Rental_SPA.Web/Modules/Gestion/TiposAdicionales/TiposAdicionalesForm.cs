using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Forms
{
    [FormScript("Gestion.TiposAdicionales")]
    [BasedOnRow(typeof(Entities.TiposAdicionalesRow), CheckNames = true)]
    public class TiposAdicionalesForm
    {
        public String Descripcion { get; set; }
        public String Titulo { get; set; }
        public Int32 Orden { get; set; }
        //public Boolean MostrarPorcentaje { get; set; }
        //public Boolean MostrarImporte { get; set; }
    }
}