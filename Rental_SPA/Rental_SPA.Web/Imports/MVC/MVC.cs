
namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Gestion
        {
            public static class Arriendos
            {
                public const string ArriendosIndex = "~/Modules/Gestion/Arriendos/ArriendosIndex.cshtml";
            }

            public static class Atributos
            {
                public const string AtributosIndex = "~/Modules/Gestion/Atributos/AtributosIndex.cshtml";
            }

            public static class Clientes
            {
                public const string ClientesIndex = "~/Modules/Gestion/Clientes/ClientesIndex.cshtml";
            }

            public static class ProductoDetalle
            {
                public const string ProductoDetalleIndex = "~/Modules/Gestion/ProductoDetalle/ProductoDetalleIndex.cshtml";
            }

            public static class Productos
            {
                public const string ProductosIndex = "~/Modules/Gestion/Productos/ProductosIndex.cshtml";
            }

            public static class TipoArriendo
            {
                public const string TipoArriendoIndex = "~/Modules/Gestion/TipoArriendo/TipoArriendoIndex.cshtml";
            }

            public static class TiposAdicionales
            {
                public const string TiposAdicionalesIndex = "~/Modules/Gestion/TiposAdicionales/TiposAdicionalesIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSitio = "~/Views/Shared/_LayoutSitio.cshtml";
            public const string _LayoutSitioHead = "~/Views/Shared/_LayoutSitioHead.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Sitio
        {
            public const string Index = "~/Views/Sitio/Index.cshtml";
            public static class Nosotros
            {
                public const string NosotrosIndex = "~/Modules/Sitio/Nosotros/NosotrosIndex.cshtml";
            }

            public static class NuestrosClientes
            {
                public const string NuestrosClientesIndex = "~/Modules/Sitio/NuestrosClientes/NuestrosClientesIndex.cshtml";
            }

            public static class Slider
            {
                public const string SliderIndex = "~/Modules/Sitio/Slider/SliderIndex.cshtml";
            }

        }

    }
}
