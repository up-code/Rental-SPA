using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Rental_SPA.Gestion
{
    public partial class ProductosDetEditorCardAttribute : CustomEditorAttribute
    {
        public const string Key = "Rental_SPA.Gestion.ProductosDetEditorCard";

        public ProductosDetEditorCardAttribute()
            : base(Key)
        {
        }
    }
}
