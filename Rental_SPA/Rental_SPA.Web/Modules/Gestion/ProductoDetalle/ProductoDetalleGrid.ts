
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class ProductoDetalleGrid extends Serenity.EntityGrid<ProductoDetalleRow, any> {
        protected getColumnsKey() { return 'Gestion.ProductoDetalle'; }
        protected getDialogType() { return ProductoDetalleDialog; }
        protected getIdProperty() { return ProductoDetalleRow.idProperty; }
        protected getInsertPermission() { return ProductoDetalleRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductoDetalleRow.localTextPrefix; }
        protected getService() { return ProductoDetalleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}