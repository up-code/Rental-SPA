/// <reference types="jquery" />
/// <reference types="jqueryui" />
/// <reference types="react" />
declare namespace Rental_SPA.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Rental_SPA.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Rental_SPA.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace Rental_SPA.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Rental_SPA.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Rental_SPA.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Rental_SPA.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Rental_SPA.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Rental_SPA.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace Rental_SPA.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Rental_SPA.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Rental_SPA.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Rental_SPA.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Rental_SPA.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Rental_SPA.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Rental_SPA.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Rental_SPA.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Rental_SPA.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Rental_SPA.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Rental_SPA.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Rental_SPA.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Rental_SPA.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Rental_SPA.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Rental_SPA.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Rental_SPA.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Rental_SPA.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Rental_SPA.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Rental_SPA.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace Rental_SPA.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace Rental_SPA.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Rental_SPA {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Rental_SPA {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Rental_SPA.Gestion {
    interface ArriendoWizardForm {
        WelcomeMessage: StaticTextBlock;
        DireccionObra: Serenity.StringEditor;
        Region: Serenity.LookupEditor;
        Ciudad: Serenity.StringEditor;
        ProductoMessage: StaticTextBlock;
        IdProducto: Serenity.LookupEditor;
        FechaInicio: Serenity.DateEditor;
        FechaDevolucion: Serenity.DateEditor;
        Cantidad: Serenity.IntegerEditor;
        ConGarantia: Serenity.BooleanEditor;
        Garantia: Serenity.DecimalEditor;
        Neto: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DetallesMessage: StaticTextBlock;
        Rut: Serenity.MaskedEditor;
        RazonSocial: Serenity.StringEditor;
        NombreFantasia: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        ClienteCiudad: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        EMail: Serenity.EmailAddressEditor;
        ConfirmacionMessage: StaticTextBlock;
        ConfirmacionContext: StaticTextBlock;
    }
    class ArriendoWizardForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface ArriendoWizardRow {
        Id?: number;
        DireccionObra?: string;
        Region?: number;
        Ciudad?: string;
        IdCliente?: number;
        IdProducto?: number;
        Garantia?: number;
        ConGarantia?: boolean;
        FechaInicio?: string;
        FechaDevolucion?: string;
        Neto?: number;
        Iva?: number;
        Total?: number;
        Cantidad?: number;
        Rut?: string;
        RazonSocial?: string;
        NombreFantasia?: string;
        Direccion?: string;
        ClienteCiudad?: string;
        Telefono?: string;
        EMail?: string;
    }
    namespace ArriendoWizardRow {
        const idProperty = "Id";
        const nameProperty = "DireccionObra";
        const localTextPrefix = "Gestion.ArriendoWizard";
        const deletePermission = "Administration:General";
        const insertPermission = "*";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            DireccionObra = "DireccionObra",
            Region = "Region",
            Ciudad = "Ciudad",
            IdCliente = "IdCliente",
            IdProducto = "IdProducto",
            Garantia = "Garantia",
            ConGarantia = "ConGarantia",
            FechaInicio = "FechaInicio",
            FechaDevolucion = "FechaDevolucion",
            Neto = "Neto",
            Iva = "Iva",
            Total = "Total",
            Cantidad = "Cantidad",
            Rut = "Rut",
            RazonSocial = "RazonSocial",
            NombreFantasia = "NombreFantasia",
            Direccion = "Direccion",
            ClienteCiudad = "ClienteCiudad",
            Telefono = "Telefono",
            EMail = "EMail"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace ArriendoWizardService {
        const baseUrl = "Gestion/ArriendoWizard";
        function Create(request: Serenity.SaveRequest<ArriendoWizardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ArriendoWizardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ArriendoWizardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ArriendoWizardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/ArriendoWizard/Create",
            Update = "Gestion/ArriendoWizard/Update",
            Delete = "Gestion/ArriendoWizard/Delete",
            Retrieve = "Gestion/ArriendoWizard/Retrieve",
            List = "Gestion/ArriendoWizard/List"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    class ArriendosColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Gestion {
    interface ArriendosForm {
        Id: Serenity.StringEditor;
        DireccionObra: Serenity.StringEditor;
        Region: Serenity.IntegerEditor;
        Ciudad: Serenity.StringEditor;
        IdCliente: Serenity.LookupEditor;
        IdProducto: Serenity.LookupEditor;
        FechaInicio: Serenity.DateEditor;
        FechaDevolucion: Serenity.DateEditor;
        Cantidad: Serenity.IntegerEditor;
        ConGarantia: Serenity.BooleanEditor;
        Garantia: Serenity.DecimalEditor;
        Neto: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
    }
    class ArriendosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface ArriendosRow {
        Id?: number;
        DireccionObra?: string;
        Region?: number;
        Ciudad?: string;
        IdCliente?: number;
        IdProducto?: number;
        Cantidad?: number;
        Garantia?: number;
        ConGarantia?: boolean;
        FechaInicio?: string;
        FechaDevolucion?: string;
        Neto?: number;
        Iva?: number;
        Total?: number;
    }
    namespace ArriendosRow {
        const idProperty = "Id";
        const nameProperty = "DireccionObra";
        const localTextPrefix = "Gestion.Arriendos";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            DireccionObra = "DireccionObra",
            Region = "Region",
            Ciudad = "Ciudad",
            IdCliente = "IdCliente",
            IdProducto = "IdProducto",
            Cantidad = "Cantidad",
            Garantia = "Garantia",
            ConGarantia = "ConGarantia",
            FechaInicio = "FechaInicio",
            FechaDevolucion = "FechaDevolucion",
            Neto = "Neto",
            Iva = "Iva",
            Total = "Total"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace ArriendosService {
        const baseUrl = "Gestion/Arriendos";
        function Create(request: Serenity.SaveRequest<ArriendosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ArriendosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ArriendosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ArriendosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/Arriendos/Create",
            Update = "Gestion/Arriendos/Update",
            Delete = "Gestion/Arriendos/Delete",
            Retrieve = "Gestion/Arriendos/Retrieve",
            List = "Gestion/Arriendos/List"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    class AtributosColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Gestion {
    interface AtributosForm {
        Descripcion: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Porciento: Serenity.DecimalEditor;
        Importe: Serenity.DecimalEditor;
    }
    class AtributosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface AtributosRow {
        Id?: number;
        Descripcion?: string;
        Codigo?: string;
        Porciento?: number;
        Importe?: number;
    }
    namespace AtributosRow {
        const idProperty = "Id";
        const nameProperty = "Descripcion";
        const localTextPrefix = "Gestion.Atributos";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Descripcion = "Descripcion",
            Codigo = "Codigo",
            Porciento = "Porciento",
            Importe = "Importe"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace AtributosService {
        const baseUrl = "Gestion/Atributos";
        function Create(request: Serenity.SaveRequest<AtributosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AtributosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AtributosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AtributosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/Atributos/Create",
            Update = "Gestion/Atributos/Update",
            Delete = "Gestion/Atributos/Delete",
            Retrieve = "Gestion/Atributos/Retrieve",
            List = "Gestion/Atributos/List"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    class ClientesColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Gestion {
    interface ClientesForm {
        Rut: Serenity.MaskedEditor;
        RazonSocial: Serenity.StringEditor;
        NombreFantasia: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Ciudad: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        EMail: Serenity.EmailAddressEditor;
    }
    class ClientesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface ClientesRow {
        Id?: number;
        Rut?: string;
        RazonSocial?: string;
        NombreFantasia?: string;
        Direccion?: string;
        Ciudad?: string;
        Telefono?: string;
        EMail?: string;
    }
    namespace ClientesRow {
        const idProperty = "Id";
        const nameProperty = "RazonSocial";
        const localTextPrefix = "Gestion.Clientes";
        const lookupKey = "Gestion.Clientes";
        function getLookup(): Q.Lookup<ClientesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Rut = "Rut",
            RazonSocial = "RazonSocial",
            NombreFantasia = "NombreFantasia",
            Direccion = "Direccion",
            Ciudad = "Ciudad",
            Telefono = "Telefono",
            EMail = "EMail"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace ClientesService {
        const baseUrl = "Gestion/Clientes";
        function Create(request: Serenity.SaveRequest<ClientesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/Clientes/Create",
            Update = "Gestion/Clientes/Update",
            Delete = "Gestion/Clientes/Delete",
            Retrieve = "Gestion/Clientes/Retrieve",
            List = "Gestion/Clientes/List"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    class ProductoDetalleColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Gestion {
    interface ProductoDetalleForm {
        IdProducto: Serenity.IntegerEditor;
        IdAtributo: Serenity.IntegerEditor;
        IdTipoAdicional: Serenity.IntegerEditor;
        Valor: Serenity.DecimalEditor;
    }
    class ProductoDetalleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface ProductoDetalleRow {
        Id?: number;
        IdProducto?: number;
        IdAtributo?: number;
        IdTipoAdicional?: number;
        Valor?: string;
        IdTipoAdicionalTitulo?: string;
    }
    namespace ProductoDetalleRow {
        const idProperty = "Id";
        const localTextPrefix = "Gestion.ProductoDetalle";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            IdProducto = "IdProducto",
            IdAtributo = "IdAtributo",
            IdTipoAdicional = "IdTipoAdicional",
            Valor = "Valor",
            IdTipoAdicionalTitulo = "IdTipoAdicionalTitulo"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace ProductoDetalleService {
        const baseUrl = "Gestion/ProductoDetalle";
        function Create(request: Serenity.SaveRequest<ProductoDetalleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductoDetalleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductoDetalleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductoDetalleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/ProductoDetalle/Create",
            Update = "Gestion/ProductoDetalle/Update",
            Delete = "Gestion/ProductoDetalle/Delete",
            Retrieve = "Gestion/ProductoDetalle/Retrieve",
            List = "Gestion/ProductoDetalle/List"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    class ProductosColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Gestion {
    interface ProductosForm {
        Nombre: Serenity.StringEditor;
        Activo: Serenity.BooleanEditor;
        IdTipoArriendo: Serenity.LookupEditor;
        Descripcion: Serenity.HtmlContentEditor;
        ProductosDet: ProductosDetEditorCard;
        Cantidad: Serenity.IntegerEditor;
        Precio: Serenity.DecimalEditor;
        Iva: Serenity.DecimalEditor;
        Garantia: Serenity.DecimalEditor;
        Foto: Serenity.ImageUploadEditor;
    }
    class ProductosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface ProductosRow {
        Id?: number;
        Nombre?: string;
        Foto?: string;
        Cantidad?: number;
        Precio?: number;
        Iva?: number;
        Activo?: boolean;
        Garantia?: number;
        IdTipoArriendo?: number;
        IdTipoArriendoTipo?: string;
        Descripcion?: string;
        IdTipoArriendoCotizacion?: number;
        ProductosDet?: ProductoDetalleRow[];
    }
    namespace ProductosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Gestion.Productos";
        const lookupKey = "Gestion.Productos";
        function getLookup(): Q.Lookup<ProductosRow>;
        const deletePermission = " Administration:General";
        const insertPermission = " Administration:General";
        const readPermission = "*";
        const updatePermission = " Administration:General";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Foto = "Foto",
            Cantidad = "Cantidad",
            Precio = "Precio",
            Iva = "Iva",
            Activo = "Activo",
            Garantia = "Garantia",
            IdTipoArriendo = "IdTipoArriendo",
            IdTipoArriendoTipo = "IdTipoArriendoTipo",
            Descripcion = "Descripcion",
            IdTipoArriendoCotizacion = "IdTipoArriendoCotizacion",
            ProductosDet = "ProductosDet"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace ProductosService {
        const baseUrl = "Gestion/Productos";
        function Create(request: Serenity.SaveRequest<ProductosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/Productos/Create",
            Update = "Gestion/Productos/Update",
            Delete = "Gestion/Productos/Delete",
            Retrieve = "Gestion/Productos/Retrieve",
            List = "Gestion/Productos/List"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    class RegionesColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Gestion {
    interface RegionesForm {
        Nombre: Serenity.StringEditor;
        Sigla: Serenity.StringEditor;
    }
    class RegionesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface RegionesRow {
        Id?: number;
        Nombre?: string;
        Sigla?: string;
    }
    namespace RegionesRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Gestion.Regiones";
        const lookupKey = "Gestion.Regiones";
        function getLookup(): Q.Lookup<RegionesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Sigla = "Sigla"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace RegionesService {
        const baseUrl = "Gestion/Regiones";
        function Create(request: Serenity.SaveRequest<RegionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/Regiones/Create",
            Update = "Gestion/Regiones/Update",
            Delete = "Gestion/Regiones/Delete",
            Retrieve = "Gestion/Regiones/Retrieve",
            List = "Gestion/Regiones/List"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    class TipoArriendoColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Gestion {
    enum TipoArriendoCotizacion {
        Unidad = 1,
        Dia = 2
    }
}
declare namespace Rental_SPA.Gestion {
    interface TipoArriendoForm {
        Tipo: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Cotizacion: Serenity.EnumEditor;
        Detalles: Serenity.CheckLookupEditor;
        Foto: Serenity.ImageUploadEditor;
    }
    class TipoArriendoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface TipoArriendoRow {
        Id?: number;
        Tipo?: string;
        Codigo?: string;
        Detalles?: string;
        Foto?: string;
        Cotizacion?: number;
    }
    namespace TipoArriendoRow {
        const idProperty = "Id";
        const nameProperty = "Tipo";
        const localTextPrefix = "Gestion.TipoArriendo";
        const lookupKey = "Gestion.TipoArriendo";
        function getLookup(): Q.Lookup<TipoArriendoRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Tipo = "Tipo",
            Codigo = "Codigo",
            Detalles = "Detalles",
            Foto = "Foto",
            Cotizacion = "Cotizacion"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace TipoArriendoService {
        const baseUrl = "Gestion/TipoArriendo";
        function Create(request: Serenity.SaveRequest<TipoArriendoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoArriendoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoArriendoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoArriendoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/TipoArriendo/Create",
            Update = "Gestion/TipoArriendo/Update",
            Delete = "Gestion/TipoArriendo/Delete",
            Retrieve = "Gestion/TipoArriendo/Retrieve",
            List = "Gestion/TipoArriendo/List"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    class TiposAdicionalesColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Gestion {
    interface TiposAdicionalesForm {
        Titulo: Serenity.StringEditor;
        Descripcion: Serenity.TextAreaEditor;
        Orden: Serenity.IntegerEditor;
    }
    class TiposAdicionalesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Gestion {
    interface TiposAdicionalesRow {
        Id?: number;
        Descripcion?: string;
        Titulo?: string;
        Orden?: number;
        MostrarPorcentaje?: boolean;
        MostrarImporte?: boolean;
    }
    namespace TiposAdicionalesRow {
        const idProperty = "Id";
        const nameProperty = "Titulo";
        const localTextPrefix = "Gestion.TiposAdicionales";
        const lookupKey = "Gestion.TiposAdicionales";
        function getLookup(): Q.Lookup<TiposAdicionalesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Descripcion = "Descripcion",
            Titulo = "Titulo",
            Orden = "Orden",
            MostrarPorcentaje = "MostrarPorcentaje",
            MostrarImporte = "MostrarImporte"
        }
    }
}
declare namespace Rental_SPA.Gestion {
    namespace TiposAdicionalesService {
        const baseUrl = "Gestion/TiposAdicionales";
        function Create(request: Serenity.SaveRequest<TiposAdicionalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposAdicionalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposAdicionalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposAdicionalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Gestion/TiposAdicionales/Create",
            Update = "Gestion/TiposAdicionales/Update",
            Delete = "Gestion/TiposAdicionales/Delete",
            Retrieve = "Gestion/TiposAdicionales/Retrieve",
            List = "Gestion/TiposAdicionales/List"
        }
    }
}
declare namespace Rental_SPA {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Rental_SPA {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Rental_SPA.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Rental_SPA.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Rental_SPA.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Rental_SPA.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Rental_SPA.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Rental_SPA {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Rental_SPA.Sitio {
    class HistoriaColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Sitio {
    interface HistoriaForm {
        Titulo: Serenity.StringEditor;
        Body: Serenity.HtmlContentEditor;
        Orden: Serenity.IntegerEditor;
    }
    class HistoriaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Sitio {
    interface HistoriaRow {
        Id?: number;
        Titulo?: string;
        Body?: string;
        Orden?: number;
    }
    namespace HistoriaRow {
        const idProperty = "Id";
        const nameProperty = "Titulo";
        const localTextPrefix = "Sitio.Historia";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Titulo = "Titulo",
            Body = "Body",
            Orden = "Orden"
        }
    }
}
declare namespace Rental_SPA.Sitio {
    namespace HistoriaService {
        const baseUrl = "Sitio/Historia";
        function Create(request: Serenity.SaveRequest<HistoriaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HistoriaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HistoriaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HistoriaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sitio/Historia/Create",
            Update = "Sitio/Historia/Update",
            Delete = "Sitio/Historia/Delete",
            Retrieve = "Sitio/Historia/Retrieve",
            List = "Sitio/Historia/List"
        }
    }
}
declare namespace Rental_SPA.Sitio {
    class NosotrosColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Sitio {
    interface NosotrosForm {
        Titulo: Serenity.StringEditor;
        Body: Serenity.HtmlContentEditor;
        Comtario: Serenity.HtmlContentEditor;
        Icono: Serenity.StringEditor;
        Foto: Serenity.ImageUploadEditor;
    }
    class NosotrosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Sitio {
    interface NosotrosRow {
        Id?: number;
        Titulo?: string;
        Body?: string;
        Comtario?: string;
        Icono?: string;
        Foto?: string;
    }
    namespace NosotrosRow {
        const idProperty = "Id";
        const nameProperty = "Titulo";
        const localTextPrefix = "Sitio.Nosotros";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Titulo = "Titulo",
            Body = "Body",
            Comtario = "Comtario",
            Icono = "Icono",
            Foto = "Foto"
        }
    }
}
declare namespace Rental_SPA.Sitio {
    namespace NosotrosService {
        const baseUrl = "Sitio/Nosotros";
        function Create(request: Serenity.SaveRequest<NosotrosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NosotrosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NosotrosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NosotrosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sitio/Nosotros/Create",
            Update = "Sitio/Nosotros/Update",
            Delete = "Sitio/Nosotros/Delete",
            Retrieve = "Sitio/Nosotros/Retrieve",
            List = "Sitio/Nosotros/List"
        }
    }
}
declare namespace Rental_SPA.Sitio {
    class NuestrosClientesColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Sitio {
    interface NuestrosClientesForm {
        Logo: Serenity.ImageUploadEditor;
        Nombre: Serenity.StringEditor;
        Url: Serenity.StringEditor;
    }
    class NuestrosClientesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Sitio {
    interface NuestrosClientesRow {
        Id?: number;
        Logo?: string;
        Nombre?: string;
        Url?: string;
    }
    namespace NuestrosClientesRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Sitio.NuestrosClientes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Logo = "Logo",
            Nombre = "Nombre",
            Url = "Url"
        }
    }
}
declare namespace Rental_SPA.Sitio {
    namespace NuestrosClientesService {
        const baseUrl = "Sitio/NuestrosClientes";
        function Create(request: Serenity.SaveRequest<NuestrosClientesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NuestrosClientesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NuestrosClientesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NuestrosClientesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sitio/NuestrosClientes/Create",
            Update = "Sitio/NuestrosClientes/Update",
            Delete = "Sitio/NuestrosClientes/Delete",
            Retrieve = "Sitio/NuestrosClientes/Retrieve",
            List = "Sitio/NuestrosClientes/List"
        }
    }
}
declare namespace Rental_SPA.Sitio {
    class SliderColumns {
        static columnsKey: string;
    }
}
declare namespace Rental_SPA.Sitio {
    interface SliderForm {
        Titulo: Serenity.StringEditor;
        SubTitulo: Serenity.HtmlContentEditor;
        Foto: Serenity.ImageUploadEditor;
    }
    class SliderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Rental_SPA.Sitio {
    interface SliderRow {
        Id?: number;
        Titulo?: string;
        SubTitulo?: string;
        Foto?: string;
    }
    namespace SliderRow {
        const idProperty = "Id";
        const nameProperty = "Titulo";
        const localTextPrefix = "Sitio.Slider";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "*";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Titulo = "Titulo",
            SubTitulo = "SubTitulo",
            Foto = "Foto"
        }
    }
}
declare namespace Rental_SPA.Sitio {
    namespace SliderService {
        const baseUrl = "Sitio/Slider";
        function Create(request: Serenity.SaveRequest<SliderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SliderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SliderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SliderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sitio/Slider/Create",
            Update = "Sitio/Slider/Update",
            Delete = "Sitio/Slider/Delete",
            Retrieve = "Sitio/Slider/Retrieve",
            List = "Sitio/Slider/List"
        }
    }
}
declare namespace Rental_SPA.Texts {
}
declare namespace Rental_SPA.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Rental_SPA.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Rental_SPA.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Rental_SPA.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Rental_SPA.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Rental_SPA.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Rental_SPA.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Rental_SPA.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Rental_SPA.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Rental_SPA.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Rental_SPA.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Rental_SPA.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Rental_SPA.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Rental_SPA.LanguageList {
    function getValue(): string[][];
}
declare namespace Rental_SPA.ScriptInitialization {
}
declare namespace Rental_SPA {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Rental_SPA.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Rental_SPA.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Rental_SPA.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Rental_SPA.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Rental_SPA.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Rental_SPA.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Rental_SPA {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Rental_SPA.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Rental_SPA.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Rental_SPA.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace Serenity {
    class SingleLineTextFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        static formatValue(value: string): string;
    }
}
declare namespace Serenity {
    /**
     * A dialog/panel base class that easily generates a wizard UI from tabs in a form definition (e.g. Form.cs)
     */
    abstract class WizardDialog<TEntity, TOptions> extends Serenity.TemplatedDialog<TOptions> {
        private wizardGrid;
        /**
         * Creates a new wizard dialog
         * @param opt options, might be used by derived classes
         */
        constructor(opt?: TOptions);
        /**
         * gets property grid options
         */
        protected getPropertyGridOptions(): PropertyGridOptions;
        /**
         * gets form key to use to load property items / tabs
         */
        protected getFormKey(): string;
        /**
         * gets local text prefix for labels
         */
        protected getLocalTextPrefix(): string;
        /**
         * gets list of property items to shown on form, uses form key to load items by default
         */
        protected getPropertyItems(): Serenity.PropertyItem[];
        /**
         * gets initial entity to load onto form, override these to customize initial form values
         */
        protected getInitialEntity(): TEntity;
        protected get maxSteps(): number;
        /**
         * moves to a step, by calling one of next, back or finish methods based on target step
         * @param toStep the target step to move to
         */
        protected moveToStep(toStep: number): void;
        private _step;
        protected get step(): number;
        protected set step(value: number);
        /**
         * called to reset the form, and go back to first step
         */
        protected reset(): void;
        /**
         * is called when user clicks the Finish button (next button on last step)
         */
        protected finish(): void;
        /**
         * next method is called when user tries to go forward
         * @param toStep the step user is trying to move to, usually one step ahead
         */
        protected next(toStep: number): void;
        /**
         * back method is called when user tries to go backward
         * @param toStep the step user is trying to move to, usually one step back but can also be multiple
         */
        protected back(toStep: number): void;
        private getStepLink;
        private getStepPanel;
        /**
         * make sure derived classes use WizardDialog template,
         * if they don't define one of their own
         */
        protected getFallbackTemplate(): string;
        /**
         * gets cancel confirmation message, return null to disable confirmation
         */
        protected getCancelMessage(): string;
        /**
         * confirms when user tries to cancel or close the wizard
         * @param e
         */
        protected confirmCancel(e: JQueryEventObject): void;
        /** gets save entity from form, optionally from a limited list of steps (tabs)
         * @param steps the list of steps to read data from, pass null to get all
         */
        protected getSaveEntity(steps?: number[]): TEntity;
        protected get compactSteps(): boolean;
        protected set compactSteps(value: boolean);
    }
}
declare var jsPDF: any;
declare namespace Rental_SPA.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Rental_SPA.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Rental_SPA.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Rental_SPA.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Rental_SPA.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Rental_SPA.Gestion {
    class ArriendosDialog extends Serenity.EntityDialog<ArriendosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ArriendosForm;
    }
}
declare namespace Rental_SPA.Gestion {
    class ArriendosGrid extends Serenity.EntityGrid<ArriendosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ArriendosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Gestion {
    class AtributosDialog extends Serenity.EntityDialog<AtributosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AtributosForm;
    }
}
declare namespace Rental_SPA.Gestion {
    class AtributosGrid extends Serenity.EntityGrid<AtributosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AtributosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Gestion {
    class ClientesDialog extends Serenity.EntityDialog<ClientesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClientesForm;
    }
}
declare namespace Rental_SPA.Gestion {
    class ClientesGrid extends Serenity.EntityGrid<ClientesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Gestion {
    class ProductoDetalleDialog extends Serenity.EntityDialog<ProductoDetalleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductoDetalleForm;
    }
}
declare namespace Rental_SPA.Gestion {
    class ProductoDetalleGrid extends Serenity.EntityGrid<ProductoDetalleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductoDetalleDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Gestion {
    interface productosParameters {
        Items: ProductosRow[];
    }
    export class ProductosCard extends React.Component<productosParameters> {
        render(): React.ReactNode;
    }
    export {};
}
declare namespace Rental_SPA.Gestion {
    class ProductosDetEditorCard extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        private itemList;
        private rowItems;
        private porcientoSubTotalInput;
        private importeSubTotalInput;
        constructor(div: JQuery);
        private _IdTipoArriendo;
        set IdTipoArriendo(value: number);
        protected getTemplate(): string;
        protected updateContent(): void;
        get value(): ProductoDetalleRow[];
        set value(value: ProductoDetalleRow[]);
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        onChange: () => void;
    }
}
declare namespace Rental_SPA.Gestion {
    interface productoParameters {
        Producto: ProductosRow;
    }
    export class ProductoDetalle extends React.Component<productoParameters> {
        render(): React.ReactNode;
    }
    export {};
}
declare namespace Rental_SPA.Gestion {
    class ProductosDialog extends Serenity.EntityDialog<ProductosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductosForm;
        constructor(opt?: any);
    }
}
declare namespace Rental_SPA.Gestion {
    class ProductosGrid extends Serenity.EntityGrid<ProductosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Gestion {
    class RegionesDialog extends Serenity.EntityDialog<RegionesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RegionesForm;
    }
}
declare namespace Rental_SPA.Gestion {
    class RegionesGrid extends Serenity.EntityGrid<RegionesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegionesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Gestion {
    interface arriendoParameters {
        Items: TipoArriendoRow[];
    }
    export class TipoArriendoCard extends React.Component<arriendoParameters> {
        render(): React.ReactNode;
    }
    export {};
}
declare namespace Rental_SPA.Gestion {
    class TipoArriendoDialog extends Serenity.EntityDialog<TipoArriendoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TipoArriendoForm;
    }
}
declare namespace Rental_SPA.Gestion {
    class TipoArriendoGrid extends Serenity.EntityGrid<TipoArriendoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TipoArriendoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Gestion {
    class TiposAdicionalesDialog extends Serenity.EntityDialog<TiposAdicionalesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TiposAdicionalesForm;
    }
}
declare namespace Rental_SPA.Gestion {
    class TiposAdicionalesGrid extends Serenity.EntityGrid<TiposAdicionalesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposAdicionalesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Gestion {
    class ArriendoWizardDialog extends Serenity.WizardDialog<ArriendoWizardRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: ArriendoWizardForm;
        private tipoArriendoCotizacion;
        constructor(opt?: any);
        private calculate;
        protected getInitialEntity(): ArriendoWizardRow;
        protected next(toStep: number): void;
        protected confirmCancel(e: JQueryEventObject): void;
        protected finish(): void;
    }
}
declare namespace Rental_SPA.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace Rental_SPA.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Sitio {
    class HistoriaDialog extends Serenity.EntityDialog<HistoriaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: HistoriaForm;
    }
}
declare namespace Rental_SPA.Sitio {
    class HistoriaGrid extends Serenity.EntityGrid<HistoriaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof HistoriaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewProcessData(response: Serenity.ListResponse<HistoriaRow>): Serenity.ListResponse<HistoriaRow>;
        protected addButtonClick(): void;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getViewOptions(): Slick.RemoteViewOptions;
        protected setOrden(rows: HistoriaRow[]): void;
    }
}
declare namespace Rental_SPA.Sitio {
    interface nosotrosParameters {
        Items: NosotrosRow[];
    }
    export class NosotrosCard extends React.Component<nosotrosParameters> {
        render(): React.ReactNode;
    }
    export {};
}
declare namespace Rental_SPA.Sitio {
    class NosotrosDialog extends Serenity.EntityDialog<NosotrosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: NosotrosForm;
    }
}
declare namespace Rental_SPA.Sitio {
    class NosotrosGrid extends Serenity.EntityGrid<NosotrosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NosotrosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Sitio {
    interface OurClientsParameters {
        Items: NuestrosClientesRow[];
    }
    export class NuestrosClientesCard extends React.Component<OurClientsParameters> {
        render(): React.ReactNode;
        componentDidMount(): void;
    }
    export {};
}
declare namespace Rental_SPA.Sitio {
    class NuestrosClientesDialog extends Serenity.EntityDialog<NuestrosClientesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: NuestrosClientesForm;
    }
}
declare namespace Rental_SPA.Sitio {
    class NuestrosClientesGrid extends Serenity.EntityGrid<NuestrosClientesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NuestrosClientesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Rental_SPA.Sitio {
    interface sliderParameter {
        Items: SliderRow[];
    }
    export class SliderCard extends React.Component<sliderParameter> {
        render(): React.ReactNode;
        componentDidMount(): void;
    }
    export {};
}
declare namespace Rental_SPA.Sitio {
    class SliderDialog extends Serenity.EntityDialog<SliderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SliderForm;
    }
}
declare namespace Rental_SPA.Sitio {
    class SliderGrid extends Serenity.EntityGrid<SliderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SliderDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
