
namespace Rental_SPA.Sitio {

    @Serenity.Decorators.registerClass()
    export class NuestrosClientesGrid extends Serenity.EntityGrid<NuestrosClientesRow, any> {
        protected getColumnsKey() { return 'Sitio.NuestrosClientes'; }
        protected getDialogType() { return NuestrosClientesDialog; }
        protected getIdProperty() { return NuestrosClientesRow.idProperty; }
        protected getInsertPermission() { return NuestrosClientesRow.insertPermission; }
        protected getLocalTextPrefix() { return NuestrosClientesRow.localTextPrefix; }
        protected getService() { return NuestrosClientesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}