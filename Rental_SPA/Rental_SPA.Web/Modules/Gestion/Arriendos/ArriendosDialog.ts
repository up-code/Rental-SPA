
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ArriendosDialog extends Serenity.EntityDialog<ArriendosRow, any> {
        protected getFormKey() { return ArriendosForm.formKey; }
        protected getIdProperty() { return ArriendosRow.idProperty; }
        protected getLocalTextPrefix() { return ArriendosRow.localTextPrefix; }
        protected getNameProperty() { return ArriendosRow.nameProperty; }
        protected getService() { return ArriendosService.baseUrl; }
        protected getDeletePermission() { return ArriendosRow.deletePermission; }
        protected getInsertPermission() { return ArriendosRow.insertPermission; }
        protected getUpdatePermission() { return ArriendosRow.updatePermission; }

        protected form = new ArriendosForm(this.idPrefix);

    }
}