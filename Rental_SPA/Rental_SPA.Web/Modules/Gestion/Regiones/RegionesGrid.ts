
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class RegionesGrid extends Serenity.EntityGrid<RegionesRow, any> {
        protected getColumnsKey() { return 'Gestion.Regiones'; }
        protected getDialogType() { return RegionesDialog; }
        protected getIdProperty() { return RegionesRow.idProperty; }
        protected getInsertPermission() { return RegionesRow.insertPermission; }
        protected getLocalTextPrefix() { return RegionesRow.localTextPrefix; }
        protected getService() { return RegionesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}