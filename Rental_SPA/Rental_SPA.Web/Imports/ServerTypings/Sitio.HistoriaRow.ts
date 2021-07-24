namespace Rental_SPA.Sitio {
    export interface HistoriaRow {
        Id?: number;
        Titulo?: string;
        Body?: string;
        Orden?: number;
    }

    export namespace HistoriaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Sitio.Historia';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = '*';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Titulo = "Titulo",
            Body = "Body",
            Orden = "Orden"
        }
    }
}
