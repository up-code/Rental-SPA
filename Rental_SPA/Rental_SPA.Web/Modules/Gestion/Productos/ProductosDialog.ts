
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductosDialog extends Serenity.EntityDialog<ProductosRow, any> {
        protected getFormKey() { return ProductosForm.formKey; }
        protected getIdProperty() { return ProductosRow.idProperty; }
        protected getLocalTextPrefix() { return ProductosRow.localTextPrefix; }
        protected getNameProperty() { return ProductosRow.nameProperty; }
        protected getService() { return ProductosService.baseUrl; }
        protected getDeletePermission() { return ProductosRow.deletePermission; }
        protected getInsertPermission() { return ProductosRow.insertPermission; }
        protected getUpdatePermission() { return ProductosRow.updatePermission; }

        protected form = new ProductosForm(this.idPrefix);

        constructor(opt?: any) {
            super(opt);

            this.form.IdTipoArriendo.change((e) => {
                this.form.ProductosDet.IdTipoArriendo = Q.parseInteger(this.form.IdTipoArriendo.value)
            });

            this.form.IdTipoArriendo.changeSelect2((e) => {
                this.form.ProductosDet.value = [];
            });
        }

    }
}