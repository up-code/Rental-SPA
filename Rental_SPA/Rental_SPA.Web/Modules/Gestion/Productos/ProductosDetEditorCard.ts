namespace Rental_SPA.Gestion {

    @Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
    @Serenity.Decorators.element("<div/>")
    export class ProductosDetEditorCard extends Serenity.TemplatedWidget<any>
        implements Serenity.IGetEditValue, Serenity.ISetEditValue {

        private isDirty: boolean;
        private items: ProductoDetalleRow[];
        private itemList: JQuery;
        private rowItems: RowItem[];
        private porcientoSubTotalInput: Serenity.DecimalEditor;
        private importeSubTotalInput: Serenity.DecimalEditor;

        constructor(div: JQuery) {
            super(div);

            this.itemList = this.byId('ItemList');
        }

        private _IdTipoArriendo: number;
        public set IdTipoArriendo(value: number) {
            this._IdTipoArriendo = value;
            this.updateContent();
        }

        protected getTemplate() {
            return "<div class='col-md-12' id='~_ItemList'></div>";
        }

        // https://github.com/volkanceylan/Serenity/issues/3140
        protected updateContent() {

            this.rowItems = [];

            this.itemList.children().remove();

            if (this.items) {
                var index = 0;

                let tiposAdicionales = Rental_SPA.Gestion.TiposAdicionalesRow.getLookup().items.sort((x, y) => Q.turkishLocaleCompare(x.Orden.toString(), y.Orden.toString()));;
                // let adicionales = VDT.Nomencladores.AdicionalesRow.getLookup().items;

                let tiposAdicionalesParaTipoArticulo: number[] = [];
                if (this._IdTipoArriendo) {
                    let tipoArticuloDetalles = Rental_SPA.Gestion.TipoArriendoRow.getLookup().itemById[this._IdTipoArriendo.toString()].Detalles;
                    if (!Q.isEmptyOrNull(tipoArticuloDetalles)) {
                        tiposAdicionalesParaTipoArticulo = tipoArticuloDetalles.split(',').map(x => Q.parseInteger(x));
                    }
                }

                for (var t1 = 0; t1 < tiposAdicionales.length; t1++) {

                    let tipoAdicional = tiposAdicionales[t1];

                    // Si no esta dentro de la lista, no lo muestro.
                    if (!tiposAdicionalesParaTipoArticulo.some(x => x == tipoAdicional.Id)) {
                        continue;
                    }

                    // Esta agregado?
                    let currentItem = Q.tryFirst(this.items, x => x.IdTipoAdicional == tipoAdicional.Id) || {};

                    var divRow = $(`<div class="row" idTipoAdicional="${tipoAdicional.Id}"/>`);
                    var div1 = $('<div class="col-md-2 field"/>');
                    var div2 = $('<div class="col-md-4 field"/>');
                    var div3 = $('<div class="col-md-2 field"/>');
                    var div4 = $('<div class="col-md-4 field"/>');

                    // div1
                    $('<label class="caption" />').text(tipoAdicional.Titulo).appendTo(div1);

                    // div2                    
                    let inputId2 = this.itemList.uniqueId()[0].id + '_IdAdicional_' + tipoAdicional.Id;
                    $('<input/>').attr('type', 'text').attr('name', 'IdAdicional').attr('id', inputId2).attr('style','width:400px;').appendTo(div2);

                    // div3                    
                    //let inputId3 = this.itemList.uniqueId()[0].id + '_Porciento_' + tipoAdicional.Id;
                    //if (tipoAdicional.MostrarPorcentaje) {
                    //    $('<label class="caption" for="' + inputId3 + '"/>').text('%').appendTo(div3);
                    //}
                    //$('<input/>').attr('type', 'text').attr('name', 'Porciento').attr('id', inputId3).appendTo(div3);
                    //$('<div class="vx" />').appendTo(div3);

                    // div4
                    //let inputId4 = this.itemList.uniqueId()[0].id + '_Importe_' + tipoAdicional.Id;
                    //if (tipoAdicional.MostrarImporte) {
                    //    $('<label class="caption" for="' + inputId4 + '"/>').text('$').appendTo(div4);
                    //}
                    //$('<input/>').attr('type', 'text').attr('name', 'Importe').attr('id', inputId4).appendTo(div4);
                    //$('<div class="vx" />').appendTo(div4);

                    div1.appendTo(divRow);
                    div2.appendTo(divRow);
                    div3.appendTo(divRow);
                    div4.appendTo(divRow);
                    divRow.appendTo(this.itemList);

                    index++;

                    let textbox = new Serenity.StringEditor($('#' + inputId2));
                    textbox.value = currentItem.Valor ? currentItem.Valor.toString() : null;
                    //textbox.change(e => this.onChangeCombo(e));

                    //let input1 = new Serenity.DecimalEditor($(`#${inputId3}`), { decimals: 2, padDecimals: 2 });
                    //Serenity.EditorUtils.setReadonly($(`#${inputId3}`), !currentItem.IdAtributo);
                    //input1.value = currentItem. || 0;
                    //input1.change(e => this.onChangeInput(e));
                    //if (!tipoAdicional.MostrarPorciento) {
                    //    input1.element.hide();
                    //}

                    //let input2 = new Serenity.DecimalEditor($('#' + inputId4), { decimals: 2, padDecimals: 2 });
                    //Serenity.EditorUtils.setReadonly($(`#${inputId4}`), !currentItem.IdAdicional);
                    //input2.value = currentItem.Importe || 0;
                    //input2.change(e => this.onChangeInput(e));
                    //if (!tipoAdicional.MostrarImporte) {
                    //    input2.element.hide();
                    //}

                    this.rowItems.push({
                        IdTipoAdicional: tipoAdicional.Id,
                        Valor: textbox                        
                    });

                }               
            }

            if (!this._IdTipoArriendo || !Rental_SPA.Gestion.TipoArriendoRow.getLookup().itemById[this._IdTipoArriendo.toString()].Detalles) {
                this.element.parent().hide();
            } else {
                this.element.parent().show();
            }
        }
        

        public get value() {

            this.rowItems.forEach(x => {
                // Existe en this.items?
                if (this.items.some(y => y.IdTipoAdicional == x.IdTipoAdicional)) {

                    let currentItem = Q.tryFirst(this.items, y => y.IdTipoAdicional == x.IdTipoAdicional);

                    // Tengo que borrarlo
                    if (Q.isEmptyOrNull(x.IdTipoAdicional.toString())) {
                        this.items.splice(Q.indexOf(this.items, y => y.IdTipoAdicional == x.IdTipoAdicional), 1);
                    } else {
                        currentItem.Valor = x.Valor.value;                        
                        currentItem.IdTipoAdicional = x.IdTipoAdicional;                        
                    }

                } else if (x.IdTipoAdicional > 0) {
                    this.items.push({
                        Valor: x.Valor.value,
                        IdTipoAdicional : x.IdTipoAdicional
                    });
                }
            });

            return this.items.sort(function (obj1, obj2) {
                return Rental_SPA.Gestion.TiposAdicionalesRow.getLookup().itemById[obj1.IdTipoAdicional].Orden - Rental_SPA.Gestion.TiposAdicionalesRow.getLookup().itemById[obj2.IdTipoAdicional].Orden;
            });
        }

        public set value(value: ProductoDetalleRow[]) {
            this.items = value || [];
            this.updateContent();
        }

        public getEditValue(prop: Serenity.PropertyItem, target) {
            target[prop.name] = this.value;
        }

        public setEditValue(source, prop: Serenity.PropertyItem) {
            this.value = source[prop.name] || [];
        }

        public onChange: () => void;
    }

    class RowItem {
        IdTipoAdicional: number;
        Valor: Serenity.StringEditor;        
    }
}