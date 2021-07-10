using Serenity.Navigation;
using MyPages = Rental_SPA.Gestion.Pages;

[assembly: NavigationMenu(int.MaxValue, "Gestion", icon: "fa-cogs text-green")]
[assembly: NavigationLink(int.MaxValue, "Gestion/Productos", typeof(MyPages.ProductosController), icon: "fa-cubes text-green")]
[assembly: NavigationLink(int.MaxValue, "Gestion/Producto Detalle", typeof(MyPages.ProductoDetalleController), icon: "fa-cube text-green")]
[assembly: NavigationLink(int.MaxValue, "Gestion/Arriendos", typeof(MyPages.ArriendosController), icon: "fa-handshake-o text-green")]
[assembly: NavigationLink(int.MaxValue, "Gestion/Atributos", typeof(MyPages.AtributosController), icon: "fa-diamond text-green")]
[assembly: NavigationLink(int.MaxValue, "Gestion/Clientes", typeof(MyPages.ClientesController), icon: "fa-group text-green")]
[assembly: NavigationLink(int.MaxValue, "Gestion/Tipo Arriendo", typeof(MyPages.TipoArriendoController), icon: "fa-flag text-green")]
[assembly: NavigationLink(int.MaxValue, "Gestion/Tipos Adicionales", typeof(MyPages.TiposAdicionalesController), icon: "fa-magic text-green")]