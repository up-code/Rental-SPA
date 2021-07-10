namespace Rental_SPA.Sitio {
    export interface NosotrosForm {
        Titulo: Serenity.StringEditor;
        Body: Serenity.HtmlContentEditor;
        Comtario: Serenity.HtmlContentEditor;
        Icono: Serenity.StringEditor;
        Foto: Serenity.ImageUploadEditor;
    }

    export class NosotrosForm extends Serenity.PrefixedContext {
        static formKey = 'Sitio.Nosotros';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NosotrosForm.init)  {
                NosotrosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlContentEditor;
                var w2 = s.ImageUploadEditor;

                Q.initFormType(NosotrosForm, [
                    'Titulo', w0,
                    'Body', w1,
                    'Comtario', w1,
                    'Icono', w0,
                    'Foto', w2
                ]);
            }
        }
    }
}
