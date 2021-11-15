
namespace Serenity {

    /**
     * A dialog/panel base class that easily generates a wizard UI from tabs in a form definition (e.g. Form.cs)
     */
    export abstract class WizardDialog<TEntity, TOptions> extends Serenity.TemplatedDialog<TOptions> {

        private wizardGrid: Serenity.PropertyGrid;

        /**
         * Creates a new wizard dialog
         * @param opt options, might be used by derived classes
         */
        constructor(opt?: TOptions) {
            super(opt);

            this.element.children().addClass("wizard-horz");

            this.wizardGrid = new PropertyGrid(this.byId("WizardGrid"),
                this.getPropertyGridOptions());

            this.wizardGrid.element.children(".property-tabs").children('li').each((i, li) => {
                var $li = $(li);
                var h = $li.children('a').html();
                $li.html('').attr('data-step', i + 1);
                $('<span class="badge"/>').text(i + 1).appendTo($li);
                $('<span class="text"/>').html(h).appendTo($li);
                $('<span class="chevron"/>').appendTo($li);
            });

            this.byId("CancelButton").click((e) => this.confirmCancel(e));

            this.byId("BackButton").click(() => {
                this.moveToStep(this.step - 1);
            });

            this.byId("NextButton").click(() => {
                if (!this.validateForm())
                    return false;

                this.moveToStep(this.step + 1);
            });

            this.wizardGrid.element.children(".property-tabs")
                .on("click", "li", e => {
                    var step = $(e.currentTarget).data('step');

                    if (step > this.step)
                        return;

                    this.moveToStep(step);
                });

            this.wizardGrid.load(this.getInitialEntity());

            this.element.on('dialogbeforeclose panelbeforeclose', e => {
                if (!Serenity.WX.hasOriginalEvent(e))
                    return;

                this.confirmCancel(e);
            });
        }

        /**
         * gets property grid options
         */
        protected getPropertyGridOptions(): PropertyGridOptions {
            return {
                idPrefix: this.idPrefix,
                mode: PropertyGridMode.insert,
                items: this.getPropertyItems(),
                localTextPrefix: this.getLocalTextPrefix(),
                useCategories: true
            };
        }

        /**
         * gets form key to use to load property items / tabs
         */
        protected getFormKey(): string {
            return null;
        }

        /**
         * gets local text prefix for labels
         */
        protected getLocalTextPrefix(): string {
            return "";
        }

        /**
         * gets list of property items to shown on form, uses form key to load items by default
         */
        protected getPropertyItems(): Serenity.PropertyItem[] {
            var formKey = this.getFormKey();
            if (formKey)
                return Q.getForm(formKey);

            return [];
        }

        /**
         * gets initial entity to load onto form, override these to customize initial form values
         */
        protected getInitialEntity(): TEntity {
            return {} as TEntity;
        }

        // gets maximum number of steps from
        protected get maxSteps() {
            return this.wizardGrid.element
                .children(".property-tabs")
                .children("li")
                .length;
        }

        /**
         * moves to a step, by calling one of next, back or finish methods based on target step
         * @param toStep the target step to move to
         */
        protected moveToStep(toStep: number) {
            if (toStep == this.step || toStep < 1 || toStep > this.maxSteps + 1)
                return;

            if (toStep >= this.maxSteps + 1) {
                this.finish();
                return;
            }

            (toStep < this.step ? this.back : this.next).call(this, toStep);
        }

        private _step: number = 1;

        // gets current step
        protected get step(): number {
            return this._step;
        }

        // sets current step directly, skipping any validation
        protected set step(value: number) {
            this.getStepLink(this._step).removeClass("in active");
            this.getStepPanel(this._step).removeClass("in active");
            this.getStepLink(value).addClass("in active");
            this.getStepPanel(value).addClass("in active")
                .find(".require-layout").triggerHandler("layout");
            var s: number;
            for (s = value; s <= this._step; s++)
                this.getStepLink(s).removeClass("complete").find("span.badge").removeClass("badge-success");
            for (s = this._step; s < value; s++)
                this.getStepLink(s).addClass("complete").find("span.badge").addClass("badge-success");

            this._step = value;

            this.byId("BackButton").toggleClass('disabled', this._step <= 1);
            this.byId("NextButton").children('.txt').text(this._step == this.maxSteps ? "Finish" : "Next");
        }

        /**
         * called to reset the form, and go back to first step
         */
        protected reset() {
            this.step = 1;
            this.wizardGrid.load(this.getInitialEntity());
        }

        /**
         * is called when user clicks the Finish button (next button on last step)
         */
        protected finish() {
            this.dialogClose();
        }

        /**
         * next method is called when user tries to go forward
         * @param toStep the step user is trying to move to, usually one step ahead
         */
        protected next(toStep: number) {
            this.step = toStep;
        }

        /**
         * back method is called when user tries to go backward
         * @param toStep the step user is trying to move to, usually one step back but can also be multiple
         */
        protected back(toStep: number) {
            this.step = toStep;
        }

        private getStepLink(step) {
            return this.wizardGrid.element
                .children(".property-tabs")
                .children("li").eq(step - 1);
        }

        private getStepPanel(step) {
            return this.wizardGrid.element
                .children(".property-panes")
                .children().eq(step - 1)
        }

        /**
         * make sure derived classes use WizardDialog template,
         * if they don't define one of their own
         */
        protected getFallbackTemplate() {
            return Q.getTemplate("Common.WizardDialog");
        }

        /**
         * gets cancel confirmation message, return null to disable confirmation
         */
        protected getCancelMessage() {
            return "¿Estás seguro de que deseas cancelar este asistente?";
        }

        /**
         * confirms when user tries to cancel or close the wizard
         * @param e
         */
        protected confirmCancel(e: JQueryEventObject) {
            var cancelMessage = this.getCancelMessage();
            if (!cancelMessage) {
                e.preventDefault();
                this.dialogClose();
                return;
            }

            e.preventDefault();
            Q.confirm(cancelMessage,
                () => {
                    this.dialogClose();
                });
        }

        /** gets save entity from form, optionally from a limited list of steps (tabs)
         * @param steps the list of steps to read data from, pass null to get all
         */
        protected getSaveEntity(steps?: number[]): TEntity {
            var entity = {} as TEntity;
            this.wizardGrid.save(entity);

            if (steps != null) {
                var maxSteps = this.maxSteps;
                for (var i = 1; i <= maxSteps; i++) {
                    if (steps.indexOf(i) >= 0)
                        continue;

                    var panel = this.getStepPanel(i);
                    panel.find('.field').each((z, el) => {
                        var field = $(el).attr('class').split(' ')[1];
                        if (field)
                            delete entity[field];
                    });
                }
            }

            return entity;
        }

        // gets value of compact steps option
        protected get compactSteps() {
            return this.element.children().hasClass("compact-steps");
        }

        // sets value of compact steps option, when it is on, inactive step titles only show
        // numbers and gets visible on hover. this is better there are many steps to fit
        protected set compactSteps(value: boolean) {
            this.element.children().toggleClass("compact-steps", value);
        }
    }
}
