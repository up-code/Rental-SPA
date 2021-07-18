namespace Rental_SPA.Sitio {
    export interface NuestrosClientesForm {
        Logo: Serenity.ImageUploadEditor;
        Nombre: Serenity.StringEditor;
        Url: Serenity.StringEditor;
    }

    export class NuestrosClientesForm extends Serenity.PrefixedContext {
        static formKey = 'Sitio.NuestrosClientes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NuestrosClientesForm.init)  {
                NuestrosClientesForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;
                var w1 = s.StringEditor;

                Q.initFormType(NuestrosClientesForm, [
                    'Logo', w0,
                    'Nombre', w1,
                    'Url', w1
                ]);
            }
        }
    }
}
