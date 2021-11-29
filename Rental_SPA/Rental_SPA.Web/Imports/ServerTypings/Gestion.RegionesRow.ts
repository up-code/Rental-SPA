namespace Rental_SPA.Gestion {
    export interface RegionesRow {
        Id?: number;
        Nombre?: string;
        Sigla?: string;
    }

    export namespace RegionesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Gestion.Regiones';
        export const lookupKey = 'Gestion.Regiones';

        export function getLookup(): Q.Lookup<RegionesRow> {
            return Q.getLookup<RegionesRow>('Gestion.Regiones');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Sigla = "Sigla"
        }
    }
}
