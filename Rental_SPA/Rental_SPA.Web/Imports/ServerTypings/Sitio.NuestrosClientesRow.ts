namespace Rental_SPA.Sitio {
    export interface NuestrosClientesRow {
        Id?: number;
        Logo?: string;
        Nombre?: string;
        Url?: string;
    }

    export namespace NuestrosClientesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Sitio.NuestrosClientes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = '*';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Logo = "Logo",
            Nombre = "Nombre",
            Url = "Url"
        }
    }
}
