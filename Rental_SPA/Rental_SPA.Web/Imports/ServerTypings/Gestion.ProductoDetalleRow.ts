
namespace Rental_SPA.Gestion {
    export interface ProductoDetalleRow {
        Id?: number;
        IdProducto?: number;
        IdAtributo?: number;
        IdTipoAdicional?: number;
        Valor?: number;
    }

    export namespace ProductoDetalleRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Gestion.ProductoDetalle';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const IdProducto;
            export declare const IdAtributo;
            export declare const IdTipoAdicional;
            export declare const Valor;
        }

        [
            'Id',
            'IdProducto',
            'IdAtributo',
            'IdTipoAdicional',
            'Valor'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}