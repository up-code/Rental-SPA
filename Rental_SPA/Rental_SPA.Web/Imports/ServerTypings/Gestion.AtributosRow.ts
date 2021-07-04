
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

        export namespace Fields {
            export declare const Id;
            export declare const Descripcion;
            export declare const Codigo;
            export declare const Porciento;
            export declare const Importe;
        }

        [
            'Id',
            'Descripcion',
            'Codigo',
            'Porciento',
            'Importe'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}