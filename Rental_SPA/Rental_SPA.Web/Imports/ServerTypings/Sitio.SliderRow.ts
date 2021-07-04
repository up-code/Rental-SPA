
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
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Titulo;
            export declare const SubTitulo;
            export declare const Foto;
        }

        [
            'Id',
            'Titulo',
            'SubTitulo',
            'Foto'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}