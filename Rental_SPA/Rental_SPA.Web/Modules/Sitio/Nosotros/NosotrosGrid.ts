
namespace Rental_SPA.Sitio {

    @Serenity.Decorators.registerClass()
    export class NosotrosGrid extends Serenity.EntityGrid<NosotrosRow, any> {
        protected getColumnsKey() { return 'Sitio.Nosotros'; }
        protected getDialogType() { return NosotrosDialog; }
        protected getIdProperty() { return NosotrosRow.idProperty; }
        protected getInsertPermission() { return NosotrosRow.insertPermission; }
        protected getLocalTextPrefix() { return NosotrosRow.localTextPrefix; }
        protected getService() { return NosotrosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}