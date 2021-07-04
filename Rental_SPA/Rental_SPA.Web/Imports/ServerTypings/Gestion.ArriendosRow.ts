
namespace Rental_SPA.Gestion {
    export interface ArriendosRow {
        Id?: number;
        DireccionObra?: string;
        Region?: number;
        Ciudad?: string;
        IdCliente?: number;
        IdProducto?: number;
        Garantia?: number;
        ConGarantia?: boolean;
        FechaInicio?: string;
        FechaDevolucion?: string;
        Neto?: number;
        Iva?: number;
        Total?: number;
    }

    export namespace ArriendosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DireccionObra';
        export const localTextPrefix = 'Gestion.Arriendos';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const DireccionObra;
            export declare const Region;
            export declare const Ciudad;
            export declare const IdCliente;
            export declare const IdProducto;
            export declare const Garantia;
            export declare const ConGarantia;
            export declare const FechaInicio;
            export declare const FechaDevolucion;
            export declare const Neto;
            export declare const Iva;
            export declare const Total;
        }

        [
            'Id',
            'DireccionObra',
            'Region',
            'Ciudad',
            'IdCliente',
            'IdProducto',
            'Garantia',
            'ConGarantia',
            'FechaInicio',
            'FechaDevolucion',
            'Neto',
            'Iva',
            'Total'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}