namespace Rental_SPA.Gestion {
    export interface ArriendoWizardForm {
        WelcomeMessage: StaticTextBlock;
        DireccionObra: Serenity.StringEditor;
        Region: Serenity.IntegerEditor;
        Ciudad: Serenity.StringEditor;
        ProductoMessage: StaticTextBlock;
        IdProducto: Serenity.LookupEditor;
        FechaInicio: Serenity.DateEditor;
        FechaDevolucion: Serenity.DateEditor;
        Cantidad: Serenity.IntegerEditor;
        ConGarantia: Serenity.BooleanEditor;
        Garantia: Serenity.DecimalEditor;
        Neto: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DetallesMessage: StaticTextBlock;
        Rut: Serenity.MaskedEditor;
        RazonSocial: Serenity.StringEditor;
        NombreFantasia: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        ClienteCiudad: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        EMail: Serenity.EmailAddressEditor;
        ConfirmacionMessage: StaticTextBlock;
        ConfirmacionContext: StaticTextBlock;
    }

    export class ArriendoWizardForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.ArriendoWizard';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ArriendoWizardForm.init)  {
                ArriendoWizardForm.init = true;

                var s = Serenity;
                var w0 = StaticTextBlock;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DateEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.DecimalEditor;
                var w7 = s.MaskedEditor;
                var w8 = s.EmailAddressEditor;

                Q.initFormType(ArriendoWizardForm, [
                    'WelcomeMessage', w0,
                    'DireccionObra', w1,
                    'Region', w2,
                    'Ciudad', w1,
                    'ProductoMessage', w0,
                    'IdProducto', w3,
                    'FechaInicio', w4,
                    'FechaDevolucion', w4,
                    'Cantidad', w2,
                    'ConGarantia', w5,
                    'Garantia', w6,
                    'Neto', w6,
                    'Iva', w6,
                    'Total', w6,
                    'DetallesMessage', w0,
                    'Rut', w7,
                    'RazonSocial', w1,
                    'NombreFantasia', w1,
                    'Direccion', w1,
                    'ClienteCiudad', w1,
                    'Telefono', w1,
                    'EMail', w8,
                    'ConfirmacionMessage', w0,
                    'ConfirmacionContext', w0
                ]);
            }
        }
    }
}
