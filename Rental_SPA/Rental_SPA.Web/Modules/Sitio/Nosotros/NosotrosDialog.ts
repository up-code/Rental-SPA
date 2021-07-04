
namespace Rental_SPA.Sitio {

    @Serenity.Decorators.registerClass()
    export class NosotrosDialog extends Serenity.EntityDialog<NosotrosRow, any> {
        protected getFormKey() { return NosotrosForm.formKey; }
        protected getIdProperty() { return NosotrosRow.idProperty; }
        protected getLocalTextPrefix() { return NosotrosRow.localTextPrefix; }
        protected getNameProperty() { return NosotrosRow.nameProperty; }
        protected getService() { return NosotrosService.baseUrl; }
        protected getDeletePermission() { return NosotrosRow.deletePermission; }
        protected getInsertPermission() { return NosotrosRow.insertPermission; }
        protected getUpdatePermission() { return NosotrosRow.updatePermission; }

        protected form = new NosotrosForm(this.idPrefix);

    }
}