using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion
{
    [EnumKey("Gestion.TipoArriendoCotizacion")]
    public enum TipoArriendoCotizacion
    {
        [Description("Unidad")]
        Unidad = 1,
        [Description("Dia")]
        Dia = 2
    }
}