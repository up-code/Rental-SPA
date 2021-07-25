using Serenity.Navigation;
using MyPages = Rental_SPA.Sitio.Pages;

[assembly: NavigationMenu(6000, "Sitio", icon: "fa-globe text-blue")]
[assembly: NavigationLink(6000, "Sitio/Slider", typeof(MyPages.SliderController), icon: "fa-sliders text-blue")]
[assembly: NavigationLink(6000, "Sitio/Nosotros", typeof(MyPages.NosotrosController), icon: "fa-building text-blue")]
[assembly: NavigationLink(6000, "Sitio/Nuestros Clientes", typeof(MyPages.NuestrosClientesController), icon: "fa-group text-blue")]
[assembly: NavigationLink(6000, "Sitio/Tabs", typeof(MyPages.HistoriaController), icon: "fa-book text-blue")]