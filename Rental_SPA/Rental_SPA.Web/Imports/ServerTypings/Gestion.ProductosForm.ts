namespace Rental_SPA.Gestion {
    export interface ProductosForm {
        Nombre: Serenity.StringEditor;
        Activo: Serenity.BooleanEditor;
        IdTipoArriendo: Serenity.LookupEditor;
        Descripcion: Serenity.HtmlContentEditor;
        ProductosDet: ProductosDetEditorCard;
        Cantidad: Serenity.IntegerEditor;
        Precio: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Garantia: Serenity.DecimalEditor;
        Foto: Serenity.ImageUploadEditor;
    }

    export class ProductosForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Productos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductosForm.init)  {
                ProductosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.LookupEditor;
                var w3 = s.HtmlContentEditor;
                var w4 = ProductosDetEditorCard;
                var w5 = s.IntegerEditor;
                var w6 = s.DecimalEditor;
                var w7 = s.ImageUploadEditor;

                Q.initFormType(ProductosForm, [
                    'Nombre', w0,
                    'Activo', w1,
                    'IdTipoArriendo', w2,
                    'Descripcion', w3,
                    'ProductosDet', w4,
                    'Cantidad', w5,
                    'Precio', w6,
                    'Iva', w6,
                    'Garantia', w6,
                    'Foto', w7
                ]);
            }
        }
    }
}
