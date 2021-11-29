namespace Rental_SPA.Gestion {
    export interface ClientesForm {
        Rut: Serenity.MaskedEditor;
        RazonSocial: Serenity.StringEditor;
        NombreFantasia: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Ciudad: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        EMail: Serenity.EmailAddressEditor;
    }

    export class ClientesForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Clientes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientesForm.init)  {
                ClientesForm.init = true;

                var s = Serenity;
                var w0 = s.MaskedEditor;
                var w1 = s.StringEditor;
                var w2 = s.EmailAddressEditor;

                Q.initFormType(ClientesForm, [
                    'Rut', w0,
                    'RazonSocial', w1,
                    'NombreFantasia', w1,
                    'Direccion', w1,
                    'Ciudad', w1,
                    'Telefono', w1,
                    'EMail', w2
                ]);
            }
        }
    }
}
