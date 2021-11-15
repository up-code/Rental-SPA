namespace Rental_SPA.Gestion {
    export interface RegionesForm {
        Nombre: Serenity.StringEditor;
        Sigla: Serenity.StringEditor;
    }

    export class RegionesForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Regiones';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegionesForm.init)  {
                RegionesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RegionesForm, [
                    'Nombre', w0,
                    'Sigla', w0
                ]);
            }
        }
    }
}
