using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Forms
{
    [FormScript("Gestion.Clientes")]
    [BasedOnRow(typeof(Entities.ClientesRow), CheckNames = true)]
    public class ClientesForm
    {
        [MaskedEditor(Mask = "99.999.999-9")]
        public String Rut { get; set; }
        public String RazonSocial { get; set; }
        public String NombreFantasia { get; set; }
        public String Direccion { get; set; }
        public String Ciudad { get; set; }
        public String Telefono { get; set; }
        [EmailAddressEditor]
        public String EMail { get; set; }
    }
}