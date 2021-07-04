
namespace Rental_SPA.Gestion {
    export class ProductosForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Productos';
    }

    export interface ProductosForm {
        Nombre: Serenity.StringEditor;
        Foto: Serenity.StringEditor;
        Cantidad: Serenity.IntegerEditor;
        Precio: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Activo: Serenity.BooleanEditor;
        Garantia: Serenity.DecimalEditor;
        IdTipoArriendo: Serenity.IntegerEditor;
    }

    [,
        ['Nombre', () => Serenity.StringEditor],
        ['Foto', () => Serenity.StringEditor],
        ['Cantidad', () => Serenity.IntegerEditor],
        ['Precio', () => Serenity.DecimalEditor],
        ['Iva', () => Serenity.DecimalEditor],
        ['Activo', () => Serenity.BooleanEditor],
        ['Garantia', () => Serenity.DecimalEditor],
        ['IdTipoArriendo', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ProductosForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}