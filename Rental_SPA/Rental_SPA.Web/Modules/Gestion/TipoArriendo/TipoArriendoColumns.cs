using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Rental_SPA.Gestion.Columns
{
    [ColumnsScript("Gestion.TipoArriendo")]
    [BasedOnRow(typeof(Entities.TipoArriendoRow), CheckNames = true)]
    public class TipoArriendoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Tipo { get; set; }
        public String Codigo { get; set; }
    }
}