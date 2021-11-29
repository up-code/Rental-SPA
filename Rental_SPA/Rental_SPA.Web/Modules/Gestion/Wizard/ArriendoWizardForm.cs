using System;
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
        [Tab("Ubicación")]

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "<h4 class='text-blue'>Ubicación</h4><p>Especifique la dirección de la Obra.</p>")]
        public string WelcomeMessage { get; set; }

        public string DireccionObra { get; set; }

        [HalfWidth]
        [LookupEditor(typeof(RegionesRow))]
        public int? Region { get; set; }

        [HalfWidth]
        public string Ciudad { get; set; }

        //[LookupEditor(typeof(ClientesRow))]
        //public Int32 IdCliente { get; set; }


        [Tab("Producto")]

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "<h4 class='text-blue'>Producto</h4><p>Datos del Producto seleccionado.</p>")]
        public string ProductoMessage { get; set; }

        [LookupEditor(typeof(ProductosRow))]
        public Int32 IdProducto { get; set; }

        [HalfWidth]       
        public DateTime FechaInicio { get; set; }

        [HalfWidth]
        public DateTime FechaDevolucion { get; set; }

        [CssClass("col-md-6 col-md-offset-6")]
        public Int32 Cantidad { get; set; }

        [CssClass("col-md-2 col-md-offset-6")]
        public Boolean ConGarantia { get; set; }

        [LabelWidth(100)]
        [CssClass("col-md-4")]
        [DecimalEditor(Decimals = 0)]
        [ReadOnly(true)]
        public Decimal Garantia { get; set; }

        [ReadOnly(true)]
        [CssClass("col-md-6 col-md-offset-6")]
        [DecimalEditor(Decimals = 0)]
        public Decimal Neto { get; set; }

        [ReadOnly(true)]
        [CssClass("col-md-6 col-md-offset-6")]
        [DecimalEditor(Decimals = 0)]
        public Decimal Iva { get; set; }

        [ReadOnly(true)]
        [CssClass("col-md-6 col-md-offset-6")]
        [DecimalEditor(Decimals = 0)]
        public Decimal Total { get; set; }


        [Tab("Cliente")]

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "<h4 class='text-blue'>Datos de Usted</h4><p>Por favor proporciona tus datos en este formulario para proceder con el arriendo.</p>")]
        public string DetallesMessage { get; set; }

        [MaskedEditor(Mask = "99.999.999-9")]
        [CssClass("col-md-offset-6 col-md-6")]
        public String Rut { get; set; }
        [HalfWidth]
        public String RazonSocial { get; set; }
        [HalfWidth]
        public String NombreFantasia { get; set; }

        [HalfWidth]
        public String Direccion { get; set; }
        [HalfWidth]
        public String ClienteCiudad { get; set; }
        [HalfWidth]
        public String Telefono { get; set; }
        [HalfWidth]
        [EmailAddressEditor]
        public String EMail { get; set; }



        [Tab("Confirmación")]

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "<h4 class='text-blue'>Confirmación</h4><p>Se realizará un arriendo con estos datos.</p>")]
        public string ConfirmacionMessage { get; set; }

        [IgnoreName]
        [StaticTextBlock(HideLabel = true, IsHtml = true, Text = "")]
        public string ConfirmacionContext { get; set; }
    }
}