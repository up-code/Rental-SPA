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
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Gestion.TiposAdicionales';
        export const lookupKey = 'Gestion.TiposAdicionales';

        export function getLookup(): Q.Lookup<TiposAdicionalesRow> {
            return Q.getLookup<TiposAdicionalesRow>('Gestion.TiposAdicionales');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Descripcion = "Descripcion",
            Titulo = "Titulo",
            Orden = "Orden",
            MostrarPorcentaje = "MostrarPorcentaje",
            MostrarImporte = "MostrarImporte"
        }
    }
}
