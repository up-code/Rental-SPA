namespace Rental_SPA.Gestion {
    export interface TipoArriendoRow {
        Id?: number;
        Tipo?: string;
        Codigo?: string;
        Detalles?: string;
    }

    export namespace TipoArriendoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Tipo';
        export const localTextPrefix = 'Gestion.TipoArriendo';
        export const lookupKey = 'Gestion.TipoArriendo';

        export function getLookup(): Q.Lookup<TipoArriendoRow> {
            return Q.getLookup<TipoArriendoRow>('Gestion.TipoArriendo');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Tipo = "Tipo",
            Codigo = "Codigo",
            Detalles = "Detalles"
        }
    }
}
