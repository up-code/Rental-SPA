namespace Rental_SPA.Gestion {
    export interface ProductosForm {
        Nombre: Serenity.StringEditor;
        Activo: Serenity.BooleanEditor;
        IdTipoArriendo: Serenity.LookupEditor;
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
                var w3 = ProductosDetEditorCard;
                var w4 = s.IntegerEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.ImageUploadEditor;

                Q.initFormType(ProductosForm, [
                    'Nombre', w0,
                    'Activo', w1,
                    'IdTipoArriendo', w2,
                    'ProductosDet', w3,
                    'Cantidad', w4,
                    'Precio', w5,
                    'Iva', w5,
                    'Garantia', w5,
                    'Foto', w6
                ]);
            }
        }
    }
}
