
namespace Rental_SPA.Sitio {

    @Serenity.Decorators.registerClass()
    export class HistoriaGrid extends Serenity.EntityGrid<HistoriaRow, any> {
        protected getColumnsKey() { return 'Sitio.Historia'; }
        protected getDialogType() { return HistoriaDialog; }
        protected getIdProperty() { return HistoriaRow.idProperty; }
        protected getInsertPermission() { return HistoriaRow.insertPermission; }
        protected getLocalTextPrefix() { return HistoriaRow.localTextPrefix; }
        protected getService() { return HistoriaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            // Para agregar la opción de Ordenar las Filas.
            this.slickGrid.setSelectionModel(new Slick.RowSelectionModel());
            Serenity.GridUtils.makeOrderable(this.slickGrid, (rows: number[], insertBefore: number) => {

                if (rows.length == 0) {
                    return;
                }

                let currentRow = Q.deepClone(this.itemAt(rows[0]));

                let currentItems = this.view.getItems();
                currentItems.splice(rows[0], 1);

                currentItems.splice(insertBefore, 0, currentRow);
                this.setOrden(currentItems);

                Q.blockUI({
                    message: Q.text('Site.BasicProgressDialog.AguardeMto'),
                    onBlock: () => {
                        try {
                            currentItems.forEach(row => {
                                Rental_SPA.Sitio.HistoriaService.Update({ EntityId: row.Id, Entity: row }, resp => { }, { async: false });
                            });
                        } catch (e) {
                            console.log(e);
                        } finally {
                            Q.blockUndo();
                            this.view.setItems(currentItems, true);
                        }
                    }
                });

            });
        }


        protected onViewProcessData(response: Serenity.ListResponse<HistoriaRow>): Serenity.ListResponse<HistoriaRow> {

            if (response.Entities.length > 0) {
                response.Entities = response.Entities.sort((a, b) => a.Orden - b.Orden);
            }

            return super.onViewProcessData(response);
        }

        protected addButtonClick(): void {

            let nextOrdenNro: number = 1;
            if (this.view.getItems().length > 0) {
                nextOrdenNro = this.view.getItems().sort((a, b) => b.Orden - a.Orden)[0].Orden + 1;
            }

            this.editItem({ Order: nextOrdenNro } as HistoriaRow);
        }

        protected getColumns(): Slick.Column[] {

            var columns = super.getColumns();

            columns.unshift({
                field: "",
                sortable: false,
                id: "#",
                name: "",
                width: 40,
                behavior: "selectAndMove",
                selectable: false,
                resizable: false,
                cssClass: "cell-reorder dnd"
            });

            return columns;
        }

        protected getSlickOptions(): Slick.GridOptions {
            let options = super.getSlickOptions();

            options.enableRowReordering = true;

            return options;
        }

        protected getViewOptions(): Slick.RemoteViewOptions {
            let options = super.getViewOptions();

            options.rowsPerPage = 2500;

            return options;
        }

        protected setOrden(rows: HistoriaRow[]) {
            let i: number = 1;
            rows.forEach(x => x.Orden = i++);
        }
    }
}