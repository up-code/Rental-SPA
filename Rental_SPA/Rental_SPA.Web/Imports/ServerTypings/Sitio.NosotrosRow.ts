
namespace Rental_SPA.Sitio {
    export interface NosotrosRow {
        Id?: number;
        Titulo?: string;
        Body?: string;
        Comtario?: string;
        Icono?: string;
    }

    export namespace NosotrosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Sitio.Nosotros';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Titulo;
            export declare const Body;
            export declare const Comtario;
            export declare const Icono;
        }

        [
            'Id',
            'Titulo',
            'Body',
            'Comtario',
            'Icono'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}