
namespace Rental_SPA.Sitio {

    @Serenity.Decorators.registerClass()
    export class HistoriaDialog extends Serenity.EntityDialog<HistoriaRow, any> {
        protected getFormKey() { return HistoriaForm.formKey; }
        protected getIdProperty() { return HistoriaRow.idProperty; }
        protected getLocalTextPrefix() { return HistoriaRow.localTextPrefix; }
        protected getNameProperty() { return HistoriaRow.nameProperty; }
        protected getService() { return HistoriaService.baseUrl; }
        protected getDeletePermission() { return HistoriaRow.deletePermission; }
        protected getInsertPermission() { return HistoriaRow.insertPermission; }
        protected getUpdatePermission() { return HistoriaRow.updatePermission; }

        protected form = new HistoriaForm(this.idPrefix);

    }
}