
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()    
    export class TipoArriendoDialog extends Serenity.EntityDialog<TipoArriendoRow, any> {
        protected getFormKey() { return TipoArriendoForm.formKey; }
        protected getIdProperty() { return TipoArriendoRow.idProperty; }
        protected getLocalTextPrefix() { return TipoArriendoRow.localTextPrefix; }
        protected getNameProperty() { return TipoArriendoRow.nameProperty; }
        protected getService() { return TipoArriendoService.baseUrl; }
        protected getDeletePermission() { return TipoArriendoRow.deletePermission; }
        protected getInsertPermission() { return TipoArriendoRow.insertPermission; }
        protected getUpdatePermission() { return TipoArriendoRow.updatePermission; }

        protected form = new TipoArriendoForm(this.idPrefix);

    }
}