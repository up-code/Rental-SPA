
namespace Rental_SPA.Sitio {

    @Serenity.Decorators.registerClass()
    export class SliderDialog extends Serenity.EntityDialog<SliderRow, any> {
        protected getFormKey() { return SliderForm.formKey; }
        protected getIdProperty() { return SliderRow.idProperty; }
        protected getLocalTextPrefix() { return SliderRow.localTextPrefix; }
        protected getNameProperty() { return SliderRow.nameProperty; }
        protected getService() { return SliderService.baseUrl; }
        protected getDeletePermission() { return SliderRow.deletePermission; }
        protected getInsertPermission() { return SliderRow.insertPermission; }
        protected getUpdatePermission() { return SliderRow.updatePermission; }

        protected form = new SliderForm(this.idPrefix);

    }
}