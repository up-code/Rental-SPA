namespace Rental_SPA.Gestion {
    export interface ClientesRow {
        Id?: number;
        Rut?: string;
        RazonSocial?: string;
        NombreFantasia?: string;
        Direccion?: string;
        Ciudad?: string;
        Telefono?: string;
        EMail?: string;
    }

    export namespace ClientesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'RazonSocial';
        export const localTextPrefix = 'Gestion.Clientes';
        export const lookupKey = 'Gestion.Clientes';

        export function getLookup(): Q.Lookup<ClientesRow> {
            return Q.getLookup<ClientesRow>('Gestion.Clientes');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Rut = "Rut",
            RazonSocial = "RazonSocial",
            NombreFantasia = "NombreFantasia",
            Direccion = "Direccion",
            Ciudad = "Ciudad",
            Telefono = "Telefono",
            EMail = "EMail"
        }
    }
}
