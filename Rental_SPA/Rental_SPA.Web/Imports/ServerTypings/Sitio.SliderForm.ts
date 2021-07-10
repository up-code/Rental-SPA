namespace Rental_SPA.Sitio {
    export interface SliderForm {
        Titulo: Serenity.StringEditor;
        SubTitulo: Serenity.HtmlContentEditor;
        Foto: Serenity.ImageUploadEditor;
    }

    export class SliderForm extends Serenity.PrefixedContext {
        static formKey = 'Sitio.Slider';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SliderForm.init)  {
                SliderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlContentEditor;
                var w2 = s.ImageUploadEditor;

                Q.initFormType(SliderForm, [
                    'Titulo', w0,
                    'SubTitulo', w1,
                    'Foto', w2
                ]);
            }
        }
    }
}
