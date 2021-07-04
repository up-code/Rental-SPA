
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerClass()
    export class AtributosGrid extends Serenity.EntityGrid<AtributosRow, any> {
        protected getColumnsKey() { return 'Gestion.Atributos'; }
        protected getDialogType() { return AtributosDialog; }
        protected getIdProperty() { return AtributosRow.idProperty; }
        protected getInsertPermission() { return AtributosRow.insertPermission; }
        protected getLocalTextPrefix() { return AtributosRow.localTextPrefix; }
        protected getService() { return AtributosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}