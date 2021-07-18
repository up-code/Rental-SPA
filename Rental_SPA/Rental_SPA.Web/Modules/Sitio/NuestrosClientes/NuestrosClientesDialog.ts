
namespace Rental_SPA.Sitio {

    @Serenity.Decorators.registerClass()
    export class NuestrosClientesDialog extends Serenity.EntityDialog<NuestrosClientesRow, any> {
        protected getFormKey() { return NuestrosClientesForm.formKey; }
        protected getIdProperty() { return NuestrosClientesRow.idProperty; }
        protected getLocalTextPrefix() { return NuestrosClientesRow.localTextPrefix; }
        protected getNameProperty() { return NuestrosClientesRow.nameProperty; }
        protected getService() { return NuestrosClientesService.baseUrl; }
        protected getDeletePermission() { return NuestrosClientesRow.deletePermission; }
        protected getInsertPermission() { return NuestrosClientesRow.insertPermission; }
        protected getUpdatePermission() { return NuestrosClientesRow.updatePermission; }

        protected form = new NuestrosClientesForm(this.idPrefix);

    }
}