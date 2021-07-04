
namespace Rental_SPA.Gestion {
    export class ArriendosForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Arriendos';
    }

    export interface ArriendosForm {
        DireccionObra: Serenity.StringEditor;
        Region: Serenity.IntegerEditor;
        Ciudad: Serenity.StringEditor;
        IdCliente: Serenity.IntegerEditor;
        IdProducto: Serenity.IntegerEditor;
        Garantia: Serenity.DecimalEditor;
        ConGarantia: Serenity.BooleanEditor;
        FechaInicio: Serenity.DateEditor;
        FechaDevolucion: Serenity.DateEditor;
        Neto: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
    }

    [,
        ['DireccionObra', () => Serenity.StringEditor],
        ['Region', () => Serenity.IntegerEditor],
        ['Ciudad', () => Serenity.StringEditor],
        ['IdCliente', () => Serenity.IntegerEditor],
        ['IdProducto', () => Serenity.IntegerEditor],
        ['Garantia', () => Serenity.DecimalEditor],
        ['ConGarantia', () => Serenity.BooleanEditor],
        ['FechaInicio', () => Serenity.DateEditor],
        ['FechaDevolucion', () => Serenity.DateEditor],
        ['Neto', () => Serenity.DecimalEditor],
        ['Iva', () => Serenity.DecimalEditor],
        ['Total', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ArriendosForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}