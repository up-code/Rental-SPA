
namespace Rental_SPA.Gestion {
    export class TipoArriendoForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.TipoArriendo';
    }

    export interface TipoArriendoForm {
        Tipo: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
    }

    [,
        ['Tipo', () => Serenity.StringEditor],
        ['Codigo', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TipoArriendoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}