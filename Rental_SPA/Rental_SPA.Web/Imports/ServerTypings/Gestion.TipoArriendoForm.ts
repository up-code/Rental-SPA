namespace Rental_SPA.Gestion {
    export interface TipoArriendoForm {
        Tipo: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Cotizacion: Serenity.EnumEditor;
        Detalles: Serenity.CheckLookupEditor;
        Foto: Serenity.ImageUploadEditor;
    }

    export class TipoArriendoForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.TipoArriendo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TipoArriendoForm.init)  {
                TipoArriendoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.CheckLookupEditor;
                var w3 = s.ImageUploadEditor;

                Q.initFormType(TipoArriendoForm, [
                    'Tipo', w0,
                    'Codigo', w0,
                    'Cotizacion', w1,
                    'Detalles', w2,
                    'Foto', w3
                ]);
            }
        }
    }
}
