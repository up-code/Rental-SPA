using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Ronnie.Gestion
{
    public partial class CalendarEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Ronnie.Gestion.CalendarEditor";

        public CalendarEditorAttribute()
            : base(Key)
        {
        }
    }
}
