
namespace Rental_SPA.Sitio {
    export class NosotrosForm extends Serenity.PrefixedContext {
        static formKey = 'Sitio.Nosotros';
    }

    export interface NosotrosForm {
        Titulo: Serenity.StringEditor;
        Body: Serenity.StringEditor;
        Comtario: Serenity.StringEditor;
        Icono: Serenity.StringEditor;
    }

    [,
        ['Titulo', () => Serenity.StringEditor],
        ['Body', () => Serenity.StringEditor],
        ['Comtario', () => Serenity.StringEditor],
        ['Icono', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(NosotrosForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}