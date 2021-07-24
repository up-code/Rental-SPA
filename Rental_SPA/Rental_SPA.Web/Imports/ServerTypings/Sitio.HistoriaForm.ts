namespace Rental_SPA.Sitio {
    export interface HistoriaForm {
        Titulo: Serenity.StringEditor;
        Body: Serenity.HtmlContentEditor;
        Orden: Serenity.IntegerEditor;
    }

    export class HistoriaForm extends Serenity.PrefixedContext {
        static formKey = 'Sitio.Historia';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HistoriaForm.init)  {
                HistoriaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlContentEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(HistoriaForm, [
                    'Titulo', w0,
                    'Body', w1,
                    'Orden', w2
                ]);
            }
        }
    }
}
