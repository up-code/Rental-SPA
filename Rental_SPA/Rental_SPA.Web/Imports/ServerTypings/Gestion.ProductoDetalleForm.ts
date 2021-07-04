
namespace Rental_SPA.Gestion {
    export class ProductoDetalleForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.ProductoDetalle';
    }

    export interface ProductoDetalleForm {
        IdProducto: Serenity.IntegerEditor;
        IdAtributo: Serenity.IntegerEditor;
        IdTipoAdicional: Serenity.IntegerEditor;
        Valor: Serenity.DecimalEditor;
    }

    [,
        ['IdProducto', () => Serenity.IntegerEditor],
        ['IdAtributo', () => Serenity.IntegerEditor],
        ['IdTipoAdicional', () => Serenity.IntegerEditor],
        ['Valor', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ProductoDetalleForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}