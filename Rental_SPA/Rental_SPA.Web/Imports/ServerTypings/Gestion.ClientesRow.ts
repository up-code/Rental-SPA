
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
        export const nameProperty = 'Rut';
        export const localTextPrefix = 'Gestion.Clientes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Rut;
            export declare const RazonSocial;
            export declare const NombreFantasia;
            export declare const Direccion;
            export declare const Ciudad;
            export declare const Telefono;
            export declare const EMail;
        }

        [
            'Id',
            'Rut',
            'RazonSocial',
            'NombreFantasia',
            'Direccion',
            'Ciudad',
            'Telefono',
            'EMail'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}