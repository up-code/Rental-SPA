namespace Rental_SPA.Gestion {
    export interface ProductosForm {
        Nombre: Serenity.StringEditor;
        Foto: Serenity.StringEditor;
        Cantidad: Serenity.IntegerEditor;
        Precio: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Activo: Serenity.BooleanEditor;
        Garantia: Serenity.DecimalEditor;
        IdTipoArriendo: Serenity.IntegerEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ProductosForm, [
                    'Nombre', w0,
                    'Foto', w0,
                    'Cantidad', w1,
                    'Precio', w2,
                    'Iva', w2,
                    'Activo', w3,
                    'Garantia', w2,
                    'IdTipoArriendo', w1
                ]);
            }
        }
    }
}
