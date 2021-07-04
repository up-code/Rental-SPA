
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class AtributosDialog extends Serenity.EntityDialog<AtributosRow, any> {
        protected getFormKey() { return AtributosForm.formKey; }
        protected getIdProperty() { return AtributosRow.idProperty; }
        protected getLocalTextPrefix() { return AtributosRow.localTextPrefix; }
        protected getNameProperty() { return AtributosRow.nameProperty; }
        protected getService() { return AtributosService.baseUrl; }
        protected getDeletePermission() { return AtributosRow.deletePermission; }
        protected getInsertPermission() { return AtributosRow.insertPermission; }
        protected getUpdatePermission() { return AtributosRow.updatePermission; }

        protected form = new AtributosForm(this.idPrefix);

    }
}