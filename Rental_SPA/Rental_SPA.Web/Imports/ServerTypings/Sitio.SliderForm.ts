
namespace Rental_SPA.Sitio {
    export class SliderForm extends Serenity.PrefixedContext {
        static formKey = 'Sitio.Slider';
    }

    export interface SliderForm {
        Titulo: Serenity.StringEditor;
        SubTitulo: Serenity.StringEditor;
        Foto: Serenity.StringEditor;
    }

    [,
        ['Titulo', () => Serenity.StringEditor],
        ['SubTitulo', () => Serenity.StringEditor],
        ['Foto', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SliderForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}