namespace Rental_SPA.Gestion {
    export interface AtributosForm {
        Descripcion: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Porciento: Serenity.DecimalEditor;
        Importe: Serenity.DecimalEditor;
    }

    export class AtributosForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Atributos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AtributosForm.init)  {
                AtributosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(AtributosForm, [
                    'Descripcion', w0,
                    'Codigo', w0,
                    'Porciento', w1,
                    'Importe', w1
                ]);
            }
        }
    }
}
