using Serenity.Navigation;
using MyPages = Rental_SPA.Gestion.Pages;

[assembly: NavigationMenu(5000, "Gestion", icon: "fa-cogs text-green")]
[assembly: NavigationLink(5000, "Gestion/Productos", typeof(MyPages.ProductosController), icon: "fa-cubes text-green")]
[assembly: NavigationLink(5000, "Gestion/Clientes", typeof(MyPages.ClientesController), icon: "fa-group text-green")]
[assembly: NavigationLink(5000, "Gestion/Arriendos", typeof(MyPages.ArriendosController), icon: "fa-handshake-o text-green")]
                          
[assembly: NavigationMenu(5000, "Gestion/Nomencladores", icon: "fa-cogs text-green")]
//[assembly: NavigationLink(5000, "Gestion/Nomencladores/Atributos", typeof(MyPages.AtributosController), icon: "fa-diamond text-green")]
[assembly: NavigationLink(5000, "Gestion/Nomencladores/Tipo Arriendo", typeof(MyPages.TipoArriendoController), icon: "fa-flag text-green")]
[assembly: NavigationLink(5000, "Gestion/Nomencladores/Tipos Adicionales", typeof(MyPages.TiposAdicionalesController), icon: "fa-magic text-green")]