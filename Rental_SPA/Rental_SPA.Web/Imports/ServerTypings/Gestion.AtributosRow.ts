namespace Rental_SPA.Gestion {
    export interface AtributosRow {
        Id?: number;
        Descripcion?: string;
        Codigo?: string;
        Porciento?: number;
        Importe?: number;
    }

    export namespace AtributosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'Gestion.Atributos';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Descripcion = "Descripcion",
            Codigo = "Codigo",
            Porciento = "Porciento",
            Importe = "Importe"
        }
    }
}
