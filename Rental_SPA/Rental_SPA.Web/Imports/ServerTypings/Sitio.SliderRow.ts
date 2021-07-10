namespace Rental_SPA.Sitio {
    export interface SliderRow {
        Id?: number;
        Titulo?: string;
        SubTitulo?: string;
        Foto?: string;
    }

    export namespace SliderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Sitio.Slider';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = '*';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Titulo = "Titulo",
            SubTitulo = "SubTitulo",
            Foto = "Foto"
        }
    }
}
