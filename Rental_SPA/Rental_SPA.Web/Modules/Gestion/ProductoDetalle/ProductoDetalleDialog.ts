
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class ProductoDetalleDialog extends Serenity.EntityDialog<ProductoDetalleRow, any> {
        protected getFormKey() { return ProductoDetalleForm.formKey; }
        protected getIdProperty() { return ProductoDetalleRow.idProperty; }
        protected getLocalTextPrefix() { return ProductoDetalleRow.localTextPrefix; }
        protected getService() { return ProductoDetalleService.baseUrl; }
        protected getDeletePermission() { return ProductoDetalleRow.deletePermission; }
        protected getInsertPermission() { return ProductoDetalleRow.insertPermission; }
        protected getUpdatePermission() { return ProductoDetalleRow.updatePermission; }

        protected form = new ProductoDetalleForm(this.idPrefix);

    }
}