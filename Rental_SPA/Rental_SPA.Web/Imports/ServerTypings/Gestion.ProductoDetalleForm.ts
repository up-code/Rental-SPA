namespace Rental_SPA.Gestion {
    export interface ProductoDetalleForm {
        IdProducto: Serenity.IntegerEditor;
        IdAtributo: Serenity.IntegerEditor;
        IdTipoAdicional: Serenity.IntegerEditor;
        Valor: Serenity.DecimalEditor;
    }

    export class ProductoDetalleForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.ProductoDetalle';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductoDetalleForm.init)  {
                ProductoDetalleForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ProductoDetalleForm, [
                    'IdProducto', w0,
                    'IdAtributo', w0,
                    'IdTipoAdicional', w0,
                    'Valor', w1
                ]);
            }
        }
    }
}
