
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class TipoArriendoGrid extends Serenity.EntityGrid<TipoArriendoRow, any> {
        protected getColumnsKey() { return 'Gestion.TipoArriendo'; }
        protected getDialogType() { return TipoArriendoDialog; }
        protected getIdProperty() { return TipoArriendoRow.idProperty; }
        protected getInsertPermission() { return TipoArriendoRow.insertPermission; }
        protected getLocalTextPrefix() { return TipoArriendoRow.localTextPrefix; }
        protected getService() { return TipoArriendoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}