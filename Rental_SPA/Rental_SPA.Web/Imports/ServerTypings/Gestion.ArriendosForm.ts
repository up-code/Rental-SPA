namespace Rental_SPA.Gestion {
    export interface ArriendosForm {
        Id: Serenity.StringEditor;
        DireccionObra: Serenity.StringEditor;
        Region: Serenity.LookupEditor;
        Ciudad: Serenity.StringEditor;
        IdCliente: Serenity.LookupEditor;
        IdProducto: Serenity.LookupEditor;
        FechaInicio: Serenity.DateEditor;
        FechaDevolucion: Serenity.DateEditor;
        Cantidad: Serenity.IntegerEditor;
        ConGarantia: Serenity.BooleanEditor;
        Garantia: Serenity.DecimalEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(ArriendosForm, [
                    'Id', w0,
                    'DireccionObra', w0,
                    'Region', w1,
                    'Ciudad', w0,
                    'IdCliente', w1,
                    'IdProducto', w1,
                    'FechaInicio', w2,
                    'FechaDevolucion', w2,
                    'Cantidad', w3,
                    'ConGarantia', w4,
                    'Garantia', w5,
                    'Neto', w5,
                    'Iva', w5,
                    'Total', w5
                ]);
            }
        }
    }
}
