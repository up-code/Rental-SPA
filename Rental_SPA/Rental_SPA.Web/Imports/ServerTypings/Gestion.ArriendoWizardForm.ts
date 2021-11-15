namespace Rental_SPA.Gestion {
    export interface ArriendoWizardForm {
        WelcomeMessage: StaticTextBlock;
        DireccionObra: Serenity.StringEditor;
        Region: Serenity.IntegerEditor;
        Ciudad: Serenity.StringEditor;
        DetallesMessage: StaticTextBlock;
        ConfirmacionMessage: StaticTextBlock;
        ConfirmacionContext: StaticTextBlock;
    }

    export class ArriendoWizardForm extends Serenity.PrefixedContext {
        static formKey = 'Gestion.ArriendoWizard';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ArriendoWizardForm.init)  {
                ArriendoWizardForm.init = true;

                var s = Serenity;
                var w0 = StaticTextBlock;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(ArriendoWizardForm, [
                    'WelcomeMessage', w0,
                    'DireccionObra', w1,
                    'Region', w2,
                    'Ciudad', w1,
                    'DetallesMessage', w0,
                    'ConfirmacionMessage', w0,
                    'ConfirmacionContext', w0
                ]);
            }
        }
    }
}
