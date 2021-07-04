
namespace Rental_SPA.Gestion {
    export class TiposAdicionalesForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.TiposAdicionales';
    }

    export interface TiposAdicionalesForm {
        Descripcion: Serenity.StringEditor;
        Titulo: Serenity.StringEditor;
        Orden: Serenity.IntegerEditor;
        MostrarPorcentaje: Serenity.BooleanEditor;
        MostrarImporte: Serenity.BooleanEditor;
    }

    [,
        ['Descripcion', () => Serenity.StringEditor],
        ['Titulo', () => Serenity.StringEditor],
        ['Orden', () => Serenity.IntegerEditor],
        ['MostrarPorcentaje', () => Serenity.BooleanEditor],
        ['MostrarImporte', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(TiposAdicionalesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}