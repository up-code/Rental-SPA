namespace Rental_SPA.Gestion {
    export interface ProductoDetalleRow {
        Id?: number;
        IdProducto?: number;
        IdAtributo?: number;
        IdTipoAdicional?: number;
        Valor?: string;
        IdTipoAdicionalTitulo?: string;
    }

    export namespace ProductoDetalleRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Gestion.ProductoDetalle';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = '*';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdProducto = "IdProducto",
            IdAtributo = "IdAtributo",
            IdTipoAdicional = "IdTipoAdicional",
            Valor = "Valor",
            IdTipoAdicionalTitulo = "IdTipoAdicionalTitulo"
        }
    }
}
