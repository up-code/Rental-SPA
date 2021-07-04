
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class ClientesDialog extends Serenity.EntityDialog<ClientesRow, any> {
        protected getFormKey() { return ClientesForm.formKey; }
        protected getIdProperty() { return ClientesRow.idProperty; }
        protected getLocalTextPrefix() { return ClientesRow.localTextPrefix; }
        protected getNameProperty() { return ClientesRow.nameProperty; }
        protected getService() { return ClientesService.baseUrl; }
        protected getDeletePermission() { return ClientesRow.deletePermission; }
        protected getInsertPermission() { return ClientesRow.insertPermission; }
        protected getUpdatePermission() { return ClientesRow.updatePermission; }

        protected form = new ClientesForm(this.idPrefix);

    }
}