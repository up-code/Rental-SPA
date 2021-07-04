
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class ArriendosGrid extends Serenity.EntityGrid<ArriendosRow, any> {
        protected getColumnsKey() { return 'Gestion.Arriendos'; }
        protected getDialogType() { return ArriendosDialog; }
        protected getIdProperty() { return ArriendosRow.idProperty; }
        protected getInsertPermission() { return ArriendosRow.insertPermission; }
        protected getLocalTextPrefix() { return ArriendosRow.localTextPrefix; }
        protected getService() { return ArriendosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}