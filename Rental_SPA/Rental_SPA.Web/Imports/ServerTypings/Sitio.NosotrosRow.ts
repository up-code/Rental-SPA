namespace Rental_SPA.Sitio {
    export interface NosotrosRow {
        Id?: number;
        Titulo?: string;
        Body?: string;
        Comtario?: string;
        Icono?: string;
        Foto?: string;
    }

    export namespace NosotrosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Sitio.Nosotros';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = '*';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Titulo = "Titulo",
            Body = "Body",
            Comtario = "Comtario",
            Icono = "Icono",
            Foto = "Foto"
        }
    }
}
