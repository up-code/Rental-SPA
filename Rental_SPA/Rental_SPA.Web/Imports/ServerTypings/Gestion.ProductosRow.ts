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

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Foto = "Foto",
            Cantidad = "Cantidad",
            Precio = "Precio",
            Iva = "Iva",
            Activo = "Activo",
            Garantia = "Garantia",
            IdTipoArriendo = "IdTipoArriendo"
        }
    }
}
