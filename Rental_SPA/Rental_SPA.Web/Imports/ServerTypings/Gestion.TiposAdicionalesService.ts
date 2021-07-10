namespace Rental_SPA.Gestion {
    export namespace TiposAdicionalesService {
        export const baseUrl = 'Gestion/TiposAdicionales';

        export declare function Create(request: Serenity.SaveRequest<TiposAdicionalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TiposAdicionalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposAdicionalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposAdicionalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Gestion/TiposAdicionales/Create",
            Update = "Gestion/TiposAdicionales/Update",
            Delete = "Gestion/TiposAdicionales/Delete",
            Retrieve = "Gestion/TiposAdicionales/Retrieve",
            List = "Gestion/TiposAdicionales/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TiposAdicionalesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
