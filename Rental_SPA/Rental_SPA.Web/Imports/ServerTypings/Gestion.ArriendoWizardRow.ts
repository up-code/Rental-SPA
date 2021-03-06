namespace Rental_SPA.Gestion {
    export interface ArriendoWizardRow {
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
        Cantidad?: number;
        Rut?: string;
        RazonSocial?: string;
        NombreFantasia?: string;
        Direccion?: string;
        ClienteCiudad?: string;
        Telefono?: string;
        EMail?: string;
    }

    export namespace ArriendoWizardRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DireccionObra';
        export const localTextPrefix = 'Gestion.ArriendoWizard';
        export const deletePermission = 'Administration:General';
        export const insertPermission = '*';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            DireccionObra = "DireccionObra",
            Region = "Region",
            Ciudad = "Ciudad",
            IdCliente = "IdCliente",
            IdProducto = "IdProducto",
            Garantia = "Garantia",
            ConGarantia = "ConGarantia",
            FechaInicio = "FechaInicio",
            FechaDevolucion = "FechaDevolucion",
            Neto = "Neto",
            Iva = "Iva",
            Total = "Total",
            Cantidad = "Cantidad",
            Rut = "Rut",
            RazonSocial = "RazonSocial",
            NombreFantasia = "NombreFantasia",
            Direccion = "Direccion",
            ClienteCiudad = "ClienteCiudad",
            Telefono = "Telefono",
            EMail = "EMail"
        }
    }
}
