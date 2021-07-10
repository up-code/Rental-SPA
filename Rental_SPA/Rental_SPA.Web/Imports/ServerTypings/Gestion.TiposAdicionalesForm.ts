namespace Rental_SPA.Gestion {
    export interface TiposAdicionalesForm {
        Descripcion: Serenity.StringEditor;
        Titulo: Serenity.StringEditor;
        Orden: Serenity.IntegerEditor;
        MostrarPorcentaje: Serenity.BooleanEditor;
        MostrarImporte: Serenity.BooleanEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(TiposAdicionalesForm, [
                    'Descripcion', w0,
                    'Titulo', w0,
                    'Orden', w1,
                    'MostrarPorcentaje', w2,
                    'MostrarImporte', w2
                ]);
            }
        }
    }
}
