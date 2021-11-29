
namespace Rental_SPA.Gestion {

    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ArriendoWizardDialog extends Serenity.WizardDialog<ArriendoWizardRow, any> {

        protected getFormKey() { return ArriendoWizardForm.formKey; }
        protected getIdProperty() { return ArriendoWizardRow.idProperty; }
        protected getLocalTextPrefix() { return ArriendoWizardRow.localTextPrefix; }                 

        protected form = new ArriendoWizardForm(this.idPrefix);
        private tipoArriendoCotizacion: number;

        constructor(opt?: any) {
            super(opt);

            let self = this;

            if (opt.container) {
                self.element.appendTo($(`#${opt.container}`));
            }

            this.form.IdProducto.change(e => {
                self.form.Garantia.value = 0;
                self.form.Neto.value = 0;
                self.form.Iva.value = 0;
                self.form.Total.value = 0;
                self.tipoArriendoCotizacion = null;

                if (self.form.IdProducto.value) {
                    ProductosService.Retrieve({ EntityId: self.form.IdProducto.value }, resp => {
                        if (resp.Entity) {
                            self.form.Garantia.value = resp.Entity.Garantia;
                            self.form.Neto.value = resp.Entity.Precio;
                            self.form.Iva.value = resp.Entity.Iva;
                            self.tipoArriendoCotizacion = resp.Entity.IdTipoArriendoCotizacion;
                            self.calculate();
                        }
                    });
                }

            });

            self.form.Cantidad.change(e => self.calculate());
            self.form.ConGarantia.change(e => self.calculate());
            self.form.FechaInicio.change(e => self.calculate());
            self.form.FechaDevolucion.change(e => self.calculate());

            self.form.FechaDevolucion.addValidationRule(self.uniqueName, e => {
                if (Q.parseDate(self.form.FechaDevolucion.value) < Q.parseDate(self.form.FechaInicio.value))
                    return "La Fecha Devolución no puede ser menor a la de Inicio!";
            });

            self.form.IdProducto.element.trigger('change');
        }

        private calculate() {

            let days = 1;
            this.form.Total.element.parent().find('label.caption').text(`Total`);

            if (this.tipoArriendoCotizacion == TipoArriendoCotizacion.Dia && this.form.FechaDevolucion.value && this.form.FechaInicio.value) {
                days = (Q.parseDate(this.form.FechaDevolucion.value).getTime() - Q.parseDate(this.form.FechaInicio.value).getTime()) / (1000 * 3600 * 24);
                if (days === 0) {
                    days = 1;
                }
                this.form.Total.element.parent().find('label.caption').text(`Total (${days} día${days > 1 ? 's' : ''})`);
            }

            this.form.Total.value = (this.form.Cantidad.value * this.form.Neto.value * days) + (this.form.ConGarantia.value ? this.form.Garantia.value : 0) + (this.form.Iva.value * this.form.Cantidad.value * days);
        }

        protected getInitialEntity(): ArriendoWizardRow {
            return { IdProducto: this.options.idProducto } as ArriendoWizardRow;
        }

        protected next(toStep: number): void {


            switch (toStep) {
                case 2:
                    // TODO: Validar stock del idproducto!
                    super.next(toStep);                    
                    break;
                case 3:       
                    // TODO: Validar si ya existe el cliente por el rut.
                    super.next(toStep);
                    break;
                case 4:
                    this.form.ConfirmacionContext.element.html(`<div>
<div class="row">
    <label class="caption">Producto:</label>
    <label class="caption" style="width: auto; color: black;">${this.form.IdProducto.selectedItem.Nombre}</label>
</div>
<div class="row">
    <label class="caption">Fecha Inicio:</label>
    <label class="caption" style="width: auto;color: black;">${this.form.FechaInicio.value}</label>
</div>
<div class="row">
    <label class="caption">Fecha Devolución:</label>
    <label class="caption" style="width: auto;color: black;">${this.form.FechaDevolucion.value}</label>
</div>
<div class="row">
    <label class="caption">Total</label>
    <label class="caption" style="width: auto;color: black;">${this.form.Total.value}</label>
</div>
<div class="row">&nbsp;</div>

<br/>
 </div>`);
                    super.next(toStep);
                    break;
                default:
                    super.next(toStep);
                    break;
            }
        }

        protected confirmCancel(e: JQueryEventObject) {
            var cancelMessage = this.getCancelMessage();
            if (!cancelMessage) {
                e.preventDefault();
                window.location.href = Q.resolveUrl("~/");
                return;
            }

            e.preventDefault();
            Q.confirm(cancelMessage,
                () => {
                    window.location.href = Q.resolveUrl("~/");
                });
        }

        protected finish(): void {

            if (this.validateForm()) {
                Rental_SPA.Gestion.ArriendoWizardService.Create({ Entity: this.getSaveEntity() }, resp => {

                    Q.notifySuccess("Se creó su arriendo satisfactoriamente !");
                    super.finish();

                });
            }
        }
    }
}