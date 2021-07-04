
namespace Rental_SPA.Gestion {
    export interface ProductosRow {
        Id?: number;
        Nombre?: string;
        Foto?: string;
        Cantidad?: number;
        Precio?: number;
        Iva?: number;
        Activo?: boolean;
        Garantia?: number;
        IdTipoArriendo?: number;
    }

    export namespace ProductosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Gestion.Productos';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Nombre;
            export declare const Foto;
            export declare const Cantidad;
            export declare const Precio;
            export declare const Iva;
            export declare const Activo;
            export declare const Garantia;
            export declare const IdTipoArriendo;
        }

        [
            'Id',
            'Nombre',
            'Foto',
            'Cantidad',
            'Precio',
            'Iva',
            'Activo',
            'Garantia',
            'IdTipoArriendo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}