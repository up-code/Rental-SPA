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
        [Category("Detalles")]
        public String Tipo { get; set; }
        public String Codigo { get; set; }

        [EnumEditor]
        public TipoArriendoCotizacion Cotizacion { get; set; }

        [CheckLookupEditor(typeof(Entities.TiposAdicionalesRow), ShowSelectAll = true, Delimited = true)]
        public String Detalles { get; set; }

        [Category("Foto")]

        [LabelWidth(0), DisplayName("")]
        public String Foto { get; set; }
    }
}