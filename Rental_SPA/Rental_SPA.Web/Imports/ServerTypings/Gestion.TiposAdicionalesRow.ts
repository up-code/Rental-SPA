
namespace Rental_SPA.Gestion {
    export interface TiposAdicionalesRow {
        Id?: number;
        Descripcion?: string;
        Titulo?: string;
        Orden?: number;
        MostrarPorcentaje?: boolean;
        MostrarImporte?: boolean;
    }

    export namespace TiposAdicionalesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'Gestion.TiposAdicionales';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Descripcion;
            export declare const Titulo;
            export declare const Orden;
            export declare const MostrarPorcentaje;
            export declare const MostrarImporte;
        }

        [
            'Id',
            'Descripcion',
            'Titulo',
            'Orden',
            'MostrarPorcentaje',
            'MostrarImporte'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}