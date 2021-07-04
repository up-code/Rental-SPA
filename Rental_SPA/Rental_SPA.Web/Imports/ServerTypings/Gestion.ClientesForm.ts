
namespace Rental_SPA.Gestion {
    export class ClientesForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.Clientes';
    }

    export interface ClientesForm {
        Rut: Serenity.StringEditor;
        RazonSocial: Serenity.StringEditor;
        NombreFantasia: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Ciudad: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
    }

    [,
        ['Rut', () => Serenity.StringEditor],
        ['RazonSocial', () => Serenity.StringEditor],
        ['NombreFantasia', () => Serenity.StringEditor],
        ['Direccion', () => Serenity.StringEditor],
        ['Ciudad', () => Serenity.StringEditor],
        ['Telefono', () => Serenity.StringEditor],
        ['EMail', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ClientesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}