
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class ClientesGrid extends Serenity.EntityGrid<ClientesRow, any> {
        protected getColumnsKey() { return 'Gestion.Clientes'; }
        protected getDialogType() { return ClientesDialog; }
        protected getIdProperty() { return ClientesRow.idProperty; }
        protected getInsertPermission() { return ClientesRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientesRow.localTextPrefix; }
        protected getService() { return ClientesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}