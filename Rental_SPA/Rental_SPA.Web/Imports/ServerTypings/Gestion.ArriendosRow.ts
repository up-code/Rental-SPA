namespace Rental_SPA.Gestion {
    export interface ArriendosRow {
        Id?: number;
        DireccionObra?: string;
        Region?: number;
        Ciudad?: string;
        IdCliente?: number;
        IdProducto?: number;
        Cantidad?: number;
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
        export const readPermission = '*';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            DireccionObra = "DireccionObra",
            Region = "Region",
            Ciudad = "Ciudad",
            IdCliente = "IdCliente",
            IdProducto = "IdProducto",
            Cantidad = "Cantidad",
            Garantia = "Garantia",
            ConGarantia = "ConGarantia",
            FechaInicio = "FechaInicio",
            FechaDevolucion = "FechaDevolucion",
            Neto = "Neto",
            Iva = "Iva",
            Total = "Total"
        }
    }
}
