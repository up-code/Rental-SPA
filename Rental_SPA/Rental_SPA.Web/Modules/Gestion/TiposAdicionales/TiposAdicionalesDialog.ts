
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class TiposAdicionalesDialog extends Serenity.EntityDialog<TiposAdicionalesRow, any> {
        protected getFormKey() { return TiposAdicionalesForm.formKey; }
        protected getIdProperty() { return TiposAdicionalesRow.idProperty; }
        protected getLocalTextPrefix() { return TiposAdicionalesRow.localTextPrefix; }
        protected getNameProperty() { return TiposAdicionalesRow.nameProperty; }
        protected getService() { return TiposAdicionalesService.baseUrl; }
        protected getDeletePermission() { return TiposAdicionalesRow.deletePermission; }
        protected getInsertPermission() { return TiposAdicionalesRow.insertPermission; }
        protected getUpdatePermission() { return TiposAdicionalesRow.updatePermission; }

        protected form = new TiposAdicionalesForm(this.idPrefix);

    }
}