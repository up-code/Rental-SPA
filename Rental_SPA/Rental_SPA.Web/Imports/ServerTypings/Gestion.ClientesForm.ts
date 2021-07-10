namespace Rental_SPA.Gestion {
    export interface ClientesForm {
        Rut: Serenity.StringEditor;
        RazonSocial: Serenity.StringEditor;
        NombreFantasia: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Ciudad: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
    }

    export class ClientesForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Clientes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientesForm.init)  {
                ClientesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ClientesForm, [
                    'Rut', w0,
                    'RazonSocial', w0,
                    'NombreFantasia', w0,
                    'Direccion', w0,
                    'Ciudad', w0,
                    'Telefono', w0,
                    'EMail', w0
                ]);
            }
        }
    }
}
