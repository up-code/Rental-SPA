namespace Rental_SPA.Gestion {
    export interface ArriendosForm {
        Id: Serenity.StringEditor;
        DireccionObra: Serenity.StringEditor;
        Region: Serenity.IntegerEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(ArriendosForm, [
                    'Id', w0,
                    'DireccionObra', w0,
                    'Region', w1,
                    'Ciudad', w0,
                    'IdCliente', w2,
                    'IdProducto', w2,
                    'FechaInicio', w3,
                    'FechaDevolucion', w3,
                    'Cantidad', w1,
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
