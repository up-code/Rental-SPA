using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

using Rental_SPA.Gestion.Entities;

using Serenity.ComponentModel;

namespace Rental_SPA.Gestion.Forms
{
    [FormScript("Gestion.ArriendoWizard")]
    [BasedOnRow(typeof(Entities.ArriendoWizardRow), CheckNames = true)]
    public class ArriendoWizardForm
    {
        [Tab("Servicio")]

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "<h4 class='text-blue'>Servicio</h4><p>Seleccione el Servicio, Categía y Profesional que desea consultar.</p>")]
        public string WelcomeMessage { get; set; }

        [OneThirdWidth]        
        public string DireccionObra { get; set; }

        [OneThirdWidth]        
        public int? Region { get; set; }

        [OneThirdWidth]        
        public string Ciudad { get; set; }        

        [Tab("Detalles")]

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "<h4 class='text-blue'>Datos de Usted</h4><p>Por favor proporciona tus datos en este formulario para proceder con la reserva.</p>")]
        public string DetallesMessage { get; set; }        

        [Tab("Confirmación")]

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "<h4 class='text-blue'>Confirmación</h4><p>Se realizará una reserva con estos datos.</p>")]
        public string ConfirmacionMessage { get; set; }

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "")]
        public string ConfirmacionContext { get; set; }
    }
}