using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Forms
{
    [FormScript("Gestion.TipoArriendo")]
    [BasedOnRow(typeof(Entities.TipoArriendoRow), CheckNames = true)]
    public class TipoArriendoForm
    {
        public String Tipo { get; set; }
        public String Codigo { get; set; }
        [CheckLookupEditor(typeof(Entities.TiposAdicionalesRow), ShowSelectAll = true, Delimited = true)]
        public String Detalles { get; set; }
    }
}