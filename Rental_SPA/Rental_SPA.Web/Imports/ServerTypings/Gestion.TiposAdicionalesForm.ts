namespace Rental_SPA.Gestion {
    export interface TiposAdicionalesForm {
        Titulo: Serenity.StringEditor;
        Descripcion: Serenity.TextAreaEditor;
        Orden: Serenity.IntegerEditor;
    }

    export class TiposAdicionalesForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.TiposAdicionales';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TiposAdicionalesForm.init)  {
                TiposAdicionalesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(TiposAdicionalesForm, [
                    'Titulo', w0,
                    'Descripcion', w1,
                    'Orden', w2
                ]);
            }
        }
    }
}
