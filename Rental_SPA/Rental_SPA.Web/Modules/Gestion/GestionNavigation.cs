using Serenity.Navigation;
using MyPages = Rental_SPA.Gestion.Pages;

[assembly: NavigationLink(int.MaxValue, "Gestion/Productos", typeof(MyPages.ProductosController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Gestion/Producto Detalle", typeof(MyPages.ProductoDetalleController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Gestion/Arriendos", typeof(MyPages.ArriendosController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Gestion/Atributos", typeof(MyPages.AtributosController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Gestion/Clientes", typeof(MyPages.ClientesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Gestion/Tipo Arriendo", typeof(MyPages.TipoArriendoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Gestion/Tipos Adicionales", typeof(MyPages.TiposAdicionalesController), icon: null)]