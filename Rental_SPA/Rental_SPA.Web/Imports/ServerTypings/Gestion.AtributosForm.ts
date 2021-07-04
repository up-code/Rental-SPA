
namespace Rental_SPA.Gestion {
    export class AtributosForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Atributos';
    }

    export interface AtributosForm {
        Descripcion: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Porciento: Serenity.DecimalEditor;
        Importe: Serenity.DecimalEditor;
    }

    [,
        ['Descripcion', () => Serenity.StringEditor],
        ['Codigo', () => Serenity.StringEditor],
        ['Porciento', () => Serenity.DecimalEditor],
        ['Importe', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(AtributosForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}