namespace Rental_SPA.Gestion {
    export interface ArriendosForm {
        DireccionObra: Serenity.StringEditor;
        Region: Serenity.IntegerEditor;
        Ciudad: Serenity.StringEditor;
        IdCliente: Serenity.IntegerEditor;
        IdProducto: Serenity.IntegerEditor;
        Garantia: Serenity.DecimalEditor;
        ConGarantia: Serenity.BooleanEditor;
        FechaInicio: Serenity.DateEditor;
        FechaDevolucion: Serenity.DateEditor;
        Neto: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
    }

    export class ArriendosForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Arriendos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ArriendosForm.init)  {
                ArriendosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ArriendosForm, [
                    'DireccionObra', w0,
                    'Region', w1,
                    'Ciudad', w0,
                    'IdCliente', w1,
                    'IdProducto', w1,
                    'Garantia', w2,
                    'ConGarantia', w3,
                    'FechaInicio', w4,
                    'FechaDevolucion', w4,
                    'Neto', w2,
                    'Iva', w2,
                    'Total', w2
                ]);
            }
        }
    }
}
