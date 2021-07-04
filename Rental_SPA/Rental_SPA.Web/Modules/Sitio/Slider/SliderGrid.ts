
namespace Rental_SPA.Sitio {

    @Serenity.Decorators.registerClass()
    export class SliderGrid extends Serenity.EntityGrid<SliderRow, any> {
        protected getColumnsKey() { return 'Sitio.Slider'; }
        protected getDialogType() { return SliderDialog; }
        protected getIdProperty() { return SliderRow.idProperty; }
        protected getInsertPermission() { return SliderRow.insertPermission; }
        protected getLocalTextPrefix() { return SliderRow.localTextPrefix; }
        protected getService() { return SliderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}