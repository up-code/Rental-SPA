using Serenity.Navigation;
using MyPages = Rental_SPA.Sitio.Pages;

[assembly: NavigationMenu(int.MaxValue, "Sitio", icon: "fa-globe text-blue")]
[assembly: NavigationLink(int.MaxValue, "Sitio/Slider", typeof(MyPages.SliderController), icon: "fa-sliders text-blue")]
[assembly: NavigationLink(int.MaxValue, "Sitio/Nosotros", typeof(MyPages.NosotrosController), icon: "fa-building text-blue")]
[assembly: NavigationLink(int.MaxValue, "Sitio/Nuestros Clientes", typeof(MyPages.NuestrosClientesController), icon: "fa-group text-blue")]