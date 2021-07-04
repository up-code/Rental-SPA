
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class TiposAdicionalesGrid extends Serenity.EntityGrid<TiposAdicionalesRow, any> {
        protected getColumnsKey() { return 'Gestion.TiposAdicionales'; }
        protected getDialogType() { return TiposAdicionalesDialog; }
        protected getIdProperty() { return TiposAdicionalesRow.idProperty; }
        protected getInsertPermission() { return TiposAdicionalesRow.insertPermission; }
        protected getLocalTextPrefix() { return TiposAdicionalesRow.localTextPrefix; }
        protected getService() { return TiposAdicionalesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}