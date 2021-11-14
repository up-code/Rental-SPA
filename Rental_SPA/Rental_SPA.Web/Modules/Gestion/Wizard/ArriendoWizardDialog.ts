
namespace Rental_SPA.Gestion {
    
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ArriendoWizardDialog extends Serenity.WizardDialog<ArriendoWizardRow, any> {

        protected getFormKey() { return ArriendoWizardForm.formKey; }
        protected getIdProperty() { return ArriendoWizardRow.idProperty; }
        protected getLocalTextPrefix() { return ArriendoWizardRow.localTextPrefix; }

        ////protected getNameProperty() { return ArriendoWizardRow.nameProperty; }
        //protected getService() { return CategoriasService.baseUrl; }           

        protected form = new ArriendoWizardForm(this.idPrefix);

        constructor(opt?: any) {
            super(opt);

            if (opt.container) {
                this.element.appendTo($(`#${opt.container}`));
            }
        }

        protected next(toStep: number): void {


            switch (toStep) {
                case 2:
                    super.next(toStep);
                    // this.form.HorarioDisponible.calendarUpdateSize();
                    break;
                case 3:
                    //if (!this.form.HorarioDisponible.Value || !this.form.HorarioDisponible.Value.FechaDesde) {
                    //    Q.notifyWarning("Por favor, seleccione algún horario disponible para la cita !");
                    //    return;
                    //}
                    super.next(toStep);
                    break;
                case 4:
                    this.form.ConfirmacionContext.element.html(`<div>
<div class="row"><label class="caption">Nombre:</label><span>${this.form.Nombres.value}</span></div>
<div class="row"><label class="caption">Apellidos:</label><span>${this.form.Apellidos.value}</span></div>
<div class="row"><label class="caption">Teléfono:</label><span>${this.form.Telefono.value}</span></div>
<div class="row"><label class="caption">Email:</label><span>${this.form.Email.value}</span></div>
<div class="row">&nbsp;</div>

<br/>
<div class="text-center"><h3 style="color: #1c5c93; font-family:"Open Sans",sans-serif;font-size:20px">Valor de la Consulta: ${Q.format(Q.text('Site.Reports.AmountPay'))}</h3></div>
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

                    Q.notifySuccess("Se creó su cita satisfactoriamente !");
                    super.finish();

                });
            }
        }
    }
}