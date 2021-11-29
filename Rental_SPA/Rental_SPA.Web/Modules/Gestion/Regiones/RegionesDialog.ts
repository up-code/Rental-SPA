
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class RegionesDialog extends Serenity.EntityDialog<RegionesRow, any> {
        protected getFormKey() { return RegionesForm.formKey; }
        protected getIdProperty() { return RegionesRow.idProperty; }
        protected getLocalTextPrefix() { return RegionesRow.localTextPrefix; }
        protected getNameProperty() { return RegionesRow.nameProperty; }
        protected getService() { return RegionesService.baseUrl; }
        protected getDeletePermission() { return RegionesRow.deletePermission; }
        protected getInsertPermission() { return RegionesRow.insertPermission; }
        protected getUpdatePermission() { return RegionesRow.updatePermission; }

        protected form = new RegionesForm(this.idPrefix);

    }
}