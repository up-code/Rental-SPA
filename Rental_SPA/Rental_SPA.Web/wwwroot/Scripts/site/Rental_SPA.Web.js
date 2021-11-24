var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendoWizardForm = /** @class */ (function (_super) {
            __extends(ArriendoWizardForm, _super);
            function ArriendoWizardForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ArriendoWizardForm.init) {
                    ArriendoWizardForm.init = true;
                    var s = Serenity;
                    var w0 = Rental_SPA.StaticTextBlock;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
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
                return _this;
            }
            ArriendoWizardForm.formKey = 'Gestion.ArriendoWizard';
            return ArriendoWizardForm;
        }(Serenity.PrefixedContext));
        Gestion.ArriendoWizardForm = ArriendoWizardForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendoWizardRow;
        (function (ArriendoWizardRow) {
            ArriendoWizardRow.idProperty = 'Id';
            ArriendoWizardRow.nameProperty = 'DireccionObra';
            ArriendoWizardRow.localTextPrefix = 'Gestion.ArriendoWizard';
            ArriendoWizardRow.deletePermission = 'Administration:General';
            ArriendoWizardRow.insertPermission = '*';
            ArriendoWizardRow.readPermission = 'Administration:General';
            ArriendoWizardRow.updatePermission = 'Administration:General';
        })(ArriendoWizardRow = Gestion.ArriendoWizardRow || (Gestion.ArriendoWizardRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendoWizardService;
        (function (ArriendoWizardService) {
            ArriendoWizardService.baseUrl = 'Gestion/ArriendoWizard';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ArriendoWizardService[x] = function (r, s, o) {
                    return Q.serviceRequest(ArriendoWizardService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ArriendoWizardService = Gestion.ArriendoWizardService || (Gestion.ArriendoWizardService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendosColumns = /** @class */ (function () {
            function ArriendosColumns() {
            }
            ArriendosColumns.columnsKey = 'Gestion.Arriendos';
            return ArriendosColumns;
        }());
        Gestion.ArriendosColumns = ArriendosColumns;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendosForm = /** @class */ (function (_super) {
            __extends(ArriendosForm, _super);
            function ArriendosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ArriendosForm.init) {
                    ArriendosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(ArriendosForm, [
                        'DireccionObra', w0,
                        'Region', w1,
                        'Ciudad', w0,
                        'IdCliente', w1,
                        'IdProducto', w1,
                        'Garantia', w2,
                        'ConGarantia', w3,
                        'FechaInicio', w4,
                        'FechaDevolucion', w4,
                        'Neto', w2,
                        'Iva', w2,
                        'Total', w2
                    ]);
                }
                return _this;
            }
            ArriendosForm.formKey = 'Gestion.Arriendos';
            return ArriendosForm;
        }(Serenity.PrefixedContext));
        Gestion.ArriendosForm = ArriendosForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendosRow;
        (function (ArriendosRow) {
            ArriendosRow.idProperty = 'Id';
            ArriendosRow.nameProperty = 'DireccionObra';
            ArriendosRow.localTextPrefix = 'Gestion.Arriendos';
            ArriendosRow.deletePermission = 'Administration:General';
            ArriendosRow.insertPermission = 'Administration:General';
            ArriendosRow.readPermission = '*';
            ArriendosRow.updatePermission = 'Administration:General';
        })(ArriendosRow = Gestion.ArriendosRow || (Gestion.ArriendosRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendosService;
        (function (ArriendosService) {
            ArriendosService.baseUrl = 'Gestion/Arriendos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ArriendosService[x] = function (r, s, o) {
                    return Q.serviceRequest(ArriendosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ArriendosService = Gestion.ArriendosService || (Gestion.ArriendosService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var AtributosColumns = /** @class */ (function () {
            function AtributosColumns() {
            }
            AtributosColumns.columnsKey = 'Gestion.Atributos';
            return AtributosColumns;
        }());
        Gestion.AtributosColumns = AtributosColumns;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var AtributosForm = /** @class */ (function (_super) {
            __extends(AtributosForm, _super);
            function AtributosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AtributosForm.init) {
                    AtributosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(AtributosForm, [
                        'Descripcion', w0,
                        'Codigo', w0,
                        'Porciento', w1,
                        'Importe', w1
                    ]);
                }
                return _this;
            }
            AtributosForm.formKey = 'Gestion.Atributos';
            return AtributosForm;
        }(Serenity.PrefixedContext));
        Gestion.AtributosForm = AtributosForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var AtributosRow;
        (function (AtributosRow) {
            AtributosRow.idProperty = 'Id';
            AtributosRow.nameProperty = 'Descripcion';
            AtributosRow.localTextPrefix = 'Gestion.Atributos';
            AtributosRow.deletePermission = 'Administration:General';
            AtributosRow.insertPermission = 'Administration:General';
            AtributosRow.readPermission = '*';
            AtributosRow.updatePermission = 'Administration:General';
        })(AtributosRow = Gestion.AtributosRow || (Gestion.AtributosRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var AtributosService;
        (function (AtributosService) {
            AtributosService.baseUrl = 'Gestion/Atributos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AtributosService[x] = function (r, s, o) {
                    return Q.serviceRequest(AtributosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AtributosService = Gestion.AtributosService || (Gestion.AtributosService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ClientesColumns = /** @class */ (function () {
            function ClientesColumns() {
            }
            ClientesColumns.columnsKey = 'Gestion.Clientes';
            return ClientesColumns;
        }());
        Gestion.ClientesColumns = ClientesColumns;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ClientesForm = /** @class */ (function (_super) {
            __extends(ClientesForm, _super);
            function ClientesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ClientesForm.init) {
                    ClientesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ClientesForm, [
                        'Rut', w0,
                        'RazonSocial', w0,
                        'NombreFantasia', w0,
                        'Direccion', w0,
                        'Ciudad', w0,
                        'Telefono', w0,
                        'EMail', w0
                    ]);
                }
                return _this;
            }
            ClientesForm.formKey = 'Gestion.Clientes';
            return ClientesForm;
        }(Serenity.PrefixedContext));
        Gestion.ClientesForm = ClientesForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ClientesRow;
        (function (ClientesRow) {
            ClientesRow.idProperty = 'Id';
            ClientesRow.nameProperty = 'Rut';
            ClientesRow.localTextPrefix = 'Gestion.Clientes';
            ClientesRow.deletePermission = 'Administration:General';
            ClientesRow.insertPermission = 'Administration:General';
            ClientesRow.readPermission = 'Administration:General';
            ClientesRow.updatePermission = 'Administration:General';
        })(ClientesRow = Gestion.ClientesRow || (Gestion.ClientesRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ClientesService;
        (function (ClientesService) {
            ClientesService.baseUrl = 'Gestion/Clientes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ClientesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ClientesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ClientesService = Gestion.ClientesService || (Gestion.ClientesService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductoDetalleColumns = /** @class */ (function () {
            function ProductoDetalleColumns() {
            }
            ProductoDetalleColumns.columnsKey = 'Gestion.ProductoDetalle';
            return ProductoDetalleColumns;
        }());
        Gestion.ProductoDetalleColumns = ProductoDetalleColumns;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductoDetalleForm = /** @class */ (function (_super) {
            __extends(ProductoDetalleForm, _super);
            function ProductoDetalleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductoDetalleForm.init) {
                    ProductoDetalleForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ProductoDetalleForm, [
                        'IdProducto', w0,
                        'IdAtributo', w0,
                        'IdTipoAdicional', w0,
                        'Valor', w1
                    ]);
                }
                return _this;
            }
            ProductoDetalleForm.formKey = 'Gestion.ProductoDetalle';
            return ProductoDetalleForm;
        }(Serenity.PrefixedContext));
        Gestion.ProductoDetalleForm = ProductoDetalleForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductoDetalleRow;
        (function (ProductoDetalleRow) {
            ProductoDetalleRow.idProperty = 'Id';
            ProductoDetalleRow.localTextPrefix = 'Gestion.ProductoDetalle';
            ProductoDetalleRow.deletePermission = 'Administration:General';
            ProductoDetalleRow.insertPermission = 'Administration:General';
            ProductoDetalleRow.readPermission = '*';
            ProductoDetalleRow.updatePermission = 'Administration:General';
        })(ProductoDetalleRow = Gestion.ProductoDetalleRow || (Gestion.ProductoDetalleRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductoDetalleService;
        (function (ProductoDetalleService) {
            ProductoDetalleService.baseUrl = 'Gestion/ProductoDetalle';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductoDetalleService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductoDetalleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductoDetalleService = Gestion.ProductoDetalleService || (Gestion.ProductoDetalleService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductosColumns = /** @class */ (function () {
            function ProductosColumns() {
            }
            ProductosColumns.columnsKey = 'Gestion.Productos';
            return ProductosColumns;
        }());
        Gestion.ProductosColumns = ProductosColumns;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductosForm = /** @class */ (function (_super) {
            __extends(ProductosForm, _super);
            function ProductosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductosForm.init) {
                    ProductosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.HtmlContentEditor;
                    var w4 = Gestion.ProductosDetEditorCard;
                    var w5 = s.IntegerEditor;
                    var w6 = s.DecimalEditor;
                    var w7 = s.ImageUploadEditor;
                    Q.initFormType(ProductosForm, [
                        'Nombre', w0,
                        'Activo', w1,
                        'IdTipoArriendo', w2,
                        'Descripcion', w3,
                        'ProductosDet', w4,
                        'Cantidad', w5,
                        'Precio', w6,
                        'Iva', w6,
                        'Garantia', w6,
                        'Foto', w7
                    ]);
                }
                return _this;
            }
            ProductosForm.formKey = 'Gestion.Productos';
            return ProductosForm;
        }(Serenity.PrefixedContext));
        Gestion.ProductosForm = ProductosForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductosRow;
        (function (ProductosRow) {
            ProductosRow.idProperty = 'Id';
            ProductosRow.nameProperty = 'Nombre';
            ProductosRow.localTextPrefix = 'Gestion.Productos';
            ProductosRow.deletePermission = ' Administration:General';
            ProductosRow.insertPermission = ' Administration:General';
            ProductosRow.readPermission = '*';
            ProductosRow.updatePermission = ' Administration:General';
        })(ProductosRow = Gestion.ProductosRow || (Gestion.ProductosRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductosService;
        (function (ProductosService) {
            ProductosService.baseUrl = 'Gestion/Productos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductosService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductosService = Gestion.ProductosService || (Gestion.ProductosService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var RegionesColumns = /** @class */ (function () {
            function RegionesColumns() {
            }
            RegionesColumns.columnsKey = 'Gestion.Regiones';
            return RegionesColumns;
        }());
        Gestion.RegionesColumns = RegionesColumns;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var RegionesForm = /** @class */ (function (_super) {
            __extends(RegionesForm, _super);
            function RegionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionesForm.init) {
                    RegionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RegionesForm, [
                        'Nombre', w0,
                        'Sigla', w0
                    ]);
                }
                return _this;
            }
            RegionesForm.formKey = 'Gestion.Regiones';
            return RegionesForm;
        }(Serenity.PrefixedContext));
        Gestion.RegionesForm = RegionesForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var RegionesRow;
        (function (RegionesRow) {
            RegionesRow.idProperty = 'Id';
            RegionesRow.nameProperty = 'Nombre';
            RegionesRow.localTextPrefix = 'Gestion.Regiones';
            RegionesRow.lookupKey = 'Gestion.Regiones';
            function getLookup() {
                return Q.getLookup('Gestion.Regiones');
            }
            RegionesRow.getLookup = getLookup;
            RegionesRow.deletePermission = 'Administration:General';
            RegionesRow.insertPermission = 'Administration:General';
            RegionesRow.readPermission = 'Administration:General';
            RegionesRow.updatePermission = 'Administration:General';
        })(RegionesRow = Gestion.RegionesRow || (Gestion.RegionesRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var RegionesService;
        (function (RegionesService) {
            RegionesService.baseUrl = 'Gestion/Regiones';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionesService = Gestion.RegionesService || (Gestion.RegionesService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TipoArriendoColumns = /** @class */ (function () {
            function TipoArriendoColumns() {
            }
            TipoArriendoColumns.columnsKey = 'Gestion.TipoArriendo';
            return TipoArriendoColumns;
        }());
        Gestion.TipoArriendoColumns = TipoArriendoColumns;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TipoArriendoForm = /** @class */ (function (_super) {
            __extends(TipoArriendoForm, _super);
            function TipoArriendoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TipoArriendoForm.init) {
                    TipoArriendoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.CheckLookupEditor;
                    var w2 = s.ImageUploadEditor;
                    Q.initFormType(TipoArriendoForm, [
                        'Tipo', w0,
                        'Codigo', w0,
                        'Detalles', w1,
                        'Foto', w2
                    ]);
                }
                return _this;
            }
            TipoArriendoForm.formKey = 'Gestion.TipoArriendo';
            return TipoArriendoForm;
        }(Serenity.PrefixedContext));
        Gestion.TipoArriendoForm = TipoArriendoForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TipoArriendoRow;
        (function (TipoArriendoRow) {
            TipoArriendoRow.idProperty = 'Id';
            TipoArriendoRow.nameProperty = 'Tipo';
            TipoArriendoRow.localTextPrefix = 'Gestion.TipoArriendo';
            TipoArriendoRow.lookupKey = 'Gestion.TipoArriendo';
            function getLookup() {
                return Q.getLookup('Gestion.TipoArriendo');
            }
            TipoArriendoRow.getLookup = getLookup;
            TipoArriendoRow.deletePermission = 'Administration:General';
            TipoArriendoRow.insertPermission = 'Administration:General';
            TipoArriendoRow.readPermission = '*';
            TipoArriendoRow.updatePermission = 'Administration:General';
        })(TipoArriendoRow = Gestion.TipoArriendoRow || (Gestion.TipoArriendoRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TipoArriendoService;
        (function (TipoArriendoService) {
            TipoArriendoService.baseUrl = 'Gestion/TipoArriendo';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TipoArriendoService[x] = function (r, s, o) {
                    return Q.serviceRequest(TipoArriendoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TipoArriendoService = Gestion.TipoArriendoService || (Gestion.TipoArriendoService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TiposAdicionalesColumns = /** @class */ (function () {
            function TiposAdicionalesColumns() {
            }
            TiposAdicionalesColumns.columnsKey = 'Gestion.TiposAdicionales';
            return TiposAdicionalesColumns;
        }());
        Gestion.TiposAdicionalesColumns = TiposAdicionalesColumns;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TiposAdicionalesForm = /** @class */ (function (_super) {
            __extends(TiposAdicionalesForm, _super);
            function TiposAdicionalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TiposAdicionalesForm.init) {
                    TiposAdicionalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(TiposAdicionalesForm, [
                        'Titulo', w0,
                        'Descripcion', w1,
                        'Orden', w2
                    ]);
                }
                return _this;
            }
            TiposAdicionalesForm.formKey = 'Gestion.TiposAdicionales';
            return TiposAdicionalesForm;
        }(Serenity.PrefixedContext));
        Gestion.TiposAdicionalesForm = TiposAdicionalesForm;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TiposAdicionalesRow;
        (function (TiposAdicionalesRow) {
            TiposAdicionalesRow.idProperty = 'Id';
            TiposAdicionalesRow.nameProperty = 'Titulo';
            TiposAdicionalesRow.localTextPrefix = 'Gestion.TiposAdicionales';
            TiposAdicionalesRow.lookupKey = 'Gestion.TiposAdicionales';
            function getLookup() {
                return Q.getLookup('Gestion.TiposAdicionales');
            }
            TiposAdicionalesRow.getLookup = getLookup;
            TiposAdicionalesRow.deletePermission = 'Administration:General';
            TiposAdicionalesRow.insertPermission = 'Administration:General';
            TiposAdicionalesRow.readPermission = '*';
            TiposAdicionalesRow.updatePermission = 'Administration:General';
        })(TiposAdicionalesRow = Gestion.TiposAdicionalesRow || (Gestion.TiposAdicionalesRow = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TiposAdicionalesService;
        (function (TiposAdicionalesService) {
            TiposAdicionalesService.baseUrl = 'Gestion/TiposAdicionales';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TiposAdicionalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TiposAdicionalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TiposAdicionalesService = Gestion.TiposAdicionalesService || (Gestion.TiposAdicionalesService = {}));
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var HistoriaColumns = /** @class */ (function () {
            function HistoriaColumns() {
            }
            HistoriaColumns.columnsKey = 'Sitio.Historia';
            return HistoriaColumns;
        }());
        Sitio.HistoriaColumns = HistoriaColumns;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var HistoriaForm = /** @class */ (function (_super) {
            __extends(HistoriaForm, _super);
            function HistoriaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HistoriaForm.init) {
                    HistoriaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlContentEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(HistoriaForm, [
                        'Titulo', w0,
                        'Body', w1,
                        'Orden', w2
                    ]);
                }
                return _this;
            }
            HistoriaForm.formKey = 'Sitio.Historia';
            return HistoriaForm;
        }(Serenity.PrefixedContext));
        Sitio.HistoriaForm = HistoriaForm;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var HistoriaRow;
        (function (HistoriaRow) {
            HistoriaRow.idProperty = 'Id';
            HistoriaRow.nameProperty = 'Titulo';
            HistoriaRow.localTextPrefix = 'Sitio.Historia';
            HistoriaRow.deletePermission = 'Administration:General';
            HistoriaRow.insertPermission = 'Administration:General';
            HistoriaRow.readPermission = '*';
            HistoriaRow.updatePermission = 'Administration:General';
        })(HistoriaRow = Sitio.HistoriaRow || (Sitio.HistoriaRow = {}));
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var HistoriaService;
        (function (HistoriaService) {
            HistoriaService.baseUrl = 'Sitio/Historia';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                HistoriaService[x] = function (r, s, o) {
                    return Q.serviceRequest(HistoriaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(HistoriaService = Sitio.HistoriaService || (Sitio.HistoriaService = {}));
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NosotrosColumns = /** @class */ (function () {
            function NosotrosColumns() {
            }
            NosotrosColumns.columnsKey = 'Sitio.Nosotros';
            return NosotrosColumns;
        }());
        Sitio.NosotrosColumns = NosotrosColumns;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NosotrosForm = /** @class */ (function (_super) {
            __extends(NosotrosForm, _super);
            function NosotrosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NosotrosForm.init) {
                    NosotrosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlContentEditor;
                    var w2 = s.ImageUploadEditor;
                    Q.initFormType(NosotrosForm, [
                        'Titulo', w0,
                        'Body', w1,
                        'Comtario', w1,
                        'Icono', w0,
                        'Foto', w2
                    ]);
                }
                return _this;
            }
            NosotrosForm.formKey = 'Sitio.Nosotros';
            return NosotrosForm;
        }(Serenity.PrefixedContext));
        Sitio.NosotrosForm = NosotrosForm;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NosotrosRow;
        (function (NosotrosRow) {
            NosotrosRow.idProperty = 'Id';
            NosotrosRow.nameProperty = 'Titulo';
            NosotrosRow.localTextPrefix = 'Sitio.Nosotros';
            NosotrosRow.deletePermission = 'Administration:General';
            NosotrosRow.insertPermission = 'Administration:General';
            NosotrosRow.readPermission = '*';
            NosotrosRow.updatePermission = 'Administration:General';
        })(NosotrosRow = Sitio.NosotrosRow || (Sitio.NosotrosRow = {}));
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NosotrosService;
        (function (NosotrosService) {
            NosotrosService.baseUrl = 'Sitio/Nosotros';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NosotrosService[x] = function (r, s, o) {
                    return Q.serviceRequest(NosotrosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NosotrosService = Sitio.NosotrosService || (Sitio.NosotrosService = {}));
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NuestrosClientesColumns = /** @class */ (function () {
            function NuestrosClientesColumns() {
            }
            NuestrosClientesColumns.columnsKey = 'Sitio.NuestrosClientes';
            return NuestrosClientesColumns;
        }());
        Sitio.NuestrosClientesColumns = NuestrosClientesColumns;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NuestrosClientesForm = /** @class */ (function (_super) {
            __extends(NuestrosClientesForm, _super);
            function NuestrosClientesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NuestrosClientesForm.init) {
                    NuestrosClientesForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(NuestrosClientesForm, [
                        'Logo', w0,
                        'Nombre', w1,
                        'Url', w1
                    ]);
                }
                return _this;
            }
            NuestrosClientesForm.formKey = 'Sitio.NuestrosClientes';
            return NuestrosClientesForm;
        }(Serenity.PrefixedContext));
        Sitio.NuestrosClientesForm = NuestrosClientesForm;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NuestrosClientesRow;
        (function (NuestrosClientesRow) {
            NuestrosClientesRow.idProperty = 'Id';
            NuestrosClientesRow.nameProperty = 'Nombre';
            NuestrosClientesRow.localTextPrefix = 'Sitio.NuestrosClientes';
            NuestrosClientesRow.deletePermission = 'Administration:General';
            NuestrosClientesRow.insertPermission = 'Administration:General';
            NuestrosClientesRow.readPermission = '*';
            NuestrosClientesRow.updatePermission = 'Administration:General';
        })(NuestrosClientesRow = Sitio.NuestrosClientesRow || (Sitio.NuestrosClientesRow = {}));
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NuestrosClientesService;
        (function (NuestrosClientesService) {
            NuestrosClientesService.baseUrl = 'Sitio/NuestrosClientes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NuestrosClientesService[x] = function (r, s, o) {
                    return Q.serviceRequest(NuestrosClientesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NuestrosClientesService = Sitio.NuestrosClientesService || (Sitio.NuestrosClientesService = {}));
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var SliderColumns = /** @class */ (function () {
            function SliderColumns() {
            }
            SliderColumns.columnsKey = 'Sitio.Slider';
            return SliderColumns;
        }());
        Sitio.SliderColumns = SliderColumns;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var SliderForm = /** @class */ (function (_super) {
            __extends(SliderForm, _super);
            function SliderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SliderForm.init) {
                    SliderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlContentEditor;
                    var w2 = s.ImageUploadEditor;
                    Q.initFormType(SliderForm, [
                        'Titulo', w0,
                        'SubTitulo', w1,
                        'Foto', w2
                    ]);
                }
                return _this;
            }
            SliderForm.formKey = 'Sitio.Slider';
            return SliderForm;
        }(Serenity.PrefixedContext));
        Sitio.SliderForm = SliderForm;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var SliderRow;
        (function (SliderRow) {
            SliderRow.idProperty = 'Id';
            SliderRow.nameProperty = 'Titulo';
            SliderRow.localTextPrefix = 'Sitio.Slider';
            SliderRow.deletePermission = 'Administration:General';
            SliderRow.insertPermission = 'Administration:General';
            SliderRow.readPermission = '*';
            SliderRow.updatePermission = 'Administration:General';
        })(SliderRow = Sitio.SliderRow || (Sitio.SliderRow = {}));
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var SliderService;
        (function (SliderService) {
            SliderService.baseUrl = 'Sitio/Slider';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SliderService[x] = function (r, s, o) {
                    return Q.serviceRequest(SliderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SliderService = Sitio.SliderService || (Sitio.SliderService = {}));
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Texts;
    (function (Texts) {
        Rental_SPA['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Gestion: { ArriendoWizard: { Ciudad: 1, ConGarantia: 1, DireccionObra: 1, FechaDevolucion: 1, FechaInicio: 1, Garantia: 1, Id: 1, IdCliente: 1, IdProducto: 1, Iva: 1, Neto: 1, Region: 1, Total: 1 }, Arriendos: { Ciudad: 1, ConGarantia: 1, DireccionObra: 1, FechaDevolucion: 1, FechaInicio: 1, Garantia: 1, Id: 1, IdCliente: 1, IdProducto: 1, Iva: 1, Neto: 1, Region: 1, Total: 1 }, Atributos: { Codigo: 1, Descripcion: 1, Id: 1, Importe: 1, Porciento: 1 }, Clientes: { Ciudad: 1, Direccion: 1, EMail: 1, Id: 1, NombreFantasia: 1, RazonSocial: 1, Rut: 1, Telefono: 1 }, ProductoDetalle: { Id: 1, IdAtributo: 1, IdProducto: 1, IdTipoAdicional: 1, IdTipoAdicionalTitulo: 1, Valor: 1 }, Productos: { Activo: 1, Cantidad: 1, Descripcion: 1, Foto: 1, Garantia: 1, Id: 1, IdTipoArriendo: 1, IdTipoArriendoTipo: 1, Iva: 1, Nombre: 1, Precio: 1, ProductosDet: 1 }, Regiones: { Id: 1, Nombre: 1, Sigla: 1 }, TipoArriendo: { Codigo: 1, Detalles: 1, Foto: 1, Id: 1, Tipo: 1 }, TiposAdicionales: { Descripcion: 1, Id: 1, MostrarImporte: 1, MostrarPorcentaje: 1, Orden: 1, Titulo: 1 } }, Sitio: { Historia: { Body: 1, Id: 1, Orden: 1, Titulo: 1 }, Nosotros: { Body: 1, Comtario: 1, Foto: 1, Icono: 1, Id: 1, Titulo: 1 }, NuestrosClientes: { Id: 1, Logo: 1, Nombre: 1, Url: 1 }, Slider: { Foto: 1, Id: 1, SubTitulo: 1, Titulo: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Sitio: { Address: 1, Contact: 1, Email: 1, OurClients: 1, PhoneContact: 1, Services: 1 }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Rental_SPA.Texts || (Rental_SPA.Texts = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Rental_SPA.Authorization || (Rental_SPA.Authorization = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Rental_SPA.Administration || (Rental_SPA.Administration = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Rental_SPA.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Rental_SPA.LanguageList || (Rental_SPA.LanguageList = {}));
})(Rental_SPA || (Rental_SPA = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Rental_SPA;
(function (Rental_SPA) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Rental_SPA');
        Serenity.EntityDialog.defaultLanguageList = Rental_SPA.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Rental_SPA.ScriptInitialization || (Rental_SPA.ScriptInitialization = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: false,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Rental_SPA.BasicProgressDialog = BasicProgressDialog;
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Rental_SPA.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Rental_SPA.DialogUtils || (Rental_SPA.DialogUtils = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Rental_SPA.StaticTextBlock = StaticTextBlock;
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Serenity;
(function (Serenity) {
    var SingleLineTextFormatter = /** @class */ (function () {
        function SingleLineTextFormatter() {
        }
        SingleLineTextFormatter_1 = SingleLineTextFormatter;
        SingleLineTextFormatter.prototype.format = function (ctx) {
            return SingleLineTextFormatter_1.formatValue(ctx.value);
        };
        SingleLineTextFormatter.formatValue = function (value) {
            var text = $('<div/>').html(value || '').text();
            return Q.toSingleLine(text);
        };
        var SingleLineTextFormatter_1;
        SingleLineTextFormatter = SingleLineTextFormatter_1 = __decorate([
            Serenity.Decorators.registerFormatter('Serenity.SingleLineTextFormatter')
        ], SingleLineTextFormatter);
        return SingleLineTextFormatter;
    }());
    Serenity.SingleLineTextFormatter = SingleLineTextFormatter;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    /**
     * A dialog/panel base class that easily generates a wizard UI from tabs in a form definition (e.g. Form.cs)
     */
    var WizardDialog = /** @class */ (function (_super) {
        __extends(WizardDialog, _super);
        /**
         * Creates a new wizard dialog
         * @param opt options, might be used by derived classes
         */
        function WizardDialog(opt) {
            var _this = _super.call(this, opt) || this;
            _this._step = 1;
            _this.element.children().addClass("wizard-horz");
            _this.wizardGrid = new Serenity.PropertyGrid(_this.byId("WizardGrid"), _this.getPropertyGridOptions());
            _this.wizardGrid.element.children(".property-tabs").children('li').each(function (i, li) {
                var $li = $(li);
                var h = $li.children('a').html();
                $li.html('').attr('data-step', i + 1);
                $('<span class="badge"/>').text(i + 1).appendTo($li);
                $('<span class="text"/>').html(h).appendTo($li);
                $('<span class="chevron"/>').appendTo($li);
            });
            _this.byId("CancelButton").click(function (e) { return _this.confirmCancel(e); });
            _this.byId("BackButton").click(function () {
                _this.moveToStep(_this.step - 1);
            });
            _this.byId("NextButton").click(function () {
                if (!_this.validateForm())
                    return false;
                _this.moveToStep(_this.step + 1);
            });
            _this.wizardGrid.element.children(".property-tabs")
                .on("click", "li", function (e) {
                var step = $(e.currentTarget).data('step');
                if (step > _this.step)
                    return;
                _this.moveToStep(step);
            });
            _this.wizardGrid.load(_this.getInitialEntity());
            _this.element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e))
                    return;
                _this.confirmCancel(e);
            });
            return _this;
        }
        /**
         * gets property grid options
         */
        WizardDialog.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                mode: 1 /* insert */,
                items: this.getPropertyItems(),
                localTextPrefix: this.getLocalTextPrefix(),
                useCategories: true
            };
        };
        /**
         * gets form key to use to load property items / tabs
         */
        WizardDialog.prototype.getFormKey = function () {
            return null;
        };
        /**
         * gets local text prefix for labels
         */
        WizardDialog.prototype.getLocalTextPrefix = function () {
            return "";
        };
        /**
         * gets list of property items to shown on form, uses form key to load items by default
         */
        WizardDialog.prototype.getPropertyItems = function () {
            var formKey = this.getFormKey();
            if (formKey)
                return Q.getForm(formKey);
            return [];
        };
        /**
         * gets initial entity to load onto form, override these to customize initial form values
         */
        WizardDialog.prototype.getInitialEntity = function () {
            return {};
        };
        Object.defineProperty(WizardDialog.prototype, "maxSteps", {
            // gets maximum number of steps from
            get: function () {
                return this.wizardGrid.element
                    .children(".property-tabs")
                    .children("li")
                    .length;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * moves to a step, by calling one of next, back or finish methods based on target step
         * @param toStep the target step to move to
         */
        WizardDialog.prototype.moveToStep = function (toStep) {
            if (toStep == this.step || toStep < 1 || toStep > this.maxSteps + 1)
                return;
            if (toStep >= this.maxSteps + 1) {
                this.finish();
                return;
            }
            (toStep < this.step ? this.back : this.next).call(this, toStep);
        };
        Object.defineProperty(WizardDialog.prototype, "step", {
            // gets current step
            get: function () {
                return this._step;
            },
            // sets current step directly, skipping any validation
            set: function (value) {
                this.getStepLink(this._step).removeClass("in active");
                this.getStepPanel(this._step).removeClass("in active");
                this.getStepLink(value).addClass("in active");
                this.getStepPanel(value).addClass("in active")
                    .find(".require-layout").triggerHandler("layout");
                var s;
                for (s = value; s <= this._step; s++)
                    this.getStepLink(s).removeClass("complete").find("span.badge").removeClass("badge-success");
                for (s = this._step; s < value; s++)
                    this.getStepLink(s).addClass("complete").find("span.badge").addClass("badge-success");
                this._step = value;
                this.byId("BackButton").toggleClass('disabled', this._step <= 1);
                this.byId("NextButton").children('.txt').text(this._step == this.maxSteps ? "Finish" : "Next");
            },
            enumerable: false,
            configurable: true
        });
        /**
         * called to reset the form, and go back to first step
         */
        WizardDialog.prototype.reset = function () {
            this.step = 1;
            this.wizardGrid.load(this.getInitialEntity());
        };
        /**
         * is called when user clicks the Finish button (next button on last step)
         */
        WizardDialog.prototype.finish = function () {
            this.dialogClose();
        };
        /**
         * next method is called when user tries to go forward
         * @param toStep the step user is trying to move to, usually one step ahead
         */
        WizardDialog.prototype.next = function (toStep) {
            this.step = toStep;
        };
        /**
         * back method is called when user tries to go backward
         * @param toStep the step user is trying to move to, usually one step back but can also be multiple
         */
        WizardDialog.prototype.back = function (toStep) {
            this.step = toStep;
        };
        WizardDialog.prototype.getStepLink = function (step) {
            return this.wizardGrid.element
                .children(".property-tabs")
                .children("li").eq(step - 1);
        };
        WizardDialog.prototype.getStepPanel = function (step) {
            return this.wizardGrid.element
                .children(".property-panes")
                .children().eq(step - 1);
        };
        /**
         * make sure derived classes use WizardDialog template,
         * if they don't define one of their own
         */
        WizardDialog.prototype.getFallbackTemplate = function () {
            return Q.getTemplate("Common.WizardDialog");
        };
        /**
         * gets cancel confirmation message, return null to disable confirmation
         */
        WizardDialog.prototype.getCancelMessage = function () {
            return "¿Estás seguro de que deseas cancelar este asistente?";
        };
        /**
         * confirms when user tries to cancel or close the wizard
         * @param e
         */
        WizardDialog.prototype.confirmCancel = function (e) {
            var _this = this;
            var cancelMessage = this.getCancelMessage();
            if (!cancelMessage) {
                e.preventDefault();
                this.dialogClose();
                return;
            }
            e.preventDefault();
            Q.confirm(cancelMessage, function () {
                _this.dialogClose();
            });
        };
        /** gets save entity from form, optionally from a limited list of steps (tabs)
         * @param steps the list of steps to read data from, pass null to get all
         */
        WizardDialog.prototype.getSaveEntity = function (steps) {
            var entity = {};
            this.wizardGrid.save(entity);
            if (steps != null) {
                var maxSteps = this.maxSteps;
                for (var i = 1; i <= maxSteps; i++) {
                    if (steps.indexOf(i) >= 0)
                        continue;
                    var panel = this.getStepPanel(i);
                    panel.find('.field').each(function (z, el) {
                        var field = $(el).attr('class').split(' ')[1];
                        if (field)
                            delete entity[field];
                    });
                }
            }
            return entity;
        };
        Object.defineProperty(WizardDialog.prototype, "compactSteps", {
            // gets value of compact steps option
            get: function () {
                return this.element.children().hasClass("compact-steps");
            },
            // sets value of compact steps option, when it is on, inactive step titles only show
            // numbers and gets visible on hover. this is better there are many steps to fit
            set: function (value) {
                this.element.children().toggleClass("compact-steps", value);
            },
            enumerable: false,
            configurable: true
        });
        return WizardDialog;
    }(Serenity.TemplatedDialog));
    Serenity.WizardDialog = WizardDialog;
})(Serenity || (Serenity = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Rental_SPA.Common || (Rental_SPA.Common = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendosDialog = /** @class */ (function (_super) {
            __extends(ArriendosDialog, _super);
            function ArriendosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Gestion.ArriendosForm(_this.idPrefix);
                return _this;
            }
            ArriendosDialog.prototype.getFormKey = function () { return Gestion.ArriendosForm.formKey; };
            ArriendosDialog.prototype.getIdProperty = function () { return Gestion.ArriendosRow.idProperty; };
            ArriendosDialog.prototype.getLocalTextPrefix = function () { return Gestion.ArriendosRow.localTextPrefix; };
            ArriendosDialog.prototype.getNameProperty = function () { return Gestion.ArriendosRow.nameProperty; };
            ArriendosDialog.prototype.getService = function () { return Gestion.ArriendosService.baseUrl; };
            ArriendosDialog.prototype.getDeletePermission = function () { return Gestion.ArriendosRow.deletePermission; };
            ArriendosDialog.prototype.getInsertPermission = function () { return Gestion.ArriendosRow.insertPermission; };
            ArriendosDialog.prototype.getUpdatePermission = function () { return Gestion.ArriendosRow.updatePermission; };
            ArriendosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ArriendosDialog);
            return ArriendosDialog;
        }(Serenity.EntityDialog));
        Gestion.ArriendosDialog = ArriendosDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendosGrid = /** @class */ (function (_super) {
            __extends(ArriendosGrid, _super);
            function ArriendosGrid(container) {
                return _super.call(this, container) || this;
            }
            ArriendosGrid.prototype.getColumnsKey = function () { return 'Gestion.Arriendos'; };
            ArriendosGrid.prototype.getDialogType = function () { return Gestion.ArriendosDialog; };
            ArriendosGrid.prototype.getIdProperty = function () { return Gestion.ArriendosRow.idProperty; };
            ArriendosGrid.prototype.getInsertPermission = function () { return Gestion.ArriendosRow.insertPermission; };
            ArriendosGrid.prototype.getLocalTextPrefix = function () { return Gestion.ArriendosRow.localTextPrefix; };
            ArriendosGrid.prototype.getService = function () { return Gestion.ArriendosService.baseUrl; };
            ArriendosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ArriendosGrid);
            return ArriendosGrid;
        }(Serenity.EntityGrid));
        Gestion.ArriendosGrid = ArriendosGrid;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var AtributosDialog = /** @class */ (function (_super) {
            __extends(AtributosDialog, _super);
            function AtributosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Gestion.AtributosForm(_this.idPrefix);
                return _this;
            }
            AtributosDialog.prototype.getFormKey = function () { return Gestion.AtributosForm.formKey; };
            AtributosDialog.prototype.getIdProperty = function () { return Gestion.AtributosRow.idProperty; };
            AtributosDialog.prototype.getLocalTextPrefix = function () { return Gestion.AtributosRow.localTextPrefix; };
            AtributosDialog.prototype.getNameProperty = function () { return Gestion.AtributosRow.nameProperty; };
            AtributosDialog.prototype.getService = function () { return Gestion.AtributosService.baseUrl; };
            AtributosDialog.prototype.getDeletePermission = function () { return Gestion.AtributosRow.deletePermission; };
            AtributosDialog.prototype.getInsertPermission = function () { return Gestion.AtributosRow.insertPermission; };
            AtributosDialog.prototype.getUpdatePermission = function () { return Gestion.AtributosRow.updatePermission; };
            AtributosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AtributosDialog);
            return AtributosDialog;
        }(Serenity.EntityDialog));
        Gestion.AtributosDialog = AtributosDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var AtributosGrid = /** @class */ (function (_super) {
            __extends(AtributosGrid, _super);
            function AtributosGrid(container) {
                return _super.call(this, container) || this;
            }
            AtributosGrid.prototype.getColumnsKey = function () { return 'Gestion.Atributos'; };
            AtributosGrid.prototype.getDialogType = function () { return Gestion.AtributosDialog; };
            AtributosGrid.prototype.getIdProperty = function () { return Gestion.AtributosRow.idProperty; };
            AtributosGrid.prototype.getInsertPermission = function () { return Gestion.AtributosRow.insertPermission; };
            AtributosGrid.prototype.getLocalTextPrefix = function () { return Gestion.AtributosRow.localTextPrefix; };
            AtributosGrid.prototype.getService = function () { return Gestion.AtributosService.baseUrl; };
            AtributosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AtributosGrid);
            return AtributosGrid;
        }(Serenity.EntityGrid));
        Gestion.AtributosGrid = AtributosGrid;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ClientesDialog = /** @class */ (function (_super) {
            __extends(ClientesDialog, _super);
            function ClientesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Gestion.ClientesForm(_this.idPrefix);
                return _this;
            }
            ClientesDialog.prototype.getFormKey = function () { return Gestion.ClientesForm.formKey; };
            ClientesDialog.prototype.getIdProperty = function () { return Gestion.ClientesRow.idProperty; };
            ClientesDialog.prototype.getLocalTextPrefix = function () { return Gestion.ClientesRow.localTextPrefix; };
            ClientesDialog.prototype.getNameProperty = function () { return Gestion.ClientesRow.nameProperty; };
            ClientesDialog.prototype.getService = function () { return Gestion.ClientesService.baseUrl; };
            ClientesDialog.prototype.getDeletePermission = function () { return Gestion.ClientesRow.deletePermission; };
            ClientesDialog.prototype.getInsertPermission = function () { return Gestion.ClientesRow.insertPermission; };
            ClientesDialog.prototype.getUpdatePermission = function () { return Gestion.ClientesRow.updatePermission; };
            ClientesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ClientesDialog);
            return ClientesDialog;
        }(Serenity.EntityDialog));
        Gestion.ClientesDialog = ClientesDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ClientesGrid = /** @class */ (function (_super) {
            __extends(ClientesGrid, _super);
            function ClientesGrid(container) {
                return _super.call(this, container) || this;
            }
            ClientesGrid.prototype.getColumnsKey = function () { return 'Gestion.Clientes'; };
            ClientesGrid.prototype.getDialogType = function () { return Gestion.ClientesDialog; };
            ClientesGrid.prototype.getIdProperty = function () { return Gestion.ClientesRow.idProperty; };
            ClientesGrid.prototype.getInsertPermission = function () { return Gestion.ClientesRow.insertPermission; };
            ClientesGrid.prototype.getLocalTextPrefix = function () { return Gestion.ClientesRow.localTextPrefix; };
            ClientesGrid.prototype.getService = function () { return Gestion.ClientesService.baseUrl; };
            ClientesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ClientesGrid);
            return ClientesGrid;
        }(Serenity.EntityGrid));
        Gestion.ClientesGrid = ClientesGrid;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductoDetalleDialog = /** @class */ (function (_super) {
            __extends(ProductoDetalleDialog, _super);
            function ProductoDetalleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Gestion.ProductoDetalleForm(_this.idPrefix);
                return _this;
            }
            ProductoDetalleDialog.prototype.getFormKey = function () { return Gestion.ProductoDetalleForm.formKey; };
            ProductoDetalleDialog.prototype.getIdProperty = function () { return Gestion.ProductoDetalleRow.idProperty; };
            ProductoDetalleDialog.prototype.getLocalTextPrefix = function () { return Gestion.ProductoDetalleRow.localTextPrefix; };
            ProductoDetalleDialog.prototype.getService = function () { return Gestion.ProductoDetalleService.baseUrl; };
            ProductoDetalleDialog.prototype.getDeletePermission = function () { return Gestion.ProductoDetalleRow.deletePermission; };
            ProductoDetalleDialog.prototype.getInsertPermission = function () { return Gestion.ProductoDetalleRow.insertPermission; };
            ProductoDetalleDialog.prototype.getUpdatePermission = function () { return Gestion.ProductoDetalleRow.updatePermission; };
            ProductoDetalleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductoDetalleDialog);
            return ProductoDetalleDialog;
        }(Serenity.EntityDialog));
        Gestion.ProductoDetalleDialog = ProductoDetalleDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductoDetalleGrid = /** @class */ (function (_super) {
            __extends(ProductoDetalleGrid, _super);
            function ProductoDetalleGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductoDetalleGrid.prototype.getColumnsKey = function () { return 'Gestion.ProductoDetalle'; };
            ProductoDetalleGrid.prototype.getDialogType = function () { return Gestion.ProductoDetalleDialog; };
            ProductoDetalleGrid.prototype.getIdProperty = function () { return Gestion.ProductoDetalleRow.idProperty; };
            ProductoDetalleGrid.prototype.getInsertPermission = function () { return Gestion.ProductoDetalleRow.insertPermission; };
            ProductoDetalleGrid.prototype.getLocalTextPrefix = function () { return Gestion.ProductoDetalleRow.localTextPrefix; };
            ProductoDetalleGrid.prototype.getService = function () { return Gestion.ProductoDetalleService.baseUrl; };
            ProductoDetalleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductoDetalleGrid);
            return ProductoDetalleGrid;
        }(Serenity.EntityGrid));
        Gestion.ProductoDetalleGrid = ProductoDetalleGrid;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductosCard = /** @class */ (function (_super) {
            __extends(ProductosCard, _super);
            function ProductosCard() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProductosCard.prototype.render = function () {
                var formatter = new Intl.NumberFormat('en-ES', {
                    style: 'currency',
                    currency: 'CLP',
                    minimumFractionDigits: 0
                });
                return (React.createElement(React.Fragment, null, this.props.Items.map(function (item, i) {
                    return React.createElement(React.Fragment, null,
                        " ",
                        React.createElement("div", { key: i, className: "col-md-4" },
                            React.createElement("a", { href: "/ProductDetail/" + item.Id },
                                React.createElement("div", { className: "profile-card-6" },
                                    React.createElement("img", { src: "/upload/" + item.Foto, className: "img img-responsive", height: "400" }),
                                    React.createElement("div", { className: "profile-name" }, item.Nombre),
                                    React.createElement("div", { className: "profile-overview" },
                                        React.createElement("div", { className: "profile-overview" },
                                            React.createElement("div", { className: "row text-center justify-content-center" },
                                                React.createElement("div", { className: "col-xs-4 m-2" },
                                                    React.createElement("h4", null, item.Cantidad),
                                                    React.createElement("p", null, "Stock")),
                                                React.createElement("div", { className: "col-xs-4 m-2" },
                                                    React.createElement("h4", null, formatter.format(item.Precio).replace("CLP", "$").replace(",", ".")),
                                                    React.createElement("p", null, "Arriendo Diario")),
                                                React.createElement("div", { className: "col-xs-4 m-2" },
                                                    React.createElement("h4", null, formatter.format(item.Garantia).replace("CLP", "$").replace(",", ".")),
                                                    React.createElement("p", null, "Garant\u00EDa")))))))));
                })));
            };
            return ProductosCard;
        }(React.Component));
        Gestion.ProductosCard = ProductosCard;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductosDetEditorCard = /** @class */ (function (_super) {
            __extends(ProductosDetEditorCard, _super);
            function ProductosDetEditorCard(div) {
                var _this = _super.call(this, div) || this;
                _this.itemList = _this.byId('ItemList');
                return _this;
            }
            Object.defineProperty(ProductosDetEditorCard.prototype, "IdTipoArriendo", {
                set: function (value) {
                    this._IdTipoArriendo = value;
                    this.updateContent();
                },
                enumerable: false,
                configurable: true
            });
            ProductosDetEditorCard.prototype.getTemplate = function () {
                return "<div class='col-md-12' id='~_ItemList'></div>";
            };
            // https://github.com/volkanceylan/Serenity/issues/3140
            ProductosDetEditorCard.prototype.updateContent = function () {
                this.rowItems = [];
                this.itemList.children().remove();
                if (this.items) {
                    var index = 0;
                    var tiposAdicionales = Rental_SPA.Gestion.TiposAdicionalesRow.getLookup().items.sort(function (x, y) { return Q.turkishLocaleCompare(x.Orden.toString(), y.Orden.toString()); });
                    ;
                    // let adicionales = VDT.Nomencladores.AdicionalesRow.getLookup().items;
                    var tiposAdicionalesParaTipoArticulo = [];
                    if (this._IdTipoArriendo) {
                        var tipoArticuloDetalles = Rental_SPA.Gestion.TipoArriendoRow.getLookup().itemById[this._IdTipoArriendo.toString()].Detalles;
                        if (!Q.isEmptyOrNull(tipoArticuloDetalles)) {
                            tiposAdicionalesParaTipoArticulo = tipoArticuloDetalles.split(',').map(function (x) { return Q.parseInteger(x); });
                        }
                    }
                    var _loop_1 = function () {
                        var tipoAdicional = tiposAdicionales[t1];
                        // Si no esta dentro de la lista, no lo muestro.
                        if (!tiposAdicionalesParaTipoArticulo.some(function (x) { return x == tipoAdicional.Id; })) {
                            return "continue";
                        }
                        // Esta agregado?
                        var currentItem = Q.tryFirst(this_1.items, function (x) { return x.IdTipoAdicional == tipoAdicional.Id; }) || {};
                        divRow = $("<div class=\"row\" idTipoAdicional=\"" + tipoAdicional.Id + "\"/>");
                        div1 = $('<div class="col-md-2 field"/>');
                        div2 = $('<div class="col-md-4 field"/>');
                        div3 = $('<div class="col-md-2 field"/>');
                        div4 = $('<div class="col-md-4 field"/>');
                        // div1
                        $('<label class="caption" />').text(tipoAdicional.Titulo).appendTo(div1);
                        // div2                    
                        var inputId2 = this_1.itemList.uniqueId()[0].id + '_IdAdicional_' + tipoAdicional.Id;
                        $('<input/>').attr('type', 'text').attr('name', 'IdAdicional').attr('id', inputId2).attr('style', 'width:400px;').appendTo(div2);
                        // div3                    
                        //let inputId3 = this.itemList.uniqueId()[0].id + '_Porciento_' + tipoAdicional.Id;
                        //if (tipoAdicional.MostrarPorcentaje) {
                        //    $('<label class="caption" for="' + inputId3 + '"/>').text('%').appendTo(div3);
                        //}
                        //$('<input/>').attr('type', 'text').attr('name', 'Porciento').attr('id', inputId3).appendTo(div3);
                        //$('<div class="vx" />').appendTo(div3);
                        // div4
                        //let inputId4 = this.itemList.uniqueId()[0].id + '_Importe_' + tipoAdicional.Id;
                        //if (tipoAdicional.MostrarImporte) {
                        //    $('<label class="caption" for="' + inputId4 + '"/>').text('$').appendTo(div4);
                        //}
                        //$('<input/>').attr('type', 'text').attr('name', 'Importe').attr('id', inputId4).appendTo(div4);
                        //$('<div class="vx" />').appendTo(div4);
                        div1.appendTo(divRow);
                        div2.appendTo(divRow);
                        div3.appendTo(divRow);
                        div4.appendTo(divRow);
                        divRow.appendTo(this_1.itemList);
                        index++;
                        var textbox = new Serenity.StringEditor($('#' + inputId2));
                        textbox.value = currentItem.Valor ? currentItem.Valor.toString() : null;
                        //textbox.change(e => this.onChangeCombo(e));
                        //let input1 = new Serenity.DecimalEditor($(`#${inputId3}`), { decimals: 2, padDecimals: 2 });
                        //Serenity.EditorUtils.setReadonly($(`#${inputId3}`), !currentItem.IdAtributo);
                        //input1.value = currentItem. || 0;
                        //input1.change(e => this.onChangeInput(e));
                        //if (!tipoAdicional.MostrarPorciento) {
                        //    input1.element.hide();
                        //}
                        //let input2 = new Serenity.DecimalEditor($('#' + inputId4), { decimals: 2, padDecimals: 2 });
                        //Serenity.EditorUtils.setReadonly($(`#${inputId4}`), !currentItem.IdAdicional);
                        //input2.value = currentItem.Importe || 0;
                        //input2.change(e => this.onChangeInput(e));
                        //if (!tipoAdicional.MostrarImporte) {
                        //    input2.element.hide();
                        //}
                        this_1.rowItems.push({
                            IdTipoAdicional: tipoAdicional.Id,
                            Valor: textbox
                        });
                    };
                    var this_1 = this, divRow, div1, div2, div3, div4;
                    for (var t1 = 0; t1 < tiposAdicionales.length; t1++) {
                        _loop_1();
                    }
                }
                if (!this._IdTipoArriendo || !Rental_SPA.Gestion.TipoArriendoRow.getLookup().itemById[this._IdTipoArriendo.toString()].Detalles) {
                    this.element.parent().hide();
                }
                else {
                    this.element.parent().show();
                }
            };
            Object.defineProperty(ProductosDetEditorCard.prototype, "value", {
                get: function () {
                    var _this = this;
                    this.rowItems.forEach(function (x) {
                        // Existe en this.items?
                        if (_this.items.some(function (y) { return y.IdTipoAdicional == x.IdTipoAdicional; })) {
                            var currentItem = Q.tryFirst(_this.items, function (y) { return y.IdTipoAdicional == x.IdTipoAdicional; });
                            // Tengo que borrarlo
                            if (Q.isEmptyOrNull(x.IdTipoAdicional.toString())) {
                                _this.items.splice(Q.indexOf(_this.items, function (y) { return y.IdTipoAdicional == x.IdTipoAdicional; }), 1);
                            }
                            else {
                                currentItem.Valor = x.Valor.value;
                                currentItem.IdTipoAdicional = x.IdTipoAdicional;
                            }
                        }
                        else if (x.IdTipoAdicional > 0) {
                            _this.items.push({
                                Valor: x.Valor.value,
                                IdTipoAdicional: x.IdTipoAdicional
                            });
                        }
                    });
                    return this.items.sort(function (obj1, obj2) {
                        return Rental_SPA.Gestion.TiposAdicionalesRow.getLookup().itemById[obj1.IdTipoAdicional].Orden - Rental_SPA.Gestion.TiposAdicionalesRow.getLookup().itemById[obj2.IdTipoAdicional].Orden;
                    });
                },
                set: function (value) {
                    this.items = value || [];
                    this.updateContent();
                },
                enumerable: false,
                configurable: true
            });
            ProductosDetEditorCard.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            ProductosDetEditorCard.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            ProductosDetEditorCard = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], ProductosDetEditorCard);
            return ProductosDetEditorCard;
        }(Serenity.TemplatedWidget));
        Gestion.ProductosDetEditorCard = ProductosDetEditorCard;
        var RowItem = /** @class */ (function () {
            function RowItem() {
            }
            return RowItem;
        }());
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductoDetalle = /** @class */ (function (_super) {
            __extends(ProductoDetalle, _super);
            function ProductoDetalle() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            //private detalles: IdDetalle[];
            ProductoDetalle.prototype.render = function () {
                var formatter = new Intl.NumberFormat('en-ES', {
                    style: 'currency',
                    currency: 'CLP',
                    minimumFractionDigits: 0
                });
                return (React.createElement(React.Fragment, null,
                    React.createElement("section", { className: "breadcrumbs-custom-inset" },
                        React.createElement("div", { className: "breadcrumbs-custom context-dark bg-overlay-60" },
                            React.createElement("div", { className: "container" },
                                React.createElement("h2", { className: "breadcrumbs-custom-title" }, this.props.Producto.Nombre),
                                React.createElement("ul", { className: "breadcrumbs-custom-path" },
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "/" }, "Home")),
                                    React.createElement("li", { className: "active" }, this.props.Producto.Nombre))),
                            React.createElement("div", { className: "box-position", style: { backgroundImage: 'url("/upload/' + this.props.Producto.Foto + '")' } }))),
                    React.createElement("section", { className: "section section-sm section-first bg-default text-md-left" },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "row row-50 justify-content-center align-items-xl-center" },
                                React.createElement("div", { className: "col-md-10 col-lg-12 col-xl-6" },
                                    React.createElement("h1", { className: "text-spacing-25 font-weight-normal title-opacity-9" }),
                                    React.createElement("div", { className: "tabs-custom tabs-horizontal tabs-line", id: "tabs-4" },
                                        React.createElement("div", { className: "tab-content" },
                                            React.createElement("div", { className: "tab-pane fade show active", id: "tabs-4-1" },
                                                React.createElement("h5", { dangerouslySetInnerHTML: { __html: this.props.Producto.Descripcion } })))))),
                            React.createElement("div", { className: "row justify-content-center", style: { marginTop: '4rem' } },
                                React.createElement("h3", { className: "text-center" }, " Atributos del Producto"),
                                React.createElement("div", { className: "col-lg-12" },
                                    React.createElement("div", { className: "col-xs-6 mt-5" },
                                        React.createElement("table", { className: "table table-bordered" },
                                            React.createElement("thead", null),
                                            React.createElement("tbody", null, this.props.Producto.ProductosDet.map(function (item, i) {
                                                return React.createElement("tr", { key: i, className: "text-center" },
                                                    React.createElement("td", null, item.IdTipoAdicionalTitulo),
                                                    React.createElement("td", null, item.Valor));
                                            })))))),
                            React.createElement("div", { className: "row mt-5 text-center" },
                                React.createElement("div", { className: "col-sm" },
                                    React.createElement("h3", null, this.props.Producto.Cantidad),
                                    React.createElement("p", null, "Cantidad")),
                                React.createElement("div", { className: "col-sm" },
                                    React.createElement("h3", null, formatter.format(this.props.Producto.Precio).replace("CLP", "$").replace(",", ".")),
                                    React.createElement("p", null, "Valor Arriendo")),
                                React.createElement("div", { className: "col-sm" },
                                    React.createElement("h3", null, formatter.format(this.props.Producto.Garantia).replace("CLP", "$").replace(",", ".")),
                                    React.createElement("p", null, "Garant\u00EDa"))),
                            React.createElement("div", { className: "col-lg-12 text-center mt-5" },
                                React.createElement("button", { className: "btn btn-success " }, " Arrendar..."))))));
            };
            return ProductoDetalle;
        }(React.Component));
        Gestion.ProductoDetalle = ProductoDetalle;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductosDialog = /** @class */ (function (_super) {
            __extends(ProductosDialog, _super);
            function ProductosDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.form = new Gestion.ProductosForm(_this.idPrefix);
                _this.form.IdTipoArriendo.change(function (e) {
                    _this.form.ProductosDet.IdTipoArriendo = Q.parseInteger(_this.form.IdTipoArriendo.value);
                });
                _this.form.IdTipoArriendo.changeSelect2(function (e) {
                    _this.form.ProductosDet.value = [];
                });
                return _this;
            }
            ProductosDialog.prototype.getFormKey = function () { return Gestion.ProductosForm.formKey; };
            ProductosDialog.prototype.getIdProperty = function () { return Gestion.ProductosRow.idProperty; };
            ProductosDialog.prototype.getLocalTextPrefix = function () { return Gestion.ProductosRow.localTextPrefix; };
            ProductosDialog.prototype.getNameProperty = function () { return Gestion.ProductosRow.nameProperty; };
            ProductosDialog.prototype.getService = function () { return Gestion.ProductosService.baseUrl; };
            ProductosDialog.prototype.getDeletePermission = function () { return Gestion.ProductosRow.deletePermission; };
            ProductosDialog.prototype.getInsertPermission = function () { return Gestion.ProductosRow.insertPermission; };
            ProductosDialog.prototype.getUpdatePermission = function () { return Gestion.ProductosRow.updatePermission; };
            ProductosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductosDialog);
            return ProductosDialog;
        }(Serenity.EntityDialog));
        Gestion.ProductosDialog = ProductosDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ProductosGrid = /** @class */ (function (_super) {
            __extends(ProductosGrid, _super);
            function ProductosGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductosGrid.prototype.getColumnsKey = function () { return 'Gestion.Productos'; };
            ProductosGrid.prototype.getDialogType = function () { return Gestion.ProductosDialog; };
            ProductosGrid.prototype.getIdProperty = function () { return Gestion.ProductosRow.idProperty; };
            ProductosGrid.prototype.getInsertPermission = function () { return Gestion.ProductosRow.insertPermission; };
            ProductosGrid.prototype.getLocalTextPrefix = function () { return Gestion.ProductosRow.localTextPrefix; };
            ProductosGrid.prototype.getService = function () { return Gestion.ProductosService.baseUrl; };
            ProductosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductosGrid);
            return ProductosGrid;
        }(Serenity.EntityGrid));
        Gestion.ProductosGrid = ProductosGrid;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var RegionesDialog = /** @class */ (function (_super) {
            __extends(RegionesDialog, _super);
            function RegionesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Gestion.RegionesForm(_this.idPrefix);
                return _this;
            }
            RegionesDialog.prototype.getFormKey = function () { return Gestion.RegionesForm.formKey; };
            RegionesDialog.prototype.getIdProperty = function () { return Gestion.RegionesRow.idProperty; };
            RegionesDialog.prototype.getLocalTextPrefix = function () { return Gestion.RegionesRow.localTextPrefix; };
            RegionesDialog.prototype.getNameProperty = function () { return Gestion.RegionesRow.nameProperty; };
            RegionesDialog.prototype.getService = function () { return Gestion.RegionesService.baseUrl; };
            RegionesDialog.prototype.getDeletePermission = function () { return Gestion.RegionesRow.deletePermission; };
            RegionesDialog.prototype.getInsertPermission = function () { return Gestion.RegionesRow.insertPermission; };
            RegionesDialog.prototype.getUpdatePermission = function () { return Gestion.RegionesRow.updatePermission; };
            RegionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionesDialog);
            return RegionesDialog;
        }(Serenity.EntityDialog));
        Gestion.RegionesDialog = RegionesDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var RegionesGrid = /** @class */ (function (_super) {
            __extends(RegionesGrid, _super);
            function RegionesGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionesGrid.prototype.getColumnsKey = function () { return 'Gestion.Regiones'; };
            RegionesGrid.prototype.getDialogType = function () { return Gestion.RegionesDialog; };
            RegionesGrid.prototype.getIdProperty = function () { return Gestion.RegionesRow.idProperty; };
            RegionesGrid.prototype.getInsertPermission = function () { return Gestion.RegionesRow.insertPermission; };
            RegionesGrid.prototype.getLocalTextPrefix = function () { return Gestion.RegionesRow.localTextPrefix; };
            RegionesGrid.prototype.getService = function () { return Gestion.RegionesService.baseUrl; };
            RegionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionesGrid);
            return RegionesGrid;
        }(Serenity.EntityGrid));
        Gestion.RegionesGrid = RegionesGrid;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TipoArriendoCard = /** @class */ (function (_super) {
            __extends(TipoArriendoCard, _super);
            function TipoArriendoCard() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TipoArriendoCard.prototype.render = function () {
                return React.createElement(React.Fragment, null, this.props.Items.map(function (item, i) {
                    return React.createElement("div", { key: i, className: "col-lg-3 col-md-6 icon-box", "data-aos": "fade-up" },
                        React.createElement("div", { className: "icon" },
                            React.createElement("a", { href: "/ProductList/" + item.Id },
                                React.createElement("img", { src: "/upload/" + item.Foto, className: "rounded-circle", width: "200px", height: "200px", "data-holder-rendered": "true", alt: item.Tipo }))),
                        React.createElement("h4", { className: "title" },
                            React.createElement("a", { href: "/ProductList/" + item.Id }, item.Tipo)),
                        React.createElement("p", { className: "description" }));
                }));
            };
            return TipoArriendoCard;
        }(React.Component));
        Gestion.TipoArriendoCard = TipoArriendoCard;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TipoArriendoDialog = /** @class */ (function (_super) {
            __extends(TipoArriendoDialog, _super);
            function TipoArriendoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Gestion.TipoArriendoForm(_this.idPrefix);
                return _this;
            }
            TipoArriendoDialog.prototype.getFormKey = function () { return Gestion.TipoArriendoForm.formKey; };
            TipoArriendoDialog.prototype.getIdProperty = function () { return Gestion.TipoArriendoRow.idProperty; };
            TipoArriendoDialog.prototype.getLocalTextPrefix = function () { return Gestion.TipoArriendoRow.localTextPrefix; };
            TipoArriendoDialog.prototype.getNameProperty = function () { return Gestion.TipoArriendoRow.nameProperty; };
            TipoArriendoDialog.prototype.getService = function () { return Gestion.TipoArriendoService.baseUrl; };
            TipoArriendoDialog.prototype.getDeletePermission = function () { return Gestion.TipoArriendoRow.deletePermission; };
            TipoArriendoDialog.prototype.getInsertPermission = function () { return Gestion.TipoArriendoRow.insertPermission; };
            TipoArriendoDialog.prototype.getUpdatePermission = function () { return Gestion.TipoArriendoRow.updatePermission; };
            TipoArriendoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TipoArriendoDialog);
            return TipoArriendoDialog;
        }(Serenity.EntityDialog));
        Gestion.TipoArriendoDialog = TipoArriendoDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TipoArriendoGrid = /** @class */ (function (_super) {
            __extends(TipoArriendoGrid, _super);
            function TipoArriendoGrid(container) {
                return _super.call(this, container) || this;
            }
            TipoArriendoGrid.prototype.getColumnsKey = function () { return 'Gestion.TipoArriendo'; };
            TipoArriendoGrid.prototype.getDialogType = function () { return Gestion.TipoArriendoDialog; };
            TipoArriendoGrid.prototype.getIdProperty = function () { return Gestion.TipoArriendoRow.idProperty; };
            TipoArriendoGrid.prototype.getInsertPermission = function () { return Gestion.TipoArriendoRow.insertPermission; };
            TipoArriendoGrid.prototype.getLocalTextPrefix = function () { return Gestion.TipoArriendoRow.localTextPrefix; };
            TipoArriendoGrid.prototype.getService = function () { return Gestion.TipoArriendoService.baseUrl; };
            TipoArriendoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TipoArriendoGrid);
            return TipoArriendoGrid;
        }(Serenity.EntityGrid));
        Gestion.TipoArriendoGrid = TipoArriendoGrid;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TiposAdicionalesDialog = /** @class */ (function (_super) {
            __extends(TiposAdicionalesDialog, _super);
            function TiposAdicionalesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Gestion.TiposAdicionalesForm(_this.idPrefix);
                return _this;
            }
            TiposAdicionalesDialog.prototype.getFormKey = function () { return Gestion.TiposAdicionalesForm.formKey; };
            TiposAdicionalesDialog.prototype.getIdProperty = function () { return Gestion.TiposAdicionalesRow.idProperty; };
            TiposAdicionalesDialog.prototype.getLocalTextPrefix = function () { return Gestion.TiposAdicionalesRow.localTextPrefix; };
            TiposAdicionalesDialog.prototype.getNameProperty = function () { return Gestion.TiposAdicionalesRow.nameProperty; };
            TiposAdicionalesDialog.prototype.getService = function () { return Gestion.TiposAdicionalesService.baseUrl; };
            TiposAdicionalesDialog.prototype.getDeletePermission = function () { return Gestion.TiposAdicionalesRow.deletePermission; };
            TiposAdicionalesDialog.prototype.getInsertPermission = function () { return Gestion.TiposAdicionalesRow.insertPermission; };
            TiposAdicionalesDialog.prototype.getUpdatePermission = function () { return Gestion.TiposAdicionalesRow.updatePermission; };
            TiposAdicionalesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposAdicionalesDialog);
            return TiposAdicionalesDialog;
        }(Serenity.EntityDialog));
        Gestion.TiposAdicionalesDialog = TiposAdicionalesDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var TiposAdicionalesGrid = /** @class */ (function (_super) {
            __extends(TiposAdicionalesGrid, _super);
            function TiposAdicionalesGrid(container) {
                return _super.call(this, container) || this;
            }
            TiposAdicionalesGrid.prototype.getColumnsKey = function () { return 'Gestion.TiposAdicionales'; };
            TiposAdicionalesGrid.prototype.getDialogType = function () { return Gestion.TiposAdicionalesDialog; };
            TiposAdicionalesGrid.prototype.getIdProperty = function () { return Gestion.TiposAdicionalesRow.idProperty; };
            TiposAdicionalesGrid.prototype.getInsertPermission = function () { return Gestion.TiposAdicionalesRow.insertPermission; };
            TiposAdicionalesGrid.prototype.getLocalTextPrefix = function () { return Gestion.TiposAdicionalesRow.localTextPrefix; };
            TiposAdicionalesGrid.prototype.getService = function () { return Gestion.TiposAdicionalesService.baseUrl; };
            TiposAdicionalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposAdicionalesGrid);
            return TiposAdicionalesGrid;
        }(Serenity.EntityGrid));
        Gestion.TiposAdicionalesGrid = TiposAdicionalesGrid;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Gestion;
    (function (Gestion) {
        var ArriendoWizardDialog = /** @class */ (function (_super) {
            __extends(ArriendoWizardDialog, _super);
            function ArriendoWizardDialog(opt) {
                var _this = _super.call(this, opt) || this;
                ////protected getNameProperty() { return ArriendoWizardRow.nameProperty; }
                //protected getService() { return CategoriasService.baseUrl; }           
                _this.form = new Gestion.ArriendoWizardForm(_this.idPrefix);
                if (opt.container) {
                    _this.element.appendTo($("#" + opt.container));
                }
                return _this;
            }
            ArriendoWizardDialog.prototype.getFormKey = function () { return Gestion.ArriendoWizardForm.formKey; };
            ArriendoWizardDialog.prototype.getIdProperty = function () { return Gestion.ArriendoWizardRow.idProperty; };
            ArriendoWizardDialog.prototype.getLocalTextPrefix = function () { return Gestion.ArriendoWizardRow.localTextPrefix; };
            ArriendoWizardDialog.prototype.next = function (toStep) {
                switch (toStep) {
                    case 2:
                        _super.prototype.next.call(this, toStep);
                        // this.form.HorarioDisponible.calendarUpdateSize();
                        break;
                    case 3:
                        //if (!this.form.HorarioDisponible.Value || !this.form.HorarioDisponible.Value.FechaDesde) {
                        //    Q.notifyWarning("Por favor, seleccione algún horario disponible para la cita !");
                        //    return;
                        //}
                        _super.prototype.next.call(this, toStep);
                        break;
                    case 4:
                        this.form.ConfirmacionContext.element.html("<div>\n<div class=\"row\"><label class=\"caption\">Nombre:</label><span>" + this.form.Nombres.value + "</span></div>\n<div class=\"row\"><label class=\"caption\">Apellidos:</label><span>" + this.form.Apellidos.value + "</span></div>\n<div class=\"row\"><label class=\"caption\">Tel\u00E9fono:</label><span>" + this.form.Telefono.value + "</span></div>\n<div class=\"row\"><label class=\"caption\">Email:</label><span>" + this.form.Email.value + "</span></div>\n<div class=\"row\">&nbsp;</div>\n\n<br/>\n<div class=\"text-center\"><h3 style=\"color: #1c5c93; font-family:\"Open Sans\",sans-serif;font-size:20px\">Valor del Arriendo: " + Q.format(Q.text('Site.Reports.AmountPay')) + "</h3></div>\n                                                                </div>");
                        _super.prototype.next.call(this, toStep);
                        break;
                    default:
                        _super.prototype.next.call(this, toStep);
                        break;
                }
            };
            ArriendoWizardDialog.prototype.confirmCancel = function (e) {
                var cancelMessage = this.getCancelMessage();
                if (!cancelMessage) {
                    e.preventDefault();
                    window.location.href = Q.resolveUrl("~/");
                    return;
                }
                e.preventDefault();
                Q.confirm(cancelMessage, function () {
                    window.location.href = Q.resolveUrl("~/");
                });
            };
            ArriendoWizardDialog.prototype.finish = function () {
                var _this = this;
                if (this.validateForm()) {
                    Rental_SPA.Gestion.ArriendoWizardService.Create({ Entity: this.getSaveEntity() }, function (resp) {
                        Q.notifySuccess("Se creó su Arriendo satisfactoriamente !");
                        _super.prototype.finish.call(_this);
                    });
                }
            };
            ArriendoWizardDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], ArriendoWizardDialog);
            return ArriendoWizardDialog;
        }(Serenity.WizardDialog));
        Gestion.ArriendoWizardDialog = ArriendoWizardDialog;
    })(Gestion = Rental_SPA.Gestion || (Rental_SPA.Gestion = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Rental_SPA.Membership || (Rental_SPA.Membership = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var HistoriaDialog = /** @class */ (function (_super) {
            __extends(HistoriaDialog, _super);
            function HistoriaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sitio.HistoriaForm(_this.idPrefix);
                return _this;
            }
            HistoriaDialog.prototype.getFormKey = function () { return Sitio.HistoriaForm.formKey; };
            HistoriaDialog.prototype.getIdProperty = function () { return Sitio.HistoriaRow.idProperty; };
            HistoriaDialog.prototype.getLocalTextPrefix = function () { return Sitio.HistoriaRow.localTextPrefix; };
            HistoriaDialog.prototype.getNameProperty = function () { return Sitio.HistoriaRow.nameProperty; };
            HistoriaDialog.prototype.getService = function () { return Sitio.HistoriaService.baseUrl; };
            HistoriaDialog.prototype.getDeletePermission = function () { return Sitio.HistoriaRow.deletePermission; };
            HistoriaDialog.prototype.getInsertPermission = function () { return Sitio.HistoriaRow.insertPermission; };
            HistoriaDialog.prototype.getUpdatePermission = function () { return Sitio.HistoriaRow.updatePermission; };
            HistoriaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HistoriaDialog);
            return HistoriaDialog;
        }(Serenity.EntityDialog));
        Sitio.HistoriaDialog = HistoriaDialog;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var HistoriaGrid = /** @class */ (function (_super) {
            __extends(HistoriaGrid, _super);
            function HistoriaGrid(container) {
                var _this = _super.call(this, container) || this;
                // Para agregar la opción de Ordenar las Filas.
                _this.slickGrid.setSelectionModel(new Slick.RowSelectionModel());
                Serenity.GridUtils.makeOrderable(_this.slickGrid, function (rows, insertBefore) {
                    if (rows.length == 0) {
                        return;
                    }
                    var currentRow = Q.deepClone(_this.itemAt(rows[0]));
                    var currentItems = _this.view.getItems();
                    currentItems.splice(rows[0], 1);
                    currentItems.splice(insertBefore, 0, currentRow);
                    _this.setOrden(currentItems);
                    Q.blockUI({
                        message: Q.text('Site.BasicProgressDialog.AguardeMto'),
                        onBlock: function () {
                            try {
                                currentItems.forEach(function (row) {
                                    Rental_SPA.Sitio.HistoriaService.Update({ EntityId: row.Id, Entity: row }, function (resp) { }, { async: false });
                                });
                            }
                            catch (e) {
                                console.log(e);
                            }
                            finally {
                                Q.blockUndo();
                                _this.view.setItems(currentItems, true);
                            }
                        }
                    });
                });
                return _this;
            }
            HistoriaGrid.prototype.getColumnsKey = function () { return 'Sitio.Historia'; };
            HistoriaGrid.prototype.getDialogType = function () { return Sitio.HistoriaDialog; };
            HistoriaGrid.prototype.getIdProperty = function () { return Sitio.HistoriaRow.idProperty; };
            HistoriaGrid.prototype.getInsertPermission = function () { return Sitio.HistoriaRow.insertPermission; };
            HistoriaGrid.prototype.getLocalTextPrefix = function () { return Sitio.HistoriaRow.localTextPrefix; };
            HistoriaGrid.prototype.getService = function () { return Sitio.HistoriaService.baseUrl; };
            HistoriaGrid.prototype.onViewProcessData = function (response) {
                if (response.Entities.length > 0) {
                    response.Entities = response.Entities.sort(function (a, b) { return a.Orden - b.Orden; });
                }
                return _super.prototype.onViewProcessData.call(this, response);
            };
            HistoriaGrid.prototype.addButtonClick = function () {
                var nextOrdenNro = 1;
                if (this.view.getItems().length > 0) {
                    nextOrdenNro = this.view.getItems().sort(function (a, b) { return b.Orden - a.Orden; })[0].Orden + 1;
                }
                this.editItem({ Order: nextOrdenNro });
            };
            HistoriaGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "",
                    sortable: false,
                    id: "#",
                    name: "",
                    width: 40,
                    behavior: "selectAndMove",
                    selectable: false,
                    resizable: false,
                    cssClass: "cell-reorder dnd"
                });
                return columns;
            };
            HistoriaGrid.prototype.getSlickOptions = function () {
                var options = _super.prototype.getSlickOptions.call(this);
                options.enableRowReordering = true;
                return options;
            };
            HistoriaGrid.prototype.getViewOptions = function () {
                var options = _super.prototype.getViewOptions.call(this);
                options.rowsPerPage = 2500;
                return options;
            };
            HistoriaGrid.prototype.setOrden = function (rows) {
                var i = 1;
                rows.forEach(function (x) { return x.Orden = i++; });
            };
            HistoriaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], HistoriaGrid);
            return HistoriaGrid;
        }(Serenity.EntityGrid));
        Sitio.HistoriaGrid = HistoriaGrid;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var HistoriaCard = function (_a) {
            var _b = React.useState([]), Tabs = _b[0], setTabs = _b[1];
            React.useEffect(function () {
                Rental_SPA.Sitio.HistoriaService.List({}, function (resp) { setTabs(resp.Entities); });
            }, []);
            return (React.createElement("div", { className: "tabs-custom tabs-horizontal tabs-line tabs-line-big tabs-line-style-2 text-center text-md-left", id: "tabs-7" },
                React.createElement("ul", { className: "nav nav-tabs mt-3" }, Tabs.map(function (item, i) { return React.createElement("li", { key: item.Id, className: "nav-item", role: "presentation" },
                    React.createElement("a", { className: "nav-link " + (i == 0 ? "active" : ""), href: "#tabs-7-" + i, "data-toggle": "tab" }, item.Titulo)); })),
                React.createElement("div", { className: "tab-content" }, Tabs.map(function (item, i) {
                    return React.createElement("div", { key: i, className: "tab-pane fade " + (i == 0 ? "show active" : ""), id: "tabs-7-" + i },
                        React.createElement("p", { className: "company-descriptionc text-justify", dangerouslySetInnerHTML: { __html: item.Body } }));
                }))));
        };
        var NosotrosCard = /** @class */ (function (_super) {
            __extends(NosotrosCard, _super);
            function NosotrosCard() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NosotrosCard.prototype.render = function () {
                return (React.createElement("div", { className: "container" }, this.props.Items.map(function (item, i) {
                    return React.createElement("div", { className: "row no-gutters", key: item.Id },
                        React.createElement("div", { className: "col-lg-12 " },
                            React.createElement("div", { className: "section-title m-2" },
                                React.createElement("h2", null, item.Titulo),
                                React.createElement("p", { dangerouslySetInnerHTML: { __html: item.Body } }))),
                        React.createElement("div", { className: "col-md-6 video-box" },
                            React.createElement("img", { src: "/upload/" + item.Foto, width: "600", className: "img-fluid", alt: "" })),
                        React.createElement("div", { className: "col-md-6 pl-4" },
                            React.createElement(HistoriaCard, null)),
                        React.createElement("div", { className: "icon-box m-2", "data-aos": "fade-up", "data-aos-delay": "100" },
                            React.createElement("div", { className: "icon" },
                                React.createElement("i", { className: "bx " + item.Icono })),
                            React.createElement("p", { className: "description", dangerouslySetInnerHTML: { __html: item.Comtario } })));
                })));
            };
            return NosotrosCard;
        }(React.Component));
        Sitio.NosotrosCard = NosotrosCard;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NosotrosDialog = /** @class */ (function (_super) {
            __extends(NosotrosDialog, _super);
            function NosotrosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sitio.NosotrosForm(_this.idPrefix);
                return _this;
            }
            NosotrosDialog.prototype.getFormKey = function () { return Sitio.NosotrosForm.formKey; };
            NosotrosDialog.prototype.getIdProperty = function () { return Sitio.NosotrosRow.idProperty; };
            NosotrosDialog.prototype.getLocalTextPrefix = function () { return Sitio.NosotrosRow.localTextPrefix; };
            NosotrosDialog.prototype.getNameProperty = function () { return Sitio.NosotrosRow.nameProperty; };
            NosotrosDialog.prototype.getService = function () { return Sitio.NosotrosService.baseUrl; };
            NosotrosDialog.prototype.getDeletePermission = function () { return Sitio.NosotrosRow.deletePermission; };
            NosotrosDialog.prototype.getInsertPermission = function () { return Sitio.NosotrosRow.insertPermission; };
            NosotrosDialog.prototype.getUpdatePermission = function () { return Sitio.NosotrosRow.updatePermission; };
            NosotrosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NosotrosDialog);
            return NosotrosDialog;
        }(Serenity.EntityDialog));
        Sitio.NosotrosDialog = NosotrosDialog;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NosotrosGrid = /** @class */ (function (_super) {
            __extends(NosotrosGrid, _super);
            function NosotrosGrid(container) {
                return _super.call(this, container) || this;
            }
            NosotrosGrid.prototype.getColumnsKey = function () { return 'Sitio.Nosotros'; };
            NosotrosGrid.prototype.getDialogType = function () { return Sitio.NosotrosDialog; };
            NosotrosGrid.prototype.getIdProperty = function () { return Sitio.NosotrosRow.idProperty; };
            NosotrosGrid.prototype.getInsertPermission = function () { return Sitio.NosotrosRow.insertPermission; };
            NosotrosGrid.prototype.getLocalTextPrefix = function () { return Sitio.NosotrosRow.localTextPrefix; };
            NosotrosGrid.prototype.getService = function () { return Sitio.NosotrosService.baseUrl; };
            NosotrosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NosotrosGrid);
            return NosotrosGrid;
        }(Serenity.EntityGrid));
        Sitio.NosotrosGrid = NosotrosGrid;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NuestrosClientesCard = /** @class */ (function (_super) {
            __extends(NuestrosClientesCard, _super);
            function NuestrosClientesCard() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NuestrosClientesCard.prototype.render = function () {
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "owl-carousel", id: "deals-discounts-carousel" }, this.props.Items.map(function (item, i) {
                        return (React.createElement("div", { key: i, className: "col-md-6 align-items-center text-align-center" },
                            React.createElement("img", { src: "/upload/" + item.Logo, className: "img-fluid", title: item.Nombre, alt: item.Nombre })));
                    })),
                    " "));
            };
            NuestrosClientesCard.prototype.componentDidMount = function () {
                //============= Deals and Discount Carousel =====
                $("#deals-discounts-carousel").owlCarousel({
                    autoplay: true,
                    autoplayTimeout: 2000,
                    margin: 0,
                    nav: false,
                    smartSpeed: 1000,
                    dots: false,
                    autoplayHoverPause: true,
                    loop: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 3,
                        },
                        1000: {
                            items: 4,
                        }
                    }
                });
            };
            return NuestrosClientesCard;
        }(React.Component));
        Sitio.NuestrosClientesCard = NuestrosClientesCard;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NuestrosClientesDialog = /** @class */ (function (_super) {
            __extends(NuestrosClientesDialog, _super);
            function NuestrosClientesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sitio.NuestrosClientesForm(_this.idPrefix);
                return _this;
            }
            NuestrosClientesDialog.prototype.getFormKey = function () { return Sitio.NuestrosClientesForm.formKey; };
            NuestrosClientesDialog.prototype.getIdProperty = function () { return Sitio.NuestrosClientesRow.idProperty; };
            NuestrosClientesDialog.prototype.getLocalTextPrefix = function () { return Sitio.NuestrosClientesRow.localTextPrefix; };
            NuestrosClientesDialog.prototype.getNameProperty = function () { return Sitio.NuestrosClientesRow.nameProperty; };
            NuestrosClientesDialog.prototype.getService = function () { return Sitio.NuestrosClientesService.baseUrl; };
            NuestrosClientesDialog.prototype.getDeletePermission = function () { return Sitio.NuestrosClientesRow.deletePermission; };
            NuestrosClientesDialog.prototype.getInsertPermission = function () { return Sitio.NuestrosClientesRow.insertPermission; };
            NuestrosClientesDialog.prototype.getUpdatePermission = function () { return Sitio.NuestrosClientesRow.updatePermission; };
            NuestrosClientesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NuestrosClientesDialog);
            return NuestrosClientesDialog;
        }(Serenity.EntityDialog));
        Sitio.NuestrosClientesDialog = NuestrosClientesDialog;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var NuestrosClientesGrid = /** @class */ (function (_super) {
            __extends(NuestrosClientesGrid, _super);
            function NuestrosClientesGrid(container) {
                return _super.call(this, container) || this;
            }
            NuestrosClientesGrid.prototype.getColumnsKey = function () { return 'Sitio.NuestrosClientes'; };
            NuestrosClientesGrid.prototype.getDialogType = function () { return Sitio.NuestrosClientesDialog; };
            NuestrosClientesGrid.prototype.getIdProperty = function () { return Sitio.NuestrosClientesRow.idProperty; };
            NuestrosClientesGrid.prototype.getInsertPermission = function () { return Sitio.NuestrosClientesRow.insertPermission; };
            NuestrosClientesGrid.prototype.getLocalTextPrefix = function () { return Sitio.NuestrosClientesRow.localTextPrefix; };
            NuestrosClientesGrid.prototype.getService = function () { return Sitio.NuestrosClientesService.baseUrl; };
            NuestrosClientesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NuestrosClientesGrid);
            return NuestrosClientesGrid;
        }(Serenity.EntityGrid));
        Sitio.NuestrosClientesGrid = NuestrosClientesGrid;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var SliderCard = /** @class */ (function (_super) {
            __extends(SliderCard, _super);
            function SliderCard() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SliderCard.prototype.render = function () {
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "hero-container" },
                        React.createElement("div", { id: "heroCarousel", className: "carousel slide carousel-fade", "data-ride": "carousel" },
                            React.createElement("ol", { className: "carousel-indicators", id: "hero-carousel-indicators" }),
                            React.createElement("div", { className: "carousel-inner", role: "listbox" }, this.props.Items.map(function (item, i) {
                                return React.createElement("div", { key: i, className: i == 0 ? 'carousel-item active' : 'carousel-item', style: { backgroundImage: 'url("/upload/' + item.Foto + '")' } },
                                    React.createElement("div", { className: "carousel-container" },
                                        React.createElement("div", { className: "carousel-content container" },
                                            React.createElement("h2", { className: "animate__animated animate__fadeInDown" }, item.Titulo),
                                            React.createElement("p", { dangerouslySetInnerHTML: { __html: item.SubTitulo }, className: "animate__animated animate__fadeInUp" }))));
                            })),
                            React.createElement("a", { className: "carousel-control-prev", href: "#heroCarousel", role: "button", "data-slide": "prev" },
                                React.createElement("span", { className: "carousel-control-prev-icon icofont-rounded-left", "aria-hidden": "true" }),
                                React.createElement("span", { className: "sr-only" }, "Previous")),
                            React.createElement("a", { className: "carousel-control-next", href: "#heroCarousel", role: "button", "data-slide": "next" },
                                React.createElement("span", { className: "carousel-control-next-icon icofont-rounded-right", "aria-hidden": "true" }),
                                React.createElement("span", { className: "sr-only" }, "Next"))))));
            };
            SliderCard.prototype.componentDidMount = function () {
                $("#heroCarousel").carousel({
                    interval: 3000,
                    autoplay: true
                });
            };
            return SliderCard;
        }(React.Component));
        Sitio.SliderCard = SliderCard;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var SliderDialog = /** @class */ (function (_super) {
            __extends(SliderDialog, _super);
            function SliderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sitio.SliderForm(_this.idPrefix);
                return _this;
            }
            SliderDialog.prototype.getFormKey = function () { return Sitio.SliderForm.formKey; };
            SliderDialog.prototype.getIdProperty = function () { return Sitio.SliderRow.idProperty; };
            SliderDialog.prototype.getLocalTextPrefix = function () { return Sitio.SliderRow.localTextPrefix; };
            SliderDialog.prototype.getNameProperty = function () { return Sitio.SliderRow.nameProperty; };
            SliderDialog.prototype.getService = function () { return Sitio.SliderService.baseUrl; };
            SliderDialog.prototype.getDeletePermission = function () { return Sitio.SliderRow.deletePermission; };
            SliderDialog.prototype.getInsertPermission = function () { return Sitio.SliderRow.insertPermission; };
            SliderDialog.prototype.getUpdatePermission = function () { return Sitio.SliderRow.updatePermission; };
            SliderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SliderDialog);
            return SliderDialog;
        }(Serenity.EntityDialog));
        Sitio.SliderDialog = SliderDialog;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
var Rental_SPA;
(function (Rental_SPA) {
    var Sitio;
    (function (Sitio) {
        var SliderGrid = /** @class */ (function (_super) {
            __extends(SliderGrid, _super);
            function SliderGrid(container) {
                return _super.call(this, container) || this;
            }
            SliderGrid.prototype.getColumnsKey = function () { return 'Sitio.Slider'; };
            SliderGrid.prototype.getDialogType = function () { return Sitio.SliderDialog; };
            SliderGrid.prototype.getIdProperty = function () { return Sitio.SliderRow.idProperty; };
            SliderGrid.prototype.getInsertPermission = function () { return Sitio.SliderRow.insertPermission; };
            SliderGrid.prototype.getLocalTextPrefix = function () { return Sitio.SliderRow.localTextPrefix; };
            SliderGrid.prototype.getService = function () { return Sitio.SliderService.baseUrl; };
            SliderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SliderGrid);
            return SliderGrid;
        }(Serenity.EntityGrid));
        Sitio.SliderGrid = SliderGrid;
    })(Sitio = Rental_SPA.Sitio || (Rental_SPA.Sitio = {}));
})(Rental_SPA || (Rental_SPA = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVudGFsX1NQQS5XZWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25JdGVtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVVcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLlVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLlVzZXJQcmVmZXJlbmNlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLlVzZXJQcmVmZXJlbmNlVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FeGNlbEltcG9ydFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRXhjZWxJbXBvcnRSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLkFycmllbmRvV2l6YXJkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLkFycmllbmRvV2l6YXJkUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uQXJyaWVuZG9XaXphcmRTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uQXJyaWVuZG9zQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLkFycmllbmRvc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5BcnJpZW5kb3NSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5BcnJpZW5kb3NTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uQXRyaWJ1dG9zQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLkF0cmlidXRvc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5BdHJpYnV0b3NSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5BdHJpYnV0b3NTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uQ2xpZW50ZXNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uQ2xpZW50ZXNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uQ2xpZW50ZXNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5DbGllbnRlc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5Qcm9kdWN0b0RldGFsbGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uUHJvZHVjdG9EZXRhbGxlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLlByb2R1Y3RvRGV0YWxsZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLlByb2R1Y3RvRGV0YWxsZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5Qcm9kdWN0b3NDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uUHJvZHVjdG9zRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLlByb2R1Y3Rvc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLlByb2R1Y3Rvc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5SZWdpb25lc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5SZWdpb25lc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5SZWdpb25lc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLlJlZ2lvbmVzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLlRpcG9BcnJpZW5kb0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5UaXBvQXJyaWVuZG9Gb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uVGlwb0FycmllbmRvUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uVGlwb0FycmllbmRvU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXN0aW9uLlRpcG9zQWRpY2lvbmFsZXNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uVGlwb3NBZGljaW9uYWxlc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2VzdGlvbi5UaXBvc0FkaWNpb25hbGVzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dlc3Rpb24uVGlwb3NBZGljaW9uYWxlc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2V0TmV4dE51bWJlclJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2V0TmV4dE51bWJlclJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuTG9naW5Gb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuTG9naW5SZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlNpZ25VcEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NjcmlwdFVzZXJEZWZpbml0aW9uLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NpdGlvLkhpc3RvcmlhQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TaXRpby5IaXN0b3JpYUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2l0aW8uSGlzdG9yaWFSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2l0aW8uSGlzdG9yaWFTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NpdGlvLk5vc290cm9zQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TaXRpby5Ob3NvdHJvc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2l0aW8uTm9zb3Ryb3NSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2l0aW8uTm9zb3Ryb3NTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NpdGlvLk51ZXN0cm9zQ2xpZW50ZXNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NpdGlvLk51ZXN0cm9zQ2xpZW50ZXNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NpdGlvLk51ZXN0cm9zQ2xpZW50ZXNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2l0aW8uTnVlc3Ryb3NDbGllbnRlc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2l0aW8uU2xpZGVyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TaXRpby5TbGlkZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NpdGlvLlNsaWRlclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TaXRpby5TbGlkZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RleHRzLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MYW5ndWFnZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGUvUm9sZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL1JvbGVQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9UcmFuc2xhdGlvbkdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9BdXRoZW50aWNhdGlvbi9BdXRob3JpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9QZXJtaXNzaW9uQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VzZXJQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Sb2xlQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VzZXJSb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9TY3JpcHRJbml0aWFsaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvQmFzaWNQcm9ncmVzc0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvQnVsa1NlcnZpY2VBY3Rpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0RpYWxvZ1V0aWxzLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9FbnVtU2VsZWN0Rm9ybWF0dGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9FeGNlbEV4cG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvR3JpZEVkaXRvckJhc2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0dyaWRFZGl0b3JEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL1N0YXRpY1RleHRCbG9jay50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL05hdmlnYXRpb24vTGFuZ3VhZ2VTZWxlY3Rpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1NpZGViYXJTZWFyY2gudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1RoZW1lU2VsZWN0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUHJlbWl1bS9TaW5nbGVMaW5lVGV4dEZvcm1hdHRlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1ByZW1pdW0vV2l6YXJkRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1BkZkV4cG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydGluZy9SZXBvcnREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9SZXBvcnRpbmcvUmVwb3J0SGVscGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1JlcG9ydFBhZ2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9Vc2VyUHJlZmVyZW5jZS9Vc2VyUHJlZmVyZW5jZVN0b3JhZ2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0dlc3Rpb24vQXJyaWVuZG9zL0FycmllbmRvc0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvR2VzdGlvbi9BcnJpZW5kb3MvQXJyaWVuZG9zR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvR2VzdGlvbi9BdHJpYnV0b3MvQXRyaWJ1dG9zRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL0F0cmlidXRvcy9BdHJpYnV0b3NHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL0NsaWVudGVzL0NsaWVudGVzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL0NsaWVudGVzL0NsaWVudGVzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvR2VzdGlvbi9Qcm9kdWN0b0RldGFsbGUvUHJvZHVjdG9EZXRhbGxlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL1Byb2R1Y3RvRGV0YWxsZS9Qcm9kdWN0b0RldGFsbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL1Byb2R1Y3Rvcy9Qcm9kdWN0b3NDb21wb25lbnQudHN4IiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL1Byb2R1Y3Rvcy9Qcm9kdWN0b3NEZXRFZGl0b3JDYXJkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL1Byb2R1Y3Rvcy9Qcm9kdWN0b3NEZXRhaWwudHN4IiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL1Byb2R1Y3Rvcy9Qcm9kdWN0b3NEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0dlc3Rpb24vUHJvZHVjdG9zL1Byb2R1Y3Rvc0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0dlc3Rpb24vUmVnaW9uZXMvUmVnaW9uZXNEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0dlc3Rpb24vUmVnaW9uZXMvUmVnaW9uZXNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL1RpcG9BcnJpZW5kby9UaXBvQXJyaWVuZG9Db21wb25lbnQudHN4IiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL1RpcG9BcnJpZW5kby9UaXBvQXJyaWVuZG9EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0dlc3Rpb24vVGlwb0FycmllbmRvL1RpcG9BcnJpZW5kb0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0dlc3Rpb24vVGlwb3NBZGljaW9uYWxlcy9UaXBvc0FkaWNpb25hbGVzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9HZXN0aW9uL1RpcG9zQWRpY2lvbmFsZXMvVGlwb3NBZGljaW9uYWxlc0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0dlc3Rpb24vV2l6YXJkL0FycmllbmRvV2l6YXJkRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvTG9naW5QYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0NoYW5nZVBhc3N3b3JkL0NoYW5nZVBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvUmVzZXRQYXNzd29yZC9SZXNldFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9TaWduVXAvU2lnblVwUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NpdGlvL0hpc3RvcmlhL0hpc3RvcmlhRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TaXRpby9IaXN0b3JpYS9IaXN0b3JpYUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NpdGlvL05vc290cm9zL05vc290cm9zQ29tcG9uZW50LnRzeCIsIi4uLy4uLy4uL01vZHVsZXMvU2l0aW8vTm9zb3Ryb3MvTm9zb3Ryb3NEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NpdGlvL05vc290cm9zL05vc290cm9zR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2l0aW8vTnVlc3Ryb3NDbGllbnRlcy9OdWVzdHJvc0NsaWVudGVzQ29tcG9uZW50LnRzeCIsIi4uLy4uLy4uL01vZHVsZXMvU2l0aW8vTnVlc3Ryb3NDbGllbnRlcy9OdWVzdHJvc0NsaWVudGVzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TaXRpby9OdWVzdHJvc0NsaWVudGVzL051ZXN0cm9zQ2xpZW50ZXNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TaXRpby9TbGlkZXIvU2xpZGVyQ29tcG9uZW50LnRzeCIsIi4uLy4uLy4uL01vZHVsZXMvU2l0aW8vU2xpZGVyL1NsaWRlckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2l0aW8vU2xpZGVyL1NsaWRlckdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxVQUFVLENBSW5CO0FBSkQsV0FBVSxVQUFVO0lBQUMsSUFBQSxjQUFjLENBSWxDO0lBSm9CLFdBQUEsY0FBYztRQUMvQjtZQUFBO1lBRUEsQ0FBQztZQURVLDBCQUFVLEdBQUcseUJBQXlCLENBQUM7WUFDbEQs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QUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLGVBQWUsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxFQUFDLGdCQUFnQixFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyx5QkFBeUIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLG1CQUFtQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxFQUFDLG9CQUFvQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxxQkFBcUIsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxFQUFDLG9CQUFvQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxF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Q0FlekI7SUFmb0IsV0FBQSxLQUFLO1FBR3RCO1lBQWdDLDhCQUFtQztZQVEvRCxvQkFBWSxTQUFpQjt1QkFDekIsa0JBQU0sU0FBUyxDQUFDO1lBQ3BCLENBQUM7WUFUUyxrQ0FBYSxHQUF2QixjQUE0QixPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsa0NBQWEsR0FBdkIsY0FBNEIsT0FBTyxNQUFBLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEMsa0NBQWEsR0FBdkIsY0FBNEIsT0FBTyxNQUFBLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hELHdDQUFtQixHQUE3QixjQUFrQyxPQUFPLE1BQUEsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUM1RCx1Q0FBa0IsR0FBNUIsY0FBaUMsT0FBTyxNQUFBLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFELCtCQUFVLEdBQXBCLGNBQXlCLE9BQU8sTUFBQSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQU4vQyxVQUFVO2dCQUR0QixRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtlQUN2QixVQUFVLENBV3RCO1lBQUQsaUJBQUM7U0FBQSxBQVhELENBQWdDLFFBQVEsQ0FBQyxVQUFVLEdBV2xEO1FBWFksZ0JBQVUsYUFXdEIsQ0FBQTtJQUNMLENBQUMsRUFmb0IsS0FBSyxHQUFMLGdCQUFLLEtBQUwsZ0JBQUssUUFlekI7QUFBRCxDQUFDLEVBZlMsVUFBVSxLQUFWLFVBQVUsUUFlbkIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUZvcm0ge1xyXG4gICAgICAgIExhbmd1YWdlSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMYW5ndWFnZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTGFuZ3VhZ2VGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMYW5ndWFnZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExhbmd1YWdlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogc3RyaW5nO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYW5ndWFnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxMYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlSWQgPSBcIkxhbmd1YWdlSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VOYW1lID0gXCJMYW5ndWFnZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5MYW5ndWFnZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJvbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSb2xlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUm9sZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUm9sZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBSb2xlUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25JZCA9IFwiUm9sZVBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIFJvbGVSb2xlTmFtZSA9IFwiUm9sZVJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFJvbGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJvbGVSb3c+KCdBZG1pbmlzdHJhdGlvbi5Sb2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUm9sZU5hbWUgPSBcIlJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkl0ZW0ge1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2VUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldFRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tVGV4dD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIFNvdXJjZUxhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRyYW5zbGF0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXNlckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFVzZXJQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgR3JhbnRlZD86IGJvb2xlYW47XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25JZCA9IFwiVXNlclBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIEdyYW50ZWQgPSBcIkdyYW50ZWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclBlcm1pc3Npb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFJvbGVQZXJtaXNzaW9ucyhyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFBlcm1pc3Npb25LZXlzKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RcIixcclxuICAgICAgICAgICAgTGlzdFJvbGVQZXJtaXNzaW9ucyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFJvbGVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgICAgICBMaXN0UGVybWlzc2lvbktleXMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RQZXJtaXNzaW9uS2V5c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ0xpc3RSb2xlUGVybWlzc2lvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RQZXJtaXNzaW9uS2V5cydcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogVXNlclBlcm1pc3Npb25Sb3dbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxudW1iZXI+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgVXNlclJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclJvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUm9sZUlkID0gXCJVc2VyUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VyID0gXCJVc2VyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJSb2xlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJSb2xlTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogVXNlclJvbGVMaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUm9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZXM/OiBudW1iZXJbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm93IHtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkSGFzaD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZFNhbHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdVc2VybmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFVzZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFVzZXJSb3c+KCdBZG1pbmlzdHJhdGlvbi5Vc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFNvdXJjZSA9IFwiU291cmNlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkSGFzaCA9IFwiUGFzc3dvcmRIYXNoXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkU2FsdCA9IFwiUGFzc3dvcmRTYWx0XCIsXHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gXCJEaXNwbGF5TmFtZVwiLFxyXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcclxuICAgICAgICAgICAgVXNlckltYWdlID0gXCJVc2VySW1hZ2VcIixcclxuICAgICAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZSA9IFwiTGFzdERpcmVjdG9yeVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcclxuICAgICAgICAgICAgUGFzc3dvcmQgPSBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkQ29uZmlybSA9IFwiUGFzc3dvcmRDb25maXJtXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVW5kZWxldGUocmVxdWVzdDogU2VyZW5pdHkuVW5kZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlVuZGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFVuZGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VuZGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdVbmRlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSB7XHJcbiAgICAgICAgVmFsdWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlUm93IHtcclxuICAgICAgICBVc2VyUHJlZmVyZW5jZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBQcmVmZXJlbmNlVHlwZT86IHN0cmluZztcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFZhbHVlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclByZWZlcmVuY2VSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQcmVmZXJlbmNlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdDb21tb24uVXNlclByZWZlcmVuY2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICcnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJQcmVmZXJlbmNlSWQgPSBcIlVzZXJQcmVmZXJlbmNlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUHJlZmVyZW5jZVR5cGUgPSBcIlByZWZlcmVuY2VUeXBlXCIsXHJcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWUgPSBcIlZhbHVlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclByZWZlcmVuY2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdDb21tb24vVXNlclByZWZlcmVuY2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkNvbW1vbi9Vc2VyUHJlZmVyZW5jZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkNvbW1vbi9Vc2VyUHJlZmVyZW5jZS9SZXRyaWV2ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclByZWZlcmVuY2VTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVmFsdWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRXhjZWxJbXBvcnRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEZpbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEV4Y2VsSW1wb3J0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2Uge1xyXG4gICAgICAgIEluc2VydGVkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRXJyb3JMaXN0Pzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBcnJpZW5kb1dpemFyZEZvcm0ge1xyXG4gICAgICAgIFdlbGNvbWVNZXNzYWdlOiBTdGF0aWNUZXh0QmxvY2s7XHJcbiAgICAgICAgRGlyZWNjaW9uT2JyYTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlZ2lvbjogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIENpdWRhZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERldGFsbGVzTWVzc2FnZTogU3RhdGljVGV4dEJsb2NrO1xyXG4gICAgICAgIENvbmZpcm1hY2lvbk1lc3NhZ2U6IFN0YXRpY1RleHRCbG9jaztcclxuICAgICAgICBDb25maXJtYWNpb25Db250ZXh0OiBTdGF0aWNUZXh0QmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFycmllbmRvV2l6YXJkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnR2VzdGlvbi5BcnJpZW5kb1dpemFyZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQXJyaWVuZG9XaXphcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBBcnJpZW5kb1dpemFyZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IFN0YXRpY1RleHRCbG9jaztcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5Mb29rdXBFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQXJyaWVuZG9XaXphcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1dlbGNvbWVNZXNzYWdlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RpcmVjY2lvbk9icmEnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaW9uJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NpdWRhZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXRhbGxlc01lc3NhZ2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybWFjaW9uTWVzc2FnZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtYWNpb25Db250ZXh0JywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBcnJpZW5kb1dpemFyZFJvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRGlyZWNjaW9uT2JyYT86IHN0cmluZztcclxuICAgICAgICBSZWdpb24/OiBudW1iZXI7XHJcbiAgICAgICAgQ2l1ZGFkPzogc3RyaW5nO1xyXG4gICAgICAgIElkQ2xpZW50ZT86IG51bWJlcjtcclxuICAgICAgICBJZFByb2R1Y3RvPzogbnVtYmVyO1xyXG4gICAgICAgIEdhcmFudGlhPzogbnVtYmVyO1xyXG4gICAgICAgIENvbkdhcmFudGlhPzogYm9vbGVhbjtcclxuICAgICAgICBGZWNoYUluaWNpbz86IHN0cmluZztcclxuICAgICAgICBGZWNoYURldm9sdWNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV0bz86IG51bWJlcjtcclxuICAgICAgICBJdmE/OiBudW1iZXI7XHJcbiAgICAgICAgVG90YWw/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBcnJpZW5kb1dpemFyZFJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRGlyZWNjaW9uT2JyYSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdHZXN0aW9uLkFycmllbmRvV2l6YXJkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICcqJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIERpcmVjY2lvbk9icmEgPSBcIkRpcmVjY2lvbk9icmFcIixcclxuICAgICAgICAgICAgUmVnaW9uID0gXCJSZWdpb25cIixcclxuICAgICAgICAgICAgQ2l1ZGFkID0gXCJDaXVkYWRcIixcclxuICAgICAgICAgICAgSWRDbGllbnRlID0gXCJJZENsaWVudGVcIixcclxuICAgICAgICAgICAgSWRQcm9kdWN0byA9IFwiSWRQcm9kdWN0b1wiLFxyXG4gICAgICAgICAgICBHYXJhbnRpYSA9IFwiR2FyYW50aWFcIixcclxuICAgICAgICAgICAgQ29uR2FyYW50aWEgPSBcIkNvbkdhcmFudGlhXCIsXHJcbiAgICAgICAgICAgIEZlY2hhSW5pY2lvID0gXCJGZWNoYUluaWNpb1wiLFxyXG4gICAgICAgICAgICBGZWNoYURldm9sdWNpb24gPSBcIkZlY2hhRGV2b2x1Y2lvblwiLFxyXG4gICAgICAgICAgICBOZXRvID0gXCJOZXRvXCIsXHJcbiAgICAgICAgICAgIEl2YSA9IFwiSXZhXCIsXHJcbiAgICAgICAgICAgIFRvdGFsID0gXCJUb3RhbFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBcnJpZW5kb1dpemFyZFNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0dlc3Rpb24vQXJyaWVuZG9XaXphcmQnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXJyaWVuZG9XaXphcmRSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxBcnJpZW5kb1dpemFyZFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxBcnJpZW5kb1dpemFyZFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBcnJpZW5kb1dpemFyZFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJHZXN0aW9uL0FycmllbmRvV2l6YXJkL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkdlc3Rpb24vQXJyaWVuZG9XaXphcmQvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiR2VzdGlvbi9BcnJpZW5kb1dpemFyZC9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkdlc3Rpb24vQXJyaWVuZG9XaXphcmQvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiR2VzdGlvbi9BcnJpZW5kb1dpemFyZC9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+QXJyaWVuZG9XaXphcmRTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgQXJyaWVuZG9zQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnR2VzdGlvbi5BcnJpZW5kb3MnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBcnJpZW5kb3NGb3JtIHtcclxuICAgICAgICBEaXJlY2Npb25PYnJhOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVnaW9uOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENpdWRhZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIElkQ2xpZW50ZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBJZFByb2R1Y3RvOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEdhcmFudGlhOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIENvbkdhcmFudGlhOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIEZlY2hhSW5pY2lvOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEZlY2hhRGV2b2x1Y2lvbjogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBOZXRvOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIEl2YTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBUb3RhbDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQXJyaWVuZG9zRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnR2VzdGlvbi5BcnJpZW5kb3MnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUFycmllbmRvc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEFycmllbmRvc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEFycmllbmRvc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGlyZWNjaW9uT2JyYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWdpb24nLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ2l1ZGFkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkQ2xpZW50ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdJZFByb2R1Y3RvJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dhcmFudGlhJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbkdhcmFudGlhJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZlY2hhSW5pY2lvJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZlY2hhRGV2b2x1Y2lvbicsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdOZXRvJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0l2YScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdUb3RhbCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXJyaWVuZG9zUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBEaXJlY2Npb25PYnJhPzogc3RyaW5nO1xyXG4gICAgICAgIFJlZ2lvbj86IG51bWJlcjtcclxuICAgICAgICBDaXVkYWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgSWRDbGllbnRlPzogbnVtYmVyO1xyXG4gICAgICAgIElkUHJvZHVjdG8/OiBudW1iZXI7XHJcbiAgICAgICAgR2FyYW50aWE/OiBudW1iZXI7XHJcbiAgICAgICAgQ29uR2FyYW50aWE/OiBib29sZWFuO1xyXG4gICAgICAgIEZlY2hhSW5pY2lvPzogc3RyaW5nO1xyXG4gICAgICAgIEZlY2hhRGV2b2x1Y2lvbj86IHN0cmluZztcclxuICAgICAgICBOZXRvPzogbnVtYmVyO1xyXG4gICAgICAgIEl2YT86IG51bWJlcjtcclxuICAgICAgICBUb3RhbD86IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEFycmllbmRvc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRGlyZWNjaW9uT2JyYSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdHZXN0aW9uLkFycmllbmRvcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJyonO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxyXG4gICAgICAgICAgICBEaXJlY2Npb25PYnJhID0gXCJEaXJlY2Npb25PYnJhXCIsXHJcbiAgICAgICAgICAgIFJlZ2lvbiA9IFwiUmVnaW9uXCIsXHJcbiAgICAgICAgICAgIENpdWRhZCA9IFwiQ2l1ZGFkXCIsXHJcbiAgICAgICAgICAgIElkQ2xpZW50ZSA9IFwiSWRDbGllbnRlXCIsXHJcbiAgICAgICAgICAgIElkUHJvZHVjdG8gPSBcIklkUHJvZHVjdG9cIixcclxuICAgICAgICAgICAgR2FyYW50aWEgPSBcIkdhcmFudGlhXCIsXHJcbiAgICAgICAgICAgIENvbkdhcmFudGlhID0gXCJDb25HYXJhbnRpYVwiLFxyXG4gICAgICAgICAgICBGZWNoYUluaWNpbyA9IFwiRmVjaGFJbmljaW9cIixcclxuICAgICAgICAgICAgRmVjaGFEZXZvbHVjaW9uID0gXCJGZWNoYURldm9sdWNpb25cIixcclxuICAgICAgICAgICAgTmV0byA9IFwiTmV0b1wiLFxyXG4gICAgICAgICAgICBJdmEgPSBcIkl2YVwiLFxyXG4gICAgICAgICAgICBUb3RhbCA9IFwiVG90YWxcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQXJyaWVuZG9zU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnR2VzdGlvbi9BcnJpZW5kb3MnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXJyaWVuZG9zUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXJyaWVuZG9zUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEFycmllbmRvc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBcnJpZW5kb3NSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiR2VzdGlvbi9BcnJpZW5kb3MvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiR2VzdGlvbi9BcnJpZW5kb3MvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiR2VzdGlvbi9BcnJpZW5kb3MvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJHZXN0aW9uL0FycmllbmRvcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJHZXN0aW9uL0FycmllbmRvcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+QXJyaWVuZG9zU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIEF0cmlidXRvc0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0dlc3Rpb24uQXRyaWJ1dG9zJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXRyaWJ1dG9zRm9ybSB7XHJcbiAgICAgICAgRGVzY3JpcGNpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb2RpZ286IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQb3JjaWVudG86IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgSW1wb3J0ZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQXRyaWJ1dG9zRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnR2VzdGlvbi5BdHJpYnV0b3MnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUF0cmlidXRvc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEF0cmlidXRvc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEF0cmlidXRvc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcGNpb24nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kaWdvJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BvcmNpZW50bycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdJbXBvcnRlJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBdHJpYnV0b3NSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIERlc2NyaXBjaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIENvZGlnbz86IHN0cmluZztcclxuICAgICAgICBQb3JjaWVudG8/OiBudW1iZXI7XHJcbiAgICAgICAgSW1wb3J0ZT86IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEF0cmlidXRvc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRGVzY3JpcGNpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnR2VzdGlvbi5BdHJpYnV0b3MnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICcqJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgRGVzY3JpcGNpb24gPSBcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgICAgIENvZGlnbyA9IFwiQ29kaWdvXCIsXHJcbiAgICAgICAgICAgIFBvcmNpZW50byA9IFwiUG9yY2llbnRvXCIsXHJcbiAgICAgICAgICAgIEltcG9ydGUgPSBcIkltcG9ydGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQXRyaWJ1dG9zU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnR2VzdGlvbi9BdHJpYnV0b3MnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXRyaWJ1dG9zUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXRyaWJ1dG9zUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEF0cmlidXRvc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBdHJpYnV0b3NSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiR2VzdGlvbi9BdHJpYnV0b3MvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiR2VzdGlvbi9BdHJpYnV0b3MvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiR2VzdGlvbi9BdHJpYnV0b3MvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJHZXN0aW9uL0F0cmlidXRvcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJHZXN0aW9uL0F0cmlidXRvcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+QXRyaWJ1dG9zU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIENsaWVudGVzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnR2VzdGlvbi5DbGllbnRlcyc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENsaWVudGVzRm9ybSB7XHJcbiAgICAgICAgUnV0OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmF6b25Tb2NpYWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBOb21icmVGYW50YXNpYTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERpcmVjY2lvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENpdWRhZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRlbGVmb25vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRU1haWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2xpZW50ZXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdHZXN0aW9uLkNsaWVudGVzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDbGllbnRlc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENsaWVudGVzRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2xpZW50ZXNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1J1dCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSYXpvblNvY2lhbCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOb21icmVGYW50YXNpYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXJlY2Npb24nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2l1ZGFkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RlbGVmb25vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VNYWlsJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDbGllbnRlc1JvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUnV0Pzogc3RyaW5nO1xyXG4gICAgICAgIFJhem9uU29jaWFsPzogc3RyaW5nO1xyXG4gICAgICAgIE5vbWJyZUZhbnRhc2lhPzogc3RyaW5nO1xyXG4gICAgICAgIERpcmVjY2lvbj86IHN0cmluZztcclxuICAgICAgICBDaXVkYWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGVsZWZvbm8/OiBzdHJpbmc7XHJcbiAgICAgICAgRU1haWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDbGllbnRlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUnV0JztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0dlc3Rpb24uQ2xpZW50ZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgUnV0ID0gXCJSdXRcIixcclxuICAgICAgICAgICAgUmF6b25Tb2NpYWwgPSBcIlJhem9uU29jaWFsXCIsXHJcbiAgICAgICAgICAgIE5vbWJyZUZhbnRhc2lhID0gXCJOb21icmVGYW50YXNpYVwiLFxyXG4gICAgICAgICAgICBEaXJlY2Npb24gPSBcIkRpcmVjY2lvblwiLFxyXG4gICAgICAgICAgICBDaXVkYWQgPSBcIkNpdWRhZFwiLFxyXG4gICAgICAgICAgICBUZWxlZm9ubyA9IFwiVGVsZWZvbm9cIixcclxuICAgICAgICAgICAgRU1haWwgPSBcIkVNYWlsXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENsaWVudGVzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnR2VzdGlvbi9DbGllbnRlcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDbGllbnRlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENsaWVudGVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPENsaWVudGVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPENsaWVudGVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkdlc3Rpb24vQ2xpZW50ZXMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiR2VzdGlvbi9DbGllbnRlcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJHZXN0aW9uL0NsaWVudGVzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiR2VzdGlvbi9DbGllbnRlcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJHZXN0aW9uL0NsaWVudGVzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DbGllbnRlc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0b0RldGFsbGVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdHZXN0aW9uLlByb2R1Y3RvRGV0YWxsZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RvRGV0YWxsZUZvcm0ge1xyXG4gICAgICAgIElkUHJvZHVjdG86IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgSWRBdHJpYnV0bzogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBJZFRpcG9BZGljaW9uYWw6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVmFsb3I6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RvRGV0YWxsZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0dlc3Rpb24uUHJvZHVjdG9EZXRhbGxlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQcm9kdWN0b0RldGFsbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0b0RldGFsbGVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHJvZHVjdG9EZXRhbGxlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdJZFByb2R1Y3RvJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkQXRyaWJ1dG8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnSWRUaXBvQWRpY2lvbmFsJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ZhbG9yJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0b0RldGFsbGVSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIElkUHJvZHVjdG8/OiBudW1iZXI7XHJcbiAgICAgICAgSWRBdHJpYnV0bz86IG51bWJlcjtcclxuICAgICAgICBJZFRpcG9BZGljaW9uYWw/OiBudW1iZXI7XHJcbiAgICAgICAgVmFsb3I/OiBzdHJpbmc7XHJcbiAgICAgICAgSWRUaXBvQWRpY2lvbmFsVGl0dWxvPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHJvZHVjdG9EZXRhbGxlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdHZXN0aW9uLlByb2R1Y3RvRGV0YWxsZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJyonO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxyXG4gICAgICAgICAgICBJZFByb2R1Y3RvID0gXCJJZFByb2R1Y3RvXCIsXHJcbiAgICAgICAgICAgIElkQXRyaWJ1dG8gPSBcIklkQXRyaWJ1dG9cIixcclxuICAgICAgICAgICAgSWRUaXBvQWRpY2lvbmFsID0gXCJJZFRpcG9BZGljaW9uYWxcIixcclxuICAgICAgICAgICAgVmFsb3IgPSBcIlZhbG9yXCIsXHJcbiAgICAgICAgICAgIElkVGlwb0FkaWNpb25hbFRpdHVsbyA9IFwiSWRUaXBvQWRpY2lvbmFsVGl0dWxvXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3RvRGV0YWxsZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0dlc3Rpb24vUHJvZHVjdG9EZXRhbGxlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3RvRGV0YWxsZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3RvRGV0YWxsZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQcm9kdWN0b0RldGFsbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHJvZHVjdG9EZXRhbGxlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkdlc3Rpb24vUHJvZHVjdG9EZXRhbGxlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkdlc3Rpb24vUHJvZHVjdG9EZXRhbGxlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkdlc3Rpb24vUHJvZHVjdG9EZXRhbGxlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiR2VzdGlvbi9Qcm9kdWN0b0RldGFsbGUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiR2VzdGlvbi9Qcm9kdWN0b0RldGFsbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlByb2R1Y3RvRGV0YWxsZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0b3NDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdHZXN0aW9uLlByb2R1Y3Rvcyc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Rvc0Zvcm0ge1xyXG4gICAgICAgIE5vbWJyZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFjdGl2bzogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcclxuICAgICAgICBJZFRpcG9BcnJpZW5kbzogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIERlc2NyaXBjaW9uOiBTZXJlbml0eS5IdG1sQ29udGVudEVkaXRvcjtcclxuICAgICAgICBQcm9kdWN0b3NEZXQ6IFByb2R1Y3Rvc0RldEVkaXRvckNhcmQ7XHJcbiAgICAgICAgQ2FudGlkYWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgUHJlY2lvOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIEl2YTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBHYXJhbnRpYTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBGb3RvOiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdG9zRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnR2VzdGlvbi5Qcm9kdWN0b3MnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVByb2R1Y3Rvc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFByb2R1Y3Rvc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkh0bWxDb250ZW50RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gUHJvZHVjdG9zRGV0RWRpdG9yQ2FyZDtcclxuICAgICAgICAgICAgICAgIHZhciB3NSA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NiA9IHMuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NyA9IHMuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHJvZHVjdG9zRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOb21icmUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQWN0aXZvJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkVGlwb0FycmllbmRvJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXBjaW9uJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3Rvc0RldCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdDYW50aWRhZCcsIHc1LFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmVjaW8nLCB3NixcclxuICAgICAgICAgICAgICAgICAgICAnSXZhJywgdzYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dhcmFudGlhJywgdzYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZvdG8nLCB3N1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Rvc1JvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTm9tYnJlPzogc3RyaW5nO1xyXG4gICAgICAgIEZvdG8/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2FudGlkYWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHJlY2lvPzogbnVtYmVyO1xyXG4gICAgICAgIEl2YT86IG51bWJlcjtcclxuICAgICAgICBBY3Rpdm8/OiBib29sZWFuO1xyXG4gICAgICAgIEdhcmFudGlhPzogbnVtYmVyO1xyXG4gICAgICAgIElkVGlwb0FycmllbmRvPzogbnVtYmVyO1xyXG4gICAgICAgIElkVGlwb0FycmllbmRvVGlwbz86IHN0cmluZztcclxuICAgICAgICBEZXNjcmlwY2lvbj86IHN0cmluZztcclxuICAgICAgICBQcm9kdWN0b3NEZXQ/OiBQcm9kdWN0b0RldGFsbGVSb3dbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3Rvc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTm9tYnJlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0dlc3Rpb24uUHJvZHVjdG9zJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICcgQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnIEFkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICcqJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICcgQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIE5vbWJyZSA9IFwiTm9tYnJlXCIsXHJcbiAgICAgICAgICAgIEZvdG8gPSBcIkZvdG9cIixcclxuICAgICAgICAgICAgQ2FudGlkYWQgPSBcIkNhbnRpZGFkXCIsXHJcbiAgICAgICAgICAgIFByZWNpbyA9IFwiUHJlY2lvXCIsXHJcbiAgICAgICAgICAgIEl2YSA9IFwiSXZhXCIsXHJcbiAgICAgICAgICAgIEFjdGl2byA9IFwiQWN0aXZvXCIsXHJcbiAgICAgICAgICAgIEdhcmFudGlhID0gXCJHYXJhbnRpYVwiLFxyXG4gICAgICAgICAgICBJZFRpcG9BcnJpZW5kbyA9IFwiSWRUaXBvQXJyaWVuZG9cIixcclxuICAgICAgICAgICAgSWRUaXBvQXJyaWVuZG9UaXBvID0gXCJJZFRpcG9BcnJpZW5kb1RpcG9cIixcclxuICAgICAgICAgICAgRGVzY3JpcGNpb24gPSBcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3Rvc0RldCA9IFwiUHJvZHVjdG9zRGV0XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3Rvc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0dlc3Rpb24vUHJvZHVjdG9zJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3Rvc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3Rvc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQcm9kdWN0b3NSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHJvZHVjdG9zUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkdlc3Rpb24vUHJvZHVjdG9zL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkdlc3Rpb24vUHJvZHVjdG9zL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkdlc3Rpb24vUHJvZHVjdG9zL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiR2VzdGlvbi9Qcm9kdWN0b3MvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiR2VzdGlvbi9Qcm9kdWN0b3MvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlByb2R1Y3Rvc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZWdpb25lc0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0dlc3Rpb24uUmVnaW9uZXMnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWdpb25lc0Zvcm0ge1xyXG4gICAgICAgIE5vbWJyZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNpZ2xhOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlZ2lvbmVzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnR2VzdGlvbi5SZWdpb25lcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVnaW9uZXNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZWdpb25lc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlZ2lvbmVzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOb21icmUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2lnbGEnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlZ2lvbmVzUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBOb21icmU/OiBzdHJpbmc7XHJcbiAgICAgICAgU2lnbGE/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZWdpb25lc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTm9tYnJlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0dlc3Rpb24uUmVnaW9uZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnR2VzdGlvbi5SZWdpb25lcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8UmVnaW9uZXNSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJlZ2lvbmVzUm93PignR2VzdGlvbi5SZWdpb25lcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIE5vbWJyZSA9IFwiTm9tYnJlXCIsXHJcbiAgICAgICAgICAgIFNpZ2xhID0gXCJTaWdsYVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZWdpb25lc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0dlc3Rpb24vUmVnaW9uZXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UmVnaW9uZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSZWdpb25lc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSZWdpb25lc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSZWdpb25lc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJHZXN0aW9uL1JlZ2lvbmVzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkdlc3Rpb24vUmVnaW9uZXMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiR2VzdGlvbi9SZWdpb25lcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkdlc3Rpb24vUmVnaW9uZXMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiR2VzdGlvbi9SZWdpb25lcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UmVnaW9uZXNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgVGlwb0FycmllbmRvQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnR2VzdGlvbi5UaXBvQXJyaWVuZG8nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUaXBvQXJyaWVuZG9Gb3JtIHtcclxuICAgICAgICBUaXBvOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ29kaWdvOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGV0YWxsZXM6IFNlcmVuaXR5LkNoZWNrTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIEZvdG86IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUaXBvQXJyaWVuZG9Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdHZXN0aW9uLlRpcG9BcnJpZW5kbyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVGlwb0FycmllbmRvRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVGlwb0FycmllbmRvRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkNoZWNrTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShUaXBvQXJyaWVuZG9Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcG8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kaWdvJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RldGFsbGVzJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZvdG8nLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRpcG9BcnJpZW5kb1JvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGlwbz86IHN0cmluZztcclxuICAgICAgICBDb2RpZ28/OiBzdHJpbmc7XHJcbiAgICAgICAgRGV0YWxsZXM/OiBzdHJpbmc7XHJcbiAgICAgICAgRm90bz86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRpcG9BcnJpZW5kb1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGlwbyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdHZXN0aW9uLlRpcG9BcnJpZW5kbyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdHZXN0aW9uLlRpcG9BcnJpZW5kbyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8VGlwb0FycmllbmRvUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxUaXBvQXJyaWVuZG9Sb3c+KCdHZXN0aW9uLlRpcG9BcnJpZW5kbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnKic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIFRpcG8gPSBcIlRpcG9cIixcclxuICAgICAgICAgICAgQ29kaWdvID0gXCJDb2RpZ29cIixcclxuICAgICAgICAgICAgRGV0YWxsZXMgPSBcIkRldGFsbGVzXCIsXHJcbiAgICAgICAgICAgIEZvdG8gPSBcIkZvdG9cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVGlwb0FycmllbmRvU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnR2VzdGlvbi9UaXBvQXJyaWVuZG8nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VGlwb0FycmllbmRvUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VGlwb0FycmllbmRvUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFRpcG9BcnJpZW5kb1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUaXBvQXJyaWVuZG9Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiR2VzdGlvbi9UaXBvQXJyaWVuZG8vQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiR2VzdGlvbi9UaXBvQXJyaWVuZG8vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiR2VzdGlvbi9UaXBvQXJyaWVuZG8vRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJHZXN0aW9uL1RpcG9BcnJpZW5kby9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJHZXN0aW9uL1RpcG9BcnJpZW5kby9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VGlwb0FycmllbmRvU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFRpcG9zQWRpY2lvbmFsZXNDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdHZXN0aW9uLlRpcG9zQWRpY2lvbmFsZXMnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUaXBvc0FkaWNpb25hbGVzRm9ybSB7XHJcbiAgICAgICAgVGl0dWxvOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVzY3JpcGNpb246IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgIE9yZGVuOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUaXBvc0FkaWNpb25hbGVzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnR2VzdGlvbi5UaXBvc0FkaWNpb25hbGVzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFUaXBvc0FkaWNpb25hbGVzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVGlwb3NBZGljaW9uYWxlc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShUaXBvc0FkaWNpb25hbGVzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdUaXR1bG8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcGNpb24nLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnT3JkZW4nLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRpcG9zQWRpY2lvbmFsZXNSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIERlc2NyaXBjaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIFRpdHVsbz86IHN0cmluZztcclxuICAgICAgICBPcmRlbj86IG51bWJlcjtcclxuICAgICAgICBNb3N0cmFyUG9yY2VudGFqZT86IGJvb2xlYW47XHJcbiAgICAgICAgTW9zdHJhckltcG9ydGU/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVGlwb3NBZGljaW9uYWxlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGl0dWxvJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0dlc3Rpb24uVGlwb3NBZGljaW9uYWxlcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdHZXN0aW9uLlRpcG9zQWRpY2lvbmFsZXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFRpcG9zQWRpY2lvbmFsZXNSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFRpcG9zQWRpY2lvbmFsZXNSb3c+KCdHZXN0aW9uLlRpcG9zQWRpY2lvbmFsZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJyonO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxyXG4gICAgICAgICAgICBEZXNjcmlwY2lvbiA9IFwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICAgICAgVGl0dWxvID0gXCJUaXR1bG9cIixcclxuICAgICAgICAgICAgT3JkZW4gPSBcIk9yZGVuXCIsXHJcbiAgICAgICAgICAgIE1vc3RyYXJQb3JjZW50YWplID0gXCJNb3N0cmFyUG9yY2VudGFqZVwiLFxyXG4gICAgICAgICAgICBNb3N0cmFySW1wb3J0ZSA9IFwiTW9zdHJhckltcG9ydGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVGlwb3NBZGljaW9uYWxlc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0dlc3Rpb24vVGlwb3NBZGljaW9uYWxlcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxUaXBvc0FkaWNpb25hbGVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VGlwb3NBZGljaW9uYWxlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxUaXBvc0FkaWNpb25hbGVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFRpcG9zQWRpY2lvbmFsZXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiR2VzdGlvbi9UaXBvc0FkaWNpb25hbGVzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkdlc3Rpb24vVGlwb3NBZGljaW9uYWxlcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJHZXN0aW9uL1RpcG9zQWRpY2lvbmFsZXMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJHZXN0aW9uL1RpcG9zQWRpY2lvbmFsZXMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiR2VzdGlvbi9UaXBvc0FkaWNpb25hbGVzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UaXBvc0FkaWNpb25hbGVzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2V0TmV4dE51bWJlclJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUHJlZml4Pzogc3RyaW5nO1xyXG4gICAgICAgIExlbmd0aD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHZXROZXh0TnVtYmVyUmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2Uge1xyXG4gICAgICAgIE51bWJlcj86IG51bWJlcjtcclxuICAgICAgICBTZXJpYWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDaGFuZ2VQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnT2xkUGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRm9yZ290UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuRW1haWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRm9yZ290UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuTG9naW4nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxvZ2luRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTG9naW5Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTG9naW5Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlc2V0UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXNldFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXNldFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRva2VuPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcEZvcm0ge1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1FbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuU2lnblVwJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTaWduVXBGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTaWduVXBGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNpZ25VcEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybUVtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY3JpcHRVc2VyRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pbj86IGJvb2xlYW47XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG4gICAgZXhwb3J0IGNsYXNzIEhpc3RvcmlhQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU2l0aW8uSGlzdG9yaWEnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yaWFGb3JtIHtcclxuICAgICAgICBUaXR1bG86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBCb2R5OiBTZXJlbml0eS5IdG1sQ29udGVudEVkaXRvcjtcclxuICAgICAgICBPcmRlbjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSGlzdG9yaWFGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTaXRpby5IaXN0b3JpYSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghSGlzdG9yaWFGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBIaXN0b3JpYUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5IdG1sQ29udGVudEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShIaXN0b3JpYUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVGl0dWxvJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JvZHknLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnT3JkZW4nLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBIaXN0b3JpYVJvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGl0dWxvPzogc3RyaW5nO1xyXG4gICAgICAgIEJvZHk/OiBzdHJpbmc7XHJcbiAgICAgICAgT3JkZW4/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBIaXN0b3JpYVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGl0dWxvJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1NpdGlvLkhpc3RvcmlhJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnKic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIFRpdHVsbyA9IFwiVGl0dWxvXCIsXHJcbiAgICAgICAgICAgIEJvZHkgPSBcIkJvZHlcIixcclxuICAgICAgICAgICAgT3JkZW4gPSBcIk9yZGVuXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBIaXN0b3JpYVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1NpdGlvL0hpc3RvcmlhJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEhpc3RvcmlhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8SGlzdG9yaWFSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8SGlzdG9yaWFSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8SGlzdG9yaWFSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU2l0aW8vSGlzdG9yaWEvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU2l0aW8vSGlzdG9yaWEvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU2l0aW8vSGlzdG9yaWEvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTaXRpby9IaXN0b3JpYS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTaXRpby9IaXN0b3JpYS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+SGlzdG9yaWFTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG4gICAgZXhwb3J0IGNsYXNzIE5vc290cm9zQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU2l0aW8uTm9zb3Ryb3MnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTm9zb3Ryb3NGb3JtIHtcclxuICAgICAgICBUaXR1bG86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBCb2R5OiBTZXJlbml0eS5IdG1sQ29udGVudEVkaXRvcjtcclxuICAgICAgICBDb210YXJpbzogU2VyZW5pdHkuSHRtbENvbnRlbnRFZGl0b3I7XHJcbiAgICAgICAgSWNvbm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBGb3RvOiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTm9zb3Ryb3NGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTaXRpby5Ob3NvdHJvcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTm9zb3Ryb3NGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBOb3NvdHJvc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5IdG1sQ29udGVudEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTm9zb3Ryb3NGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpdHVsbycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdCb2R5JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbXRhcmlvJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ljb25vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZvdG8nLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBOb3NvdHJvc1JvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGl0dWxvPzogc3RyaW5nO1xyXG4gICAgICAgIEJvZHk/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29tdGFyaW8/OiBzdHJpbmc7XHJcbiAgICAgICAgSWNvbm8/OiBzdHJpbmc7XHJcbiAgICAgICAgRm90bz86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE5vc290cm9zUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdUaXR1bG8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU2l0aW8uTm9zb3Ryb3MnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICcqJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgVGl0dWxvID0gXCJUaXR1bG9cIixcclxuICAgICAgICAgICAgQm9keSA9IFwiQm9keVwiLFxyXG4gICAgICAgICAgICBDb210YXJpbyA9IFwiQ29tdGFyaW9cIixcclxuICAgICAgICAgICAgSWNvbm8gPSBcIkljb25vXCIsXHJcbiAgICAgICAgICAgIEZvdG8gPSBcIkZvdG9cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5TaXRpbyB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE5vc290cm9zU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU2l0aW8vTm9zb3Ryb3MnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Tm9zb3Ryb3NSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxOb3NvdHJvc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxOb3NvdHJvc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxOb3NvdHJvc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJTaXRpby9Ob3NvdHJvcy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJTaXRpby9Ob3NvdHJvcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJTaXRpby9Ob3NvdHJvcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlNpdGlvL05vc290cm9zL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlNpdGlvL05vc290cm9zL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Ob3NvdHJvc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5TaXRpbyB7XHJcbiAgICBleHBvcnQgY2xhc3MgTnVlc3Ryb3NDbGllbnRlc0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NpdGlvLk51ZXN0cm9zQ2xpZW50ZXMnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTnVlc3Ryb3NDbGllbnRlc0Zvcm0ge1xyXG4gICAgICAgIExvZ286IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIE5vbWJyZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFVybDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBOdWVzdHJvc0NsaWVudGVzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2l0aW8uTnVlc3Ryb3NDbGllbnRlcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTnVlc3Ryb3NDbGllbnRlc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIE51ZXN0cm9zQ2xpZW50ZXNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTnVlc3Ryb3NDbGllbnRlc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTG9nbycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOb21icmUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXJsJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTnVlc3Ryb3NDbGllbnRlc1JvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTG9nbz86IHN0cmluZztcclxuICAgICAgICBOb21icmU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXJsPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTnVlc3Ryb3NDbGllbnRlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTm9tYnJlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1NpdGlvLk51ZXN0cm9zQ2xpZW50ZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICcqJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgTG9nbyA9IFwiTG9nb1wiLFxyXG4gICAgICAgICAgICBOb21icmUgPSBcIk5vbWJyZVwiLFxyXG4gICAgICAgICAgICBVcmwgPSBcIlVybFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTnVlc3Ryb3NDbGllbnRlc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1NpdGlvL051ZXN0cm9zQ2xpZW50ZXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TnVlc3Ryb3NDbGllbnRlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE51ZXN0cm9zQ2xpZW50ZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TnVlc3Ryb3NDbGllbnRlc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxOdWVzdHJvc0NsaWVudGVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlNpdGlvL051ZXN0cm9zQ2xpZW50ZXMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU2l0aW8vTnVlc3Ryb3NDbGllbnRlcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJTaXRpby9OdWVzdHJvc0NsaWVudGVzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU2l0aW8vTnVlc3Ryb3NDbGllbnRlcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTaXRpby9OdWVzdHJvc0NsaWVudGVzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5OdWVzdHJvc0NsaWVudGVzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBjbGFzcyBTbGlkZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTaXRpby5TbGlkZXInO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyRm9ybSB7XHJcbiAgICAgICAgVGl0dWxvOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3ViVGl0dWxvOiBTZXJlbml0eS5IdG1sQ29udGVudEVkaXRvcjtcclxuICAgICAgICBGb3RvOiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2xpZGVyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2l0aW8uU2xpZGVyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTbGlkZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTbGlkZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuSHRtbENvbnRlbnRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNsaWRlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVGl0dWxvJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1YlRpdHVsbycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdGb3RvJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBUaXR1bG8/OiBzdHJpbmc7XHJcbiAgICAgICAgU3ViVGl0dWxvPzogc3RyaW5nO1xyXG4gICAgICAgIEZvdG8/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTbGlkZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1RpdHVsbyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdTaXRpby5TbGlkZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICcqJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgVGl0dWxvID0gXCJUaXR1bG9cIixcclxuICAgICAgICAgICAgU3ViVGl0dWxvID0gXCJTdWJUaXR1bG9cIixcclxuICAgICAgICAgICAgRm90byA9IFwiRm90b1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU2xpZGVyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU2l0aW8vU2xpZGVyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNsaWRlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNsaWRlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxTbGlkZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8U2xpZGVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlNpdGlvL1NsaWRlci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJTaXRpby9TbGlkZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU2l0aW8vU2xpZGVyL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU2l0aW8vU2xpZGVyL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlNpdGlvL1NsaWRlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+U2xpZGVyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlRleHRzIHtcclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBEYiB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVBlcm1pc3Npb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVHJhbnNsYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbnRpdHlQbHVyYWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPdmVycmlkZUNvbmZpcm1hdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVDaGFuZ2VzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0TGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElzQWN0aXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdERpcmVjdG9yeVVwZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRIYXNoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRTYWx0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnRlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclBlcm1pc3Npb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQ29tbW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUHJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByZWZlcmVuY2VUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclByZWZlcmVuY2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBHZXN0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBBcnJpZW5kb1dpemFyZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2l1ZGFkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uR2FyYW50aWE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXJlY2Npb25PYnJhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmVjaGFEZXZvbHVjaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmVjaGFJbmljaW86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHYXJhbnRpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRDbGllbnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRQcm9kdWN0bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEl2YTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5ldG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWdpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQXJyaWVuZG9zIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDaXVkYWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25HYXJhbnRpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpcmVjY2lvbk9icmE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGZWNoYURldm9sdWNpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGZWNoYUluaWNpbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdhcmFudGlhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZENsaWVudGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZFByb2R1Y3RvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXZhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmV0bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlZ2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRvdGFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBBdHJpYnV0b3Mge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZGlnbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXBjaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbXBvcnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUG9yY2llbnRvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDbGllbnRlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2l1ZGFkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlyZWNjaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRU1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vbWJyZUZhbnRhc2lhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmF6b25Tb2NpYWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSdXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZWxlZm9ubzogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUHJvZHVjdG9EZXRhbGxlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkQXRyaWJ1dG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZFByb2R1Y3RvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRUaXBvQWRpY2lvbmFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRUaXBvQWRpY2lvbmFsVGl0dWxvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVmFsb3I6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFByb2R1Y3RvcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FudGlkYWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwY2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvdG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHYXJhbnRpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRUaXBvQXJyaWVuZG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZFRpcG9BcnJpZW5kb1RpcG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJdmE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb21icmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcmVjaW86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0b3NEZXQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlZ2lvbmVzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vbWJyZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ2xhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUaXBvQXJyaWVuZG8ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZGlnbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERldGFsbGVzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm90bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGlwbzogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVGlwb3NBZGljaW9uYWxlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcGNpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vc3RyYXJJbXBvcnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW9zdHJhclBvcmNlbnRhamU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmRlbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdHVsbzogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgU2l0aW8ge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEhpc3RvcmlhIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCb2R5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmRlbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdHVsbzogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTm9zb3Ryb3Mge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJvZHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb210YXJpbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvdG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJY29ubzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0dWxvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBOdWVzdHJvc0NsaWVudGVzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ286IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb21icmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcmw6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm90bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3ViVGl0dWxvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0dWxvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRm9ybXMge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEZvcmdvdFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTG9naW4ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZhY2Vib29rQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHb29nbGVCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPUjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWVtYmVyTWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduSW5CdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduVXBCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgU2lnblVwIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY2NlcHRUZXJtczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRlRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IExvZ291dExpbms6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2l0ZVRpdGxlOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgU2l0ZSB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBY2Nlc3NEZW5pZWQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0NoYW5nZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFja1Blcm1pc3Npb25zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RMb2dnZWRJbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGFnZVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQmFzaWNQcm9ncmVzc0RpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYW5jZWxUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGxlYXNlV2FpdDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJ1bGtTZXJ2aWNlQWN0aW9uIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbEhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsU3VjY2Vzc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFcnJvckNvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RoaW5nVG9Qcm9jZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb21lSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzQ291bnQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEYXNoYm9hcmQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGVudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTGF5b3V0IHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckNvcHlyaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVySW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyUmlnaHRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsU2V0dGluZ3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFja0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWRMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3c6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93TGlnaHQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRQZXJtaXNzaW9uc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFJvbGVzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXZva2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGVEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVmFsaWRhdGlvbkVycm9yIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFNpdGlvIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDb250YWN0OiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IE91ckNsaWVudHM6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgUGhvbmVDb250YWN0OiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNlcnZpY2VzOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgVmFsaWRhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uRXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ2FudEZpbmRVc2VyV2l0aEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZUZvcmVpZ25LZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbENvbmZpcm06IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxJblVzZTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkQWN0aXZhdGVUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkUmVzZXRUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVQcmltYXJ5S2V5RXJyb3I6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBSZW50YWxfU1BBWydUZXh0cyddID0gUS5wcm94eVRleHRzKFRleHRzLCAnJywge0RiOntBZG1pbmlzdHJhdGlvbjp7TGFuZ3VhZ2U6e0lkOjEsTGFuZ3VhZ2VJZDoxLExhbmd1YWdlTmFtZToxfSxSb2xlOntSb2xlSWQ6MSxSb2xlTmFtZToxfSxSb2xlUGVybWlzc2lvbjp7UGVybWlzc2lvbktleToxLFJvbGVJZDoxLFJvbGVQZXJtaXNzaW9uSWQ6MSxSb2xlUm9sZU5hbWU6MX0sVHJhbnNsYXRpb246e0N1c3RvbVRleHQ6MSxFbnRpdHlQbHVyYWw6MSxLZXk6MSxPdmVycmlkZUNvbmZpcm1hdGlvbjoxLFNhdmVDaGFuZ2VzQnV0dG9uOjEsU291cmNlTGFuZ3VhZ2U6MSxTb3VyY2VUZXh0OjEsVGFyZ2V0TGFuZ3VhZ2U6MSxUYXJnZXRUZXh0OjF9LFVzZXI6e0Rpc3BsYXlOYW1lOjEsRW1haWw6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxMYXN0RGlyZWN0b3J5VXBkYXRlOjEsUGFzc3dvcmQ6MSxQYXNzd29yZENvbmZpcm06MSxQYXNzd29yZEhhc2g6MSxQYXNzd29yZFNhbHQ6MSxTb3VyY2U6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sQ29tbW9uOntVc2VyUHJlZmVyZW5jZTp7TmFtZToxLFByZWZlcmVuY2VUeXBlOjEsVXNlcklkOjEsVXNlclByZWZlcmVuY2VJZDoxLFZhbHVlOjF9fSxHZXN0aW9uOntBcnJpZW5kb1dpemFyZDp7Q2l1ZGFkOjEsQ29uR2FyYW50aWE6MSxEaXJlY2Npb25PYnJhOjEsRmVjaGFEZXZvbHVjaW9uOjEsRmVjaGFJbmljaW86MSxHYXJhbnRpYToxLElkOjEsSWRDbGllbnRlOjEsSWRQcm9kdWN0bzoxLEl2YToxLE5ldG86MSxSZWdpb246MSxUb3RhbDoxfSxBcnJpZW5kb3M6e0NpdWRhZDoxLENvbkdhcmFudGlhOjEsRGlyZWNjaW9uT2JyYToxLEZlY2hhRGV2b2x1Y2lvbjoxLEZlY2hhSW5pY2lvOjEsR2FyYW50aWE6MSxJZDoxLElkQ2xpZW50ZToxLElkUHJvZHVjdG86MSxJdmE6MSxOZXRvOjEsUmVnaW9uOjEsVG90YWw6MX0sQXRyaWJ1dG9zOntDb2RpZ286MSxEZXNjcmlwY2lvbjoxLElkOjEsSW1wb3J0ZToxLFBvcmNpZW50bzoxfSxDbGllbnRlczp7Q2l1ZGFkOjEsRGlyZWNjaW9uOjEsRU1haWw6MSxJZDoxLE5vbWJyZUZhbnRhc2lhOjEsUmF6b25Tb2NpYWw6MSxSdXQ6MSxUZWxlZm9ubzoxfSxQcm9kdWN0b0RldGFsbGU6e0lkOjEsSWRBdHJpYnV0bzoxLElkUHJvZHVjdG86MSxJZFRpcG9BZGljaW9uYWw6MSxJZFRpcG9BZGljaW9uYWxUaXR1bG86MSxWYWxvcjoxfSxQcm9kdWN0b3M6e0FjdGl2bzoxLENhbnRpZGFkOjEsRGVzY3JpcGNpb246MSxGb3RvOjEsR2FyYW50aWE6MSxJZDoxLElkVGlwb0FycmllbmRvOjEsSWRUaXBvQXJyaWVuZG9UaXBvOjEsSXZhOjEsTm9tYnJlOjEsUHJlY2lvOjEsUHJvZHVjdG9zRGV0OjF9LFJlZ2lvbmVzOntJZDoxLE5vbWJyZToxLFNpZ2xhOjF9LFRpcG9BcnJpZW5kbzp7Q29kaWdvOjEsRGV0YWxsZXM6MSxGb3RvOjEsSWQ6MSxUaXBvOjF9LFRpcG9zQWRpY2lvbmFsZXM6e0Rlc2NyaXBjaW9uOjEsSWQ6MSxNb3N0cmFySW1wb3J0ZToxLE1vc3RyYXJQb3JjZW50YWplOjEsT3JkZW46MSxUaXR1bG86MX19LFNpdGlvOntIaXN0b3JpYTp7Qm9keToxLElkOjEsT3JkZW46MSxUaXR1bG86MX0sTm9zb3Ryb3M6e0JvZHk6MSxDb210YXJpbzoxLEZvdG86MSxJY29ubzoxLElkOjEsVGl0dWxvOjF9LE51ZXN0cm9zQ2xpZW50ZXM6e0lkOjEsTG9nbzoxLE5vbWJyZToxLFVybDoxfSxTbGlkZXI6e0ZvdG86MSxJZDoxLFN1YlRpdHVsbzoxLFRpdHVsbzoxfX19LEZvcm1zOntNZW1iZXJzaGlwOntDaGFuZ2VQYXNzd29yZDp7Rm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxGb3Jnb3RQYXNzd29yZDp7QmFja1RvTG9naW46MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sTG9naW46e0ZhY2Vib29rQnV0dG9uOjEsRm9yZ290UGFzc3dvcmQ6MSxGb3JtVGl0bGU6MSxHb29nbGVCdXR0b246MSxPUjoxLFJlbWVtYmVyTWU6MSxTaWduSW5CdXR0b246MSxTaWduVXBCdXR0b246MX0sUmVzZXRQYXNzd29yZDp7QmFja1RvTG9naW46MSxFbWFpbFN1YmplY3Q6MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LFNpZ25VcDp7QWNjZXB0VGVybXM6MSxBY3RpdmF0ZUVtYWlsU3ViamVjdDoxLEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6MSxCYWNrVG9Mb2dpbjoxLENvbmZpcm1FbWFpbDoxLENvbmZpcm1QYXNzd29yZDoxLERpc3BsYXlOYW1lOjEsRW1haWw6MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFBhc3N3b3JkOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfX19LE5hdmlnYXRpb246e0xvZ291dExpbms6MSxTaXRlVGl0bGU6MX0sU2l0ZTp7QWNjZXNzRGVuaWVkOntDbGlja1RvQ2hhbmdlVXNlcjoxLENsaWNrVG9Mb2dpbjoxLExhY2tQZXJtaXNzaW9uczoxLE5vdExvZ2dlZEluOjEsUGFnZVRpdGxlOjF9LEJhc2ljUHJvZ3Jlc3NEaWFsb2c6e0NhbmNlbFRpdGxlOjEsUGxlYXNlV2FpdDoxfSxCdWxrU2VydmljZUFjdGlvbjp7QWxsSGFkRXJyb3JzRm9ybWF0OjEsQWxsU3VjY2Vzc0Zvcm1hdDoxLENvbmZpcm1hdGlvbkZvcm1hdDoxLEVycm9yQ291bnQ6MSxOb3RoaW5nVG9Qcm9jZXNzOjEsU29tZUhhZEVycm9yc0Zvcm1hdDoxLFN1Y2Nlc3NDb3VudDoxfSxEYXNoYm9hcmQ6e0NvbnRlbnREZXNjcmlwdGlvbjoxfSxMYXlvdXQ6e0Zvb3RlckNvcHlyaWdodDoxLEZvb3RlckluZm86MSxGb290ZXJSaWdodHM6MSxHZW5lcmFsU2V0dGluZ3M6MSxMYW5ndWFnZToxLFRoZW1lOjEsVGhlbWVCbGFjazoxLFRoZW1lQmxhY2tMaWdodDoxLFRoZW1lQmx1ZToxLFRoZW1lQmx1ZUxpZ2h0OjEsVGhlbWVHcmVlbjoxLFRoZW1lR3JlZW5MaWdodDoxLFRoZW1lUHVycGxlOjEsVGhlbWVQdXJwbGVMaWdodDoxLFRoZW1lUmVkOjEsVGhlbWVSZWRMaWdodDoxLFRoZW1lWWVsbG93OjEsVGhlbWVZZWxsb3dMaWdodDoxfSxSb2xlUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxFZGl0QnV0dG9uOjEsU2F2ZVN1Y2Nlc3M6MX0sVXNlckRpYWxvZzp7RWRpdFBlcm1pc3Npb25zQnV0dG9uOjEsRWRpdFJvbGVzQnV0dG9uOjF9LFVzZXJQZXJtaXNzaW9uRGlhbG9nOntEaWFsb2dUaXRsZToxLEdyYW50OjEsUGVybWlzc2lvbjoxLFJldm9rZToxLFNhdmVTdWNjZXNzOjF9LFVzZXJSb2xlRGlhbG9nOntEaWFsb2dUaXRsZToxLFNhdmVTdWNjZXNzOjF9LFZhbGlkYXRpb25FcnJvcjp7VGl0bGU6MX19LFNpdGlvOntBZGRyZXNzOjEsQ29udGFjdDoxLEVtYWlsOjEsT3VyQ2xpZW50czoxLFBob25lQ29udGFjdDoxLFNlcnZpY2VzOjF9LFZhbGlkYXRpb246e0F1dGhlbnRpY2F0aW9uRXJyb3I6MSxDYW50RmluZFVzZXJXaXRoRW1haWw6MSxDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDoxLERlbGV0ZUZvcmVpZ25LZXlFcnJvcjoxLEVtYWlsQ29uZmlybToxLEVtYWlsSW5Vc2U6MSxJbnZhbGlkQWN0aXZhdGVUb2tlbjoxLEludmFsaWRSZXNldFRva2VuOjEsTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDoxLFNhdmVQcmltYXJ5S2V5RXJyb3I6MX19KTtcclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTGFuZ3VhZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBMYW5ndWFnZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtMYW5ndWFnZVJvdy5GaWVsZHMuTGFuZ3VhZ2VOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxSb2xlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJvbGVGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSb2xlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUm9sZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBSb2xlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRvb2xiYXJCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuZ2V0VG9vbGJhckJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLkVkaXRCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBSb2xlUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVJRDogdGhpcy5lbnRpdHkuUm9sZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5lbnRpdHkuUm9sZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlJvbGVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUm9sZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtSb2xlUm93LkZpZWxkcy5Sb2xlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiAoPFVzZXJQZXJtaXNzaW9uUm93PnsgUGVybWlzc2lvbktleTogeCB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiB4LlBlcm1pc3Npb25LZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFRyYW5zbGF0aW9uSXRlbSwgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25cIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVHJhbnNsYXRpb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYXNDaGFuZ2VzOiBib29sZWFuO1xyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgc291cmNlTGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjsgXHJcbiAgICAgICAgcHJpdmF0ZSB0YXJnZXRMYW5ndWFnZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2VLZXk6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbigna2V5dXAuJyArIHRoaXMudW5pcXVlTmFtZSArICcgY2hhbmdlLicgKyB0aGlzLnVuaXF1ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAnaW5wdXQuY3VzdG9tLXRleHQnLCBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IFEudHJpbVRvTnVsbCgkKGUudGFyZ2V0KS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldEl0ZW1CeUlkKCQoZS50YXJnZXQpLmRhdGEoJ2tleScpKS5DdXN0b21UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICBsZXQgZG9uZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnc291cmNlLXRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uQ3VzdG9tVGV4dCA9IGl0ZW0uU291cmNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlSXRlbShpdGVtLktleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFEuaXNUcmltbWVkRW1wdHkoaXRlbS5DdXN0b21UZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChRLnRyaW1Ub0VtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgPT09IFEudHJpbVRvRW1wdHkoaXRlbS5Tb3VyY2VUZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLk92ZXJyaWRlQ29uZmlybWF0aW9uJyksIGRvbmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3RhcmdldC10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uQ3VzdG9tVGV4dCA9IGl0ZW0uVGFyZ2V0VGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlSXRlbShpdGVtLktleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFEuaXNUcmltbWVkRW1wdHkoaXRlbS5DdXN0b21UZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChRLnRyaW1Ub0VtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgPT09IFEudHJpbVRvRW1wdHkoaXRlbS5UYXJnZXRUZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLk92ZXJyaWRlQ29uZmlybWF0aW9uJyksIGRvbmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpOiBTbGljay5Db2x1bW5bXSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbXTtcclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHsgZmllbGQ6ICdLZXknLCB3aWR0aDogMzAwLCBzb3J0YWJsZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdTb3VyY2VUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEub3V0ZXJIdG1sKCQoJzxhLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NvdXJjZS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoY3R4LnZhbHVlIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnQ3VzdG9tVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gUS5vdXRlckh0bWwoJCgnPGlucHV0Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY3VzdG9tLXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGN0eC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1rZXknLCBjdHguaXRlbS5LZXkpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RhcmdldFRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxhLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygndGFyZ2V0LXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0OiBTZXJlbml0eS5Mb29rdXBFZGl0b3JPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbG9va3VwS2V5OiAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uU291cmNlTGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UgPSBTZXJlbml0eS5XaWRnZXQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsID0+IGVsLmFwcGVuZFRvKHRoaXMudG9vbGJhci5lbGVtZW50KS5hdHRyKCdwbGFjZWhvbGRlcicsICctLS0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5UYXJnZXRMYW5ndWFnZScpICsgJyAtLS0nKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVDaGFuZ2VzKGxhbmd1YWdlOiBzdHJpbmcpOiBQcm9taXNlTGlrZTxhbnk+IHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zW2l0ZW0uS2V5XSA9IGl0ZW0uQ3VzdG9tVGV4dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShUcmFuc2xhdGlvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFRhcmdldExhbmd1YWdlSUQ6IGxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNcclxuICAgICAgICAgICAgfSkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IFEudHJpbVRvTnVsbChsYW5ndWFnZSkgfHwgJ2ludmFyaWFudCc7XHJcbiAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoJ1VzZXIgdHJhbnNsYXRpb25zIGluIFwiJyArIGxhbmd1YWdlICtcclxuICAgICAgICAgICAgICAgICAgICAnXCIgbGFuZ3VhZ2UgYXJlIHNhdmVkIHRvIFwidXNlci50ZXh0cy4nICtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSArICcuanNvblwiICcgKyAnZmlsZSB1bmRlciBcIn4vQXBwX0RhdGEvdGV4dHMvXCInLCAnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLnZpZXcucGFyYW1zO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlNvdXJjZUxhbmd1YWdlSUQgPSB0aGlzLnNvdXJjZUxhbmd1YWdlLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlS2V5ID0gdGhpcy50YXJnZXRMYW5ndWFnZS52YWx1ZSB8fCAnJztcclxuICAgICAgICAgICAgcmVxdWVzdC5UYXJnZXRMYW5ndWFnZUlEID0gdGhpcy50YXJnZXRMYW5ndWFnZUtleTtcclxuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdTdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNhdmVDaGFuZ2VzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBlID0+IHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwcGx5LWNoYW5nZXMtYnV0dG9uJ1xyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIChmaWVsZCwgc2VhcmNoVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBUcmFuc2xhdGlvbkl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKCFzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2QgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzO1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoaW5nID0gc2QodGhpcy5zZWFyY2hUZXh0KS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWF0Y2goc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3RyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hpbmcpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBRLmlzRW1wdHlPck51bGwoc2VhcmNoaW5nKSB8fCBtYXRjaChpdGVtLktleSkgfHwgbWF0Y2goaXRlbS5Tb3VyY2VUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2goaXRlbS5UYXJnZXRUZXh0KSB8fCBtYXRjaChpdGVtLkN1c3RvbVRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBVc2VyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBVc2VyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDcgY2hhcmFjdGVycyFcIjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlICE9IHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVGhlIHBhc3N3b3JkcyBlbnRlcmVkIGRvZXNuJ3QgbWF0Y2ghXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRvb2xiYXJCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuZ2V0VG9vbGJhckJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFJvbGVzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcm9sZXMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS11c2VycyB0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclJvbGVEaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFBlcm1pc3Npb25zQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZWRpdC1yb2xlcy1idXR0b24nKS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlc2UgZmllbGRzIGFyZSBvbmx5IHJlcXVpcmVkIGluIG5ldyByZWNvcmQgbW9kZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVXNlclwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBVc2VyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbVXNlclJvdy5GaWVsZHMuVXNlcm5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkF1dGhvcml6YXRpb24ge1xyXG4gICAgZXhwb3J0IGRlY2xhcmUgbGV0IHVzZXJEZWZpbml0aW9uOiBTY3JpcHRVc2VyRGVmaW5pdGlvbjtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aG9yaXphdGlvbiwgJ3VzZXJEZWZpbml0aW9uJywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRSZW1vdGVEYXRhKCdVc2VyRGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25DaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkRhdGFHcmlkPFBlcm1pc3Npb25DaGVja0l0ZW0sIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgYnlQYXJlbnRLZXk6IFEuR3JvdXBpbmc8UGVybWlzc2lvbkNoZWNrSXRlbT47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+ID0ge307XHJcbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uS2V5cyA9IHRoaXMuZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcGVybWlzc2lvbktleXMubWFwKGtleSA9PiA8UGVybWlzc2lvbkNoZWNrSXRlbT57XHJcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIFBhcmVudEtleTogdGhpcy5nZXRQYXJlbnRLZXkoa2V5KSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZUJ5S2V5W2tleV0sXHJcbiAgICAgICAgICAgICAgICBHcmFudFJldm9rZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIElzR3JvdXA6IGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5UGFyZW50S2V5ID0gUS50b0dyb3VwaW5nKGl0ZW1zLCB4ID0+IHguUGFyZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGdyYW50OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGl0ZW0uR3JhbnRSZXZva2UgPT09IGdyYW50KSA/ICcgY2hlY2tlZCcgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBkZXNjLmZpbHRlcih4ID0+IHguR3JhbnRSZXZva2UgPT09IGdyYW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlc2MubGVuZ3RoID09PSBncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkIHBhcnRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlT3JJbXBsaWNpdChrZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trZXldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXTtcclxuICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLkdyYW50UmV2b2tlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhbnRDb3VudCA9IFEuY291bnQoZGVzYywgeCA9PiB4LkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KHguS2V5KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSBkZXNjLmxlbmd0aCB8fCBkZXNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYWxsb3cnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkZW55JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGl0ZW0uR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdChpdGVtLktleSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChncmFudGVkID8gJyBhbGxvdycgOiAnIGRlbnknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5QZXJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RpdGxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogU2VyZW5pdHkuU2xpY2tGb3JtYXR0aW5nLnRyZWVUb2dnbGUoKCkgPT4gdGhpcy52aWV3LCB4ID0+IHguS2V5LCBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzID0gdGhpcy5nZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImVmZmVjdGl2ZS1wZXJtaXNzaW9uICcgKyBrbGFzcyArICdcIj4nICsgUS5odG1sRW5jb2RlKGN0eC52YWx1ZSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkdyYW50JyksIGZpZWxkOiAnR3JhbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczEgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nY2hlY2stYm94IGdyYW50IG5vLWZsb2F0IFwiICsga2xhc3MxICsgXCInPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dSZXZva2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlJldm9rZScpLCBmaWVsZDogJ1Jldm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMiA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImNoZWNrLWJveCByZXZva2Ugbm8tZmxvYXQgJyArIGtsYXNzMiArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnNldEluZGVudHMoaXRlbXMsIHggPT4geC5LZXksIHggPT4geC5QYXJlbnRLZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5maWx0ZXJCeUlkKGl0ZW0sIHRoaXMudmlldywgeCA9PiB4LlBhcmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaENvbnRhaW5zKGl0ZW0pIHx8IGl0ZW0uSXNHcm91cCAmJiBRLmFueSh0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIGZhbHNlKSwgeCA9PiB0aGlzLm1hdGNoQ29udGFpbnMoeCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hDb250YWlucyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0uVGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERlc2NlbmRhbnRzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGV4Y2x1ZGVHcm91cHM6IGJvb2xlYW4pOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0YWNrID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnlQYXJlbnRLZXlbaS5LZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZUdyb3VwcyB8fCAhY2hpbGQuSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGUsIHJvdywgY2VsbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci50b2dnbGVDbGljayhlLCByb3csIGNlbGwsIHRoaXMudmlldywgeCA9PiB4LktleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ID0gdGFyZ2V0Lmhhc0NsYXNzKCdncmFudCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYW50IHx8IHRhcmdldC5oYXNDbGFzcygncmV2b2tlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE9yUGFydGlhbCA9IHRhcmdldC5oYXNDbGFzcygnY2hlY2tlZCcpIHx8IHRhcmdldC5oYXNDbGFzcygncGFydGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkT3JQYXJ0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBncmFudCAhPT0gY2hlY2tlZE9yUGFydGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBvZiB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuR3JhbnRSZXZva2UgPSBncmFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IGdyYW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLmludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQYXJlbnRLZXkoa2V5KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0ga2V5Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaWR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS50cmltVG9OdWxsKHRleHQpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gPHN0cmluZ1tdPlEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMnKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlV2l0aEdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdChzLmxlbmd0aCAtIDEpID09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQnlLZXlbc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W3NdID0gUS5jb2FsZXNjZShRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIHMpLCBzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwVGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBncm91cCArIHBhcnRzW2ldICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbZ3JvdXBdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGl0bGUgPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtncm91cF0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbZ3JvdXBdID0gZ3JvdXBUaXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtzXSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W3NdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKHgsIHkpID0+IFEudHVya2lzaExvY2FsZUNvbXBhcmUodGl0bGVXaXRoR3JvdXBbeF0sIHRpdGxlV2l0aEdyb3VwW3ldKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZSgpOiBVc2VyUGVybWlzc2lvblJvd1tdIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFVzZXJQZXJtaXNzaW9uUm93W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLkdyYW50UmV2b2tlICE9IG51bGwgJiYgaXRlbS5LZXkuY2hhckF0KGl0ZW0uS2V5Lmxlbmd0aCAtIDEpICE9ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgUGVybWlzc2lvbktleTogaXRlbS5LZXksIEdyYW50ZWQ6IGl0ZW0uR3JhbnRSZXZva2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFVzZXJQZXJtaXNzaW9uUm93W10pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQocm93LlBlcm1pc3Npb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuR3JhbnRSZXZva2UgPSBRLmNvYWxlc2NlKHJvdy5HcmFudGVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3JvbGVQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgICAgIGdldCByb2xlUGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByb2xlUGVybWlzc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zW2tdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaW1wbGljaXRQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PFEuRGljdGlvbmFyeTxib29sZWFuPj4gPSB7fTtcclxuXHJcbiAgICAgICAgc2V0IGltcGxpY2l0UGVybWlzc2lvbnModmFsdWU6IFEuRGljdGlvbmFyeTxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBvZiBsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXVtzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgc2hvd1Jldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tJdGVtIHtcclxuICAgICAgICBQYXJlbnRLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIElzR3JvdXA/OiBib29sZWFuO1xyXG4gICAgICAgIEdyYW50UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdFJvbGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMucm9sZVBlcm1pc3Npb25zID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkNoZWNrVHJlZUVkaXRvcjxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4sIGFueT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGl2OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGl2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3ModGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUcmVlSXRlbXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSb2xlUm93LmdldExvb2t1cCgpLml0ZW1zLm1hcChyb2xlID0+IDxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJvbGUuUm9sZUlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByb2xlLlJvbGVOYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkgJiZcclxuICAgICAgICAgICAgICAgIChRLmlzRW1wdHlPck51bGwodGhpcy5zZWFyY2hUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS50ZXh0IHx8ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJSb2xlRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBSb2xlQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclJvbGVEaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFJvbGVDaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1JvbGVzJykpO1xyXG5cclxuICAgICAgICAgICAgVXNlclJvbGVTZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklEXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuc2VydmljZVJlcXVlc3QoJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuU2F2ZVN1Y2Nlc3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuRGlhbG9nVGl0bGUnKSwgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBpZD0nfl9Sb2xlcyc+PC9kaXY+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVEaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ6IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0OiBzdHJpbmdbXVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgayBvZiBBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy5nZXRMb29rdXAoKS5pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoay5MYW5ndWFnZUlkICE9PSAnZW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChbay5JZC50b1N0cmluZygpLCBrLkxhbmd1YWdlTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5TY3JpcHRJbml0aWFsaXphdGlvbiB7XHJcbiAgICBRLkNvbmZpZy5yZXNwb25zaXZlRGlhbG9ncyA9IHRydWU7XHJcbiAgICBRLkNvbmZpZy5yb290TmFtZXNwYWNlcy5wdXNoKCdSZW50YWxfU1BBJyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuICAgIFNlcmVuaXR5Lkh0bWxDb250ZW50RWRpdG9yLkNLRWRpdG9yQmFzZVBhdGggPSBcIn4vU2VyZW5pdHkuQXNzZXRzL1NjcmlwdHMvY2tlZGl0b3IvXCI7XHJcblxyXG4gICAgaWYgKCQuZm5bJ2NvbG9yYm94J10pIHtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heFdpZHRoID0gXCI5NSVcIjtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heEhlaWdodCA9IFwiOTUlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9uZXJyb3IgPSBRLkVycm9ySGFuZGxpbmcucnVudGltZUVycm9ySGFuZGxlcjtcclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQmFzaWNQcm9ncmVzc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1Byb2dyZXNzQmFyJykucHJvZ3Jlc3NiYXIoe1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICAgICAgICAgIGNoYW5nZTogKGUsIHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ5SWQoJ1Byb2dyZXNzTGFiZWwnKS50ZXh0KHRoaXMudmFsdWUgKyAnIC8gJyArIHRoaXMubWF4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2FuY2VsbGVkOiBib29sZWFuO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IG1heCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKCkucHJvZ3Jlc3NiYXIoJ29wdGlvbicsICdtYXgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKCkucHJvZ3Jlc3NiYXIoJ29wdGlvbicsICdtYXgnLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ5SWQoJ1Byb2dyZXNzQmFyJykucHJvZ3Jlc3NiYXIoJ3ZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKCkucHJvZ3Jlc3NiYXIoJ3ZhbHVlJywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmRpYWxvZygpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpYWxvZygpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNhbmNlbFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGdldERpYWxvZ09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEudGV4dCgnU2l0ZS5CYXNpY1Byb2dyZXNzRGlhbG9nLlBsZWFzZVdhaXQnKTtcclxuICAgICAgICAgICAgb3B0LndpZHRoID0gNjAwO1xyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLnVpLWRpYWxvZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUgLnVpLWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ29wYWNpdHknLCAnMC41Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaWFsb2coJ29wdGlvbicsICd0aXRsZScsIFEudHJpbVRvTnVsbCh0aGlzLmNhbmNlbFRpdGxlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ1NpdGUuQmFzaWNQcm9ncmVzc0RpYWxvZy5DYW5jZWxUaXRsZScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdERpYWxvZygpIHtcclxuICAgICAgICAgICAgc3VwZXIuaW5pdERpYWxvZygpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLnVpLWRpYWxvZycpLmZpbmQoJy51aS1kaWFsb2ctdGl0bGViYXItY2xvc2UnKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ncy1EaWFsb2dDb250ZW50IHMtQmFzaWNQcm9ncmVzc0RpYWxvZ0NvbnRlbnQnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxkaXYgaWQ9J35fU3RhdHVzVGV4dCcgY2xhc3M9J3N0YXR1cy10ZXh0JyA+PC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPGRpdiBpZD0nfl9Qcm9ncmVzc0JhcicgY2xhc3M9J3Byb2dyZXNzLWJhcic+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgaWQ9J35fUHJvZ3Jlc3NMYWJlbCcgY2xhc3M9J3Byb2dyZXNzLWxhYmVsJyA+PC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQ29tbW9uIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQnVsa1NlcnZpY2VBY3Rpb24ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQga2V5czogc3RyaW5nW107XHJcbiAgICAgICAgcHJvdGVjdGVkIHF1ZXVlOiBzdHJpbmdbXTtcclxuICAgICAgICBwcm90ZWN0ZWQgcXVldWVJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIHByb3RlY3RlZCBwcm9ncmVzc0RpYWxvZzogQmFzaWNQcm9ncmVzc0RpYWxvZztcclxuICAgICAgICBwcm90ZWN0ZWQgcGVuZGluZ1JlcXVlc3RzOiBudW1iZXI7XHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbXBsZXRlZFJlcXVlc3RzOiBudW1iZXI7XHJcbiAgICAgICAgcHJvdGVjdGVkIGVycm9yQnlLZXk6IFEuRGljdGlvbmFyeTxTZXJlbml0eS5TZXJ2aWNlRXJyb3I+O1xyXG4gICAgICAgIHByaXZhdGUgc3VjY2Vzc0NvdW50O1xyXG4gICAgICAgIHByaXZhdGUgZXJyb3JDb3VudDtcclxuICAgICAgICBwdWJsaWMgZG9uZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVByb2dyZXNzRGlhbG9nKCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nID0gbmV3IEJhc2ljUHJvZ3Jlc3NEaWFsb2coKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cubWF4ID0gdGhpcy5rZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy52YWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29uZmlybWF0aW9uRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLkNvbmZpcm1hdGlvbkZvcm1hdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbmZpcm1hdGlvbk1lc3NhZ2UodGFyZ2V0Q291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KHRoaXMuZ2V0Q29uZmlybWF0aW9uRm9ybWF0KCksIHRhcmdldENvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtKHRhcmdldENvdW50LCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgUS5jb25maXJtKHRoaXMuZ2V0Q29uZmlybWF0aW9uTWVzc2FnZSh0YXJnZXRDb3VudCksIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Tm90aGluZ1RvUHJvY2Vzc01lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uTm90aGluZ1RvUHJvY2VzcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG5vdGhpbmdUb1Byb2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIFEubm90aWZ5RXJyb3IodGhpcy5nZXROb3RoaW5nVG9Qcm9jZXNzTWVzc2FnZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRQYXJhbGxlbFJlcXVlc3RzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCYXRjaFNpemUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHN0YXJ0UGFyYWxsZWxFeGVjdXRpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvZ3Jlc3NEaWFsb2coKTtcclxuICAgICAgICAgICAgdGhpcy5zdWNjZXNzQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkUmVxdWVzdHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQnlLZXkgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IHRoaXMua2V5cy5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB2YXIgcGFyYWxsZWxSZXF1ZXN0cyA9IHRoaXMuZ2V0UGFyYWxsZWxSZXF1ZXN0cygpO1xyXG4gICAgICAgICAgICB3aGlsZSAocGFyYWxsZWxSZXF1ZXN0cy0tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlTmV4dEJhdGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzZXJ2aWNlQ2FsbENsZWFudXAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLS07XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkUmVxdWVzdHMrKztcclxuXHJcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IFEudGV4dCgodGhpcy5wcm9ncmVzc0RpYWxvZy5jYW5jZWxsZWQgP1xyXG4gICAgICAgICAgICAgICAgJ1NpdGUuQmFzaWNQcm9ncmVzc0RpYWxvZy5DYW5jZWxUaXRsZScgOiAnU2l0ZS5CYXNpY1Byb2dyZXNzRGlhbG9nLlBsZWFzZVdhaXQnKSk7XHJcblxyXG4gICAgICAgICAgICB0aXRsZSArPSAnICgnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdWNjZXNzQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSArPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uU3VjY2Vzc0NvdW50JyksIHRoaXMuc3VjY2Vzc0NvdW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Y2Nlc3NDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlICs9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5FcnJvckNvdW50JyksIHRoaXMuZXJyb3JDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cudGl0bGUgPSB0aXRsZSArICcpJztcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy52YWx1ZSA9IHRoaXMuc3VjY2Vzc0NvdW50ICsgdGhpcy5lcnJvckNvdW50O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3NEaWFsb2cuY2FuY2VsbGVkICYmIHRoaXMucHJvZ3Jlc3NEaWFsb2cudmFsdWUgPCB0aGlzLmtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVOZXh0QmF0Y2goKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nUmVxdWVzdHMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZXhlY3V0ZUZvckJhdGNoKGJhdGNoOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGV4ZWN1dGVOZXh0QmF0Y2goKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXRjaFNpemUgPSB0aGlzLmdldEJhdGNoU2l6ZSgpO1xyXG4gICAgICAgICAgICB2YXIgYmF0Y2ggPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYXRjaC5sZW5ndGggPj0gYmF0Y2hTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucXVldWVJbmRleCA+PSB0aGlzLnF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhdGNoLnB1c2godGhpcy5xdWV1ZVt0aGlzLnF1ZXVlSW5kZXgrK10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmF0Y2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUZvckJhdGNoKGJhdGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEFsbEhhZEVycm9yc0Zvcm1hdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5BbGxIYWRFcnJvcnNGb3JtYXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzaG93QWxsSGFkRXJyb3JzKCkge1xyXG4gICAgICAgICAgICBRLm5vdGlmeUVycm9yKFEuZm9ybWF0KHRoaXMuZ2V0QWxsSGFkRXJyb3JzRm9ybWF0KCksIHRoaXMuZXJyb3JDb3VudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNvbWVIYWRFcnJvcnNGb3JtYXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uU29tZUhhZEVycm9yc0Zvcm1hdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNob3dTb21lSGFkRXJyb3JzKCkge1xyXG4gICAgICAgICAgICBRLm5vdGlmeVdhcm5pbmcoUS5mb3JtYXQodGhpcy5nZXRTb21lSGFkRXJyb3JzRm9ybWF0KCksIHRoaXMuc3VjY2Vzc0NvdW50LCB0aGlzLmVycm9yQ291bnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRBbGxTdWNjZXNzRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLkFsbFN1Y2Nlc3NGb3JtYXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzaG93QWxsU3VjY2VzcygpIHtcclxuICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFEuZm9ybWF0KHRoaXMuZ2V0QWxsU3VjY2Vzc0Zvcm1hdCgpLCB0aGlzLnN1Y2Nlc3NDb3VudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNob3dSZXN1bHRzKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID09PSAwICYmIHRoaXMuc3VjY2Vzc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGhpbmdUb1Byb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb3VudCA+IDAgJiYgdGhpcy5zdWNjZXNzQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FsbEhhZEVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U29tZUhhZEVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dBbGxTdWNjZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXhlY3V0ZShrZXlzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleXMgPSBrZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RoaW5nVG9Qcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maXJtKHRoaXMua2V5cy5sZW5ndGgsICgpID0+IHRoaXMuc3RhcnRQYXJhbGxlbEV4ZWN1dGlvbigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldF9zdWNjZXNzQ291bnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Y2Nlc3NDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldF9zdWNjZXNzQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X2Vycm9yQ291bnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yQ291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRfZXJyb3JDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkRpYWxvZ1V0aWxzIHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBwZW5kaW5nQ2hhbmdlc0NvbmZpcm1hdGlvbihlbGVtZW50OiBKUXVlcnksIGhhc1BlbmRpbmdDaGFuZ2VzOiAoKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZWxlbWVudC5vbignZGlhbG9nYmVmb3JlY2xvc2UgcGFuZWxiZWZvcmVjbG9zZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghU2VyZW5pdHkuV1guaGFzT3JpZ2luYWxFdmVudChlKSB8fCAhaGFzUGVuZGluZ0NoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFEuY29uZmlybSgnWW91IGhhdmUgcGVuZGluZyBjaGFuZ2VzLiBTYXZlIHRoZW0/JyxcclxuICAgICAgICAgICAgICAgICgpID0+IGVsZW1lbnQuZmluZCgnZGl2LnNhdmUtYW5kLWNsb3NlLWJ1dHRvbicpLmNsaWNrKCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25ObzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcygndWktZGlhbG9nLWNvbnRlbnQnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGlhbG9nKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50Lmhhc0NsYXNzKCdzLVBhbmVsJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2cuY2xvc2VQYW5lbChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5Db21tb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRm9ybWF0dGVyKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbnVtU2VsZWN0Rm9ybWF0dGVyIGltcGxlbWVudHMgU2xpY2suRm9ybWF0dGVyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvd0NsZWFyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1hdChjdHg6IFNsaWNrLkZvcm1hdHRlckNvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIGVudW1UeXBlID0gU2VyZW5pdHkuRW51bVR5cGVSZWdpc3RyeS5nZXQodGhpcy5lbnVtS2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzYiA9IFwiPHNlbGVjdD5cIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dDbGVhcikge1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gJzxvcHRpb24gdmFsdWU9XCJcIj4nO1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gUS5odG1sRW5jb2RlKHRoaXMuZW1wdHlJdGVtVGV4dCB8fCBRLnRleHQoXCJDb250cm9scy5TZWxlY3RFZGl0b3IuRW1wdHlJdGVtVGV4dFwiKSk7XHJcbiAgICAgICAgICAgICAgICBzYiArPSAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgeCBvZiBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZmlsdGVyKHYgPT4gIWlzTmFOKHBhcnNlSW50KHYsIDEwKSkpKSB7XHJcbiAgICAgICAgICAgICAgICBzYiArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyB4ICsgJ1wiJztcclxuICAgICAgICAgICAgICAgIGlmICh4ID09IGN0eC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICBzYiArPSBcIiBzZWxlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlbnVtVHlwZVt4XTtcclxuICAgICAgICAgICAgICAgIHNiICs9IFwiPlwiO1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gUS5odG1sRW5jb2RlKFEudHJ5R2V0VGV4dChcIkVudW1zLlwiICsgdGhpcy5lbnVtS2V5ICsgXCIuXCIgKyBuYW1lKSB8fCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHNiICs9IFwiPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNiICs9IFwiPC9zZWxlY3Q+XCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5vcHRpb24oKVxyXG4gICAgICAgIHB1YmxpYyBlbnVtS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLm9wdGlvbigpXHJcbiAgICAgICAgcHVibGljIGFsbG93Q2xlYXI6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLm9wdGlvbigpXHJcbiAgICAgICAgcHVibGljIGVtcHR5SXRlbVRleHQ6IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkNvbW1vbiB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGNlbEV4cG9ydE9wdGlvbnMge1xyXG4gICAgICAgIGdyaWQ6IFNlcmVuaXR5LkRhdGFHcmlkPGFueSwgYW55PjtcclxuICAgICAgICBzZXJ2aWNlOiBzdHJpbmc7XHJcbiAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiBib29sZWFuO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIGhpbnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgc2VwYXJhdG9yPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEV4Y2VsRXhwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogRXhjZWxFeHBvcnRPcHRpb25zKTogU2VyZW5pdHkuVG9vbEJ1dHRvbiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGludDogUS5jb2FsZXNjZShvcHRpb25zLmhpbnQsICdFeGNlbCcpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEuY29hbGVzY2Uob3B0aW9ucy50aXRsZSwgJycpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQteGxzeC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5vblZpZXdTdWJtaXQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JpZCA9IG9wdGlvbnMuZ3JpZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBRLmRlZXBDbG9uZShncmlkLmdldFZpZXcoKS5wYXJhbXMpIGFzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuVGFrZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5Ta2lwID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc29ydEJ5ID0gZ3JpZC5nZXRWaWV3KCkuc29ydEJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5Tb3J0ID0gc29ydEJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gZ3JpZC5nZXRHcmlkKCkuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMucHVzaChjb2x1bW4uaWQgfHwgY29sdW1uLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgUS5wb3N0VG9TZXJ2aWNlKHsgc2VydmljZTogb3B0aW9ucy5zZXJ2aWNlLCByZXF1ZXN0OiByZXF1ZXN0LCB0YXJnZXQ6ICdfYmxhbmsnIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogb3B0aW9ucy5zZXBhcmF0b3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5Db21tb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWRpdG9yKClcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLmVsZW1lbnQoXCI8ZGl2Lz5cIilcclxuICAgIGV4cG9ydCBjbGFzcyBHcmlkRWRpdG9yQmFzZTxURW50aXR5PiBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VEVudGl0eSwgYW55PlxyXG4gICAgICAgIGltcGxlbWVudHMgU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZSB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJfX2lkXCI7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG5leHRJZCA9IDE7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgaWQoZW50aXR5OiBURW50aXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoZW50aXR5IGFzIGFueSlbdGhpcy5nZXRJZFByb3BlcnR5KCldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5leHRJZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYFwiICsgdGhpcy5uZXh0SWQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzZXROZXdJZChlbnRpdHk6IFRFbnRpdHkpIHtcclxuICAgICAgICAgICAgZW50aXR5W3RoaXMuZ2V0SWRQcm9wZXJ0eSgpXSA9IHRoaXMuZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZShvcHQ6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPGFueT4sIGNhbGxiYWNrOiAocjogU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gb3B0LnJlcXVlc3QgYXMgU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VEVudGl0eT47XHJcbiAgICAgICAgICAgIHZhciByb3cgPSBRLmRlZXBDbG9uZShyZXF1ZXN0LkVudGl0eSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmlkKHJvdyk7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAocm93IGFzIGFueSlbdGhpcy5nZXRJZFByb3BlcnR5KCldID0gdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRW50aXR5KHJvdywgaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMudmlldy5nZXRJdGVtcygpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBRLmluZGV4T2YoaXRlbXMsIHggPT4gdGhpcy5pZCh4KSA9PT0gaWQpO1xyXG4gICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdID0gUS5kZWVwQ2xvbmUoe30gYXMgVEVudGl0eSwgaXRlbXNbaW5kZXhdLCByb3cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEVudGl0aWVzKGl0ZW1zKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soe30pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGRlbGV0ZUVudGl0eShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5kZWxldGVJdGVtKGlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGVFbnRpdHkocm93OiBURW50aXR5LCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNldEVudGl0aWVzKGl0ZW1zOiBURW50aXR5W10pIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROZXdFbnRpdHkoKTogVEVudGl0eSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fSBhcyBURW50aXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIHZhciBhZGRCdXR0b24gPSBRLnRyeUZpcnN0KGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSAnYWRkLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBpZiAoYWRkQnV0dG9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFkZEJ1dHRvbi5vbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5RGlhbG9nKHRoaXMuZ2V0SXRlbVR5cGUoKSwgZGxnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxvZyA9IGRsZyBhcyBHcmlkRWRpdG9yRGlhbG9nPFRFbnRpdHk+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cub25TYXZlID0gKG9wdCwgY2FsbGJhY2spID0+IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlckRpYWxvZ1JlYWRPbmx5KGRpYWxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5sb2FkRW50aXR5QW5kT3BlbkRpYWxvZyh0aGlzLmdldE5ld0VudGl0eSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnMuZmlsdGVyKHggPT4geC5jc3NDbGFzcyAhPSBcInJlZnJlc2gtYnV0dG9uXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGVkaXRJdGVtKGVudGl0eU9ySWQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICAgICAgdmFyIGlkID0gZW50aXR5T3JJZDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVudGl0eURpYWxvZyh0aGlzLmdldEl0ZW1UeXBlKCksIGRsZyA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gZGxnIGFzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT47XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cub25EZWxldGUgPSAob3B0LCBjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWxldGVFbnRpdHkoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe30pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJEaWFsb2dSZWFkT25seShkaWFsb2cpO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLm9uU2F2ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB0aGlzLnNhdmUob3B0LCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cubG9hZEVudGl0eUFuZE9wZW5EaWFsb2coaXRlbSk7XHJcbiAgICAgICAgICAgIH0pOztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRFZGl0VmFsdWUocHJvcGVydHksIHRhcmdldCkge1xyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcGVydHkubmFtZV0gPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEVkaXRWYWx1ZShzb3VyY2UsIHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2VbcHJvcGVydHkubmFtZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IFRFbnRpdHlbXSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5nZXRJZFByb3BlcnR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXcuZ2V0SXRlbXMoKS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IFEuZGVlcENsb25lKHgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0geVtwXTtcclxuICAgICAgICAgICAgICAgIGlmIChpZCAmJiBpZC50b1N0cmluZygpLmNoYXJBdCgwKSA9PSAnYCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHlbcF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBURW50aXR5W10pIHtcclxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmdldElkUHJvcGVydHkoKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKCh2YWx1ZSB8fCBbXSkubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSBRLmRlZXBDbG9uZSh4KTtcclxuICAgICAgICAgICAgICAgIGlmICgoeSBhcyBhbnkpW3BdID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgKHkgYXMgYW55KVtwXSA9IFwiYFwiICsgdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB5O1xyXG4gICAgICAgICAgICB9KSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0R3JpZENhbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluaXRpYWxUaXRsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBlbmFibGVEZWxldGVDb2x1bW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZURlbGV0ZUNvbHVtbigpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnRGVsZXRlIFJvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gJzxhIGNsYXNzPVwiaW5saW5lLWFjdGlvbiBkZWxldGUtcm93XCIgdGl0bGU9XCJkZWxldGVcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtbyB0ZXh0LXJlZFwiPjwvaT48L2E+JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAyNFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbTogVEVudGl0eSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHVzZXIgY2xpY2tzIFwiaVwiIGVsZW1lbnQsIGUuZy4gaWNvblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdpbmxpbmUtYWN0aW9uJykpXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc0NsYXNzKCdpbmxpbmUtYWN0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmFibGVEZWxldGVDb2x1bW4oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2RlbGV0ZS1yb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdDb250cm9scy5FbnRpdHlEaWFsb2cuRGVsZXRlQ29uZmlybWF0aW9uJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRW50aXR5KGl0ZW1bdGhpcy5nZXRJZFByb3BlcnR5KCldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHcmlkRWRpdG9yRGlhbG9nPFRFbnRpdHk+IGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFRFbnRpdHksIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJfX2lkXCI7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uU2F2ZTogKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LlNhdmVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIG9uRGVsZXRlOiAob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuRGVsZXRlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TYXZlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXBwbHkgY2hhbmdlcyBidXR0b24gZG9lc24ndCB3b3JrIHByb3Blcmx5IHdpdGggaW4tbWVtb3J5IGdyaWRzIHlldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hcHBseUNoYW5nZXNCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzQnV0dG9uLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVIYW5kbGVyKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LlNhdmVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2F2ZSAmJiB0aGlzLm9uU2F2ZShvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSGFuZGxlcihvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5EZWxldGVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWxldGUgJiYgdGhpcy5vbkRlbGV0ZShvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBSZW50YWxfU1BBIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgaXMgYW4gZWRpdG9yIHdpZGdldCBidXQgaXQgb25seSBkaXNwbGF5cyBhIHRleHQsIG5vdCBlZGl0cyBpdC5cclxuICAgICAqICBcclxuICAgICAqL1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWxlbWVudChcIjxkaXYvPlwiKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXRpY1RleHRCbG9jayBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxTdGF0aWNUZXh0QmxvY2tPcHRpb25zPlxyXG4gICAgICAgIGltcGxlbWVudHMgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdGlvbnM6IFN0YXRpY1RleHRCbG9ja09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGhpZGUgdGhlIGNhcHRpb24gbGFiZWwgZm9yIHRoaXMgZWRpdG9yIGlmIGluIGEgZm9ybS4gdWdseSBoYWNrXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZUxhYmVsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJy5jYXB0aW9uJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50Q29udGVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB1cGRhdGVFbGVtZW50Q29udGVudCgpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBRLmNvYWxlc2NlKHRoaXMub3B0aW9ucy50ZXh0LCB0aGlzLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGlzTG9jYWxUZXh0IGlzIHNldCwgdGV4dCBpcyBhY3R1YWxseSBhIGxvY2FsIHRleHQga2V5XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNMb2NhbFRleHQpXHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gUS50ZXh0KHRleHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gZG9uJ3QgaHRtbCBlbmNvZGUgaWYgaXNIdG1sIG9wdGlvbiBpcyB0cnVlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNIdG1sKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmh0bWwodGV4dCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC50ZXh0KHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnkgaW1wbGVtZW50aW5nIElTZXRFZGl0VmFsdWUgaW50ZXJmYWNlLCB3ZSBhbGxvdyB0aGlzIGVkaXRvciB0byBkaXNwbGF5IGl0cyBmaWVsZCB2YWx1ZS5cclxuICAgICAgICAgKiBCdXQgb25seSBkbyB0aGlzIHdoZW4gb3VyIHRleHQgY29udGVudCBpcyBub3QgZXhwbGljaXRseSBzZXQgaW4gb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRFZGl0VmFsdWUoc291cmNlOiBhbnksIHByb3BlcnR5OiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50ZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBRLmNvYWxlc2NlKHRoaXMub3B0aW9ucy50ZXh0LCBzb3VyY2VbcHJvcGVydHkubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50Q29udGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU3RhdGljVGV4dEJsb2NrT3B0aW9ucyB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGlzSHRtbDogYm9vbGVhbjtcclxuICAgICAgICBpc0xvY2FsVGV4dDogYm9vbGVhbjtcclxuICAgICAgICBoaWRlTGFiZWw6IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlU2VsZWN0aW9uIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHNlbGVjdDogSlF1ZXJ5LCBjdXJyZW50TGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihzZWxlY3QpO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gUS5jb2FsZXNjZShjdXJyZW50TGFuZ3VhZ2UsICdlbicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IFEuQ29uZmlnLmFwcGxpY2F0aW9uUGF0aDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGggIT0gJy8nICYmIFEuZW5kc1dpdGgocGF0aCwgJy8nKSlcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICQuY29va2llKCdMYW5ndWFnZVByZWZlcmVuY2UnLCBzZWxlY3QudmFsKCksIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IDM2NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFEuZ2V0TG9va3VwQXN5bmM8QWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3c+KCdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpLnRoZW4oeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVEuYW55KHguaXRlbXMsIHogPT4gei5MYW5ndWFnZUlkID09PSBjdXJyZW50TGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IGN1cnJlbnRMYW5ndWFnZS5sYXN0SW5kZXhPZignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2Uuc3Vic3RyKDAsIGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUS5hbnkoeC5pdGVtcywgeSA9PiB5Lkxhbmd1YWdlSWQgPT09IGN1cnJlbnRMYW5ndWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgb2YgeC5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgbC5MYW5ndWFnZUlkLCBsLkxhbmd1YWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnZhbChjdXJyZW50TGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFRoZW1lU2VsZWN0aW9uIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHNlbGVjdDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoID0gUS5Db25maWcuYXBwbGljYXRpb25QYXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGggJiYgcGF0aCAhPSAnLycgJiYgUS5lbmRzV2l0aChwYXRoLCAnLycpKVxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuY29va2llKCdUaGVtZVByZWZlcmVuY2UnLCBzZWxlY3QudmFsKCksIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IDM2NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRoZW1lID0gc2VsZWN0LnZhbCgpIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhcmtTaWRlYmFyID0gdGhlbWUuaW5kZXhPZignbGlnaHQnKSA8IDA7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NraW4tJyArIHRoaXMuZ2V0Q3VycmVudFRoZW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdza2luLScgKyB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoJ2Rhcmstc2lkZWJhcicsIGRhcmtTaWRlYmFyKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcygnbGlnaHQtc2lkZWJhcicsICFkYXJrU2lkZWJhcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnYmx1ZScsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVCbHVlJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibHVlLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsdWVMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAncHVycGxlJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVB1cnBsZScpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAncHVycGxlLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVB1cnBsZUxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdyZWQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUmVkJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdyZWQtbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUmVkTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2dyZWVuJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUdyZWVuJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdncmVlbi1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVHcmVlbkxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICd5ZWxsb3cnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lWWVsbG93JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICd5ZWxsb3ctbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lWWVsbG93TGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2JsYWNrJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsYWNrJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibGFjay1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVCbGFja0xpZ2h0JykpO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0LnZhbCh0aGlzLmdldEN1cnJlbnRUaGVtZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDdXJyZW50VGhlbWUoKSB7XHJcbiAgICAgICAgICAgIHZhciBza2luQ2xhc3MgPSBRLmZpcnN0KCgkKCdib2R5JykuYXR0cignY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKSwgeCA9PiBRLnN0YXJ0c1dpdGgoeCwgJ3NraW4tJykpO1xyXG4gICAgICAgICAgICBpZiAoc2tpbkNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tpbkNsYXNzLnN1YnN0cig1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdibHVlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuaXR5IHtcclxuICAgIFxyXG4gICAgQERlY29yYXRvcnMucmVnaXN0ZXJGb3JtYXR0ZXIoJ1NlcmVuaXR5LlNpbmdsZUxpbmVUZXh0Rm9ybWF0dGVyJylcclxuICAgIGV4cG9ydCBjbGFzcyBTaW5nbGVMaW5lVGV4dEZvcm1hdHRlciBpbXBsZW1lbnRzIFNsaWNrLkZvcm1hdHRlciB7XHJcbiAgICAgICAgZm9ybWF0KGN0eDogU2xpY2suRm9ybWF0dGVyQ29udGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2luZ2xlTGluZVRleHRGb3JtYXR0ZXIuZm9ybWF0VmFsdWUoY3R4LnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0VmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9ICQoJzxkaXYvPicpLmh0bWwodmFsdWUgfHwgJycpLnRleHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFEudG9TaW5nbGVMaW5lKHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5pdHkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBkaWFsb2cvcGFuZWwgYmFzZSBjbGFzcyB0aGF0IGVhc2lseSBnZW5lcmF0ZXMgYSB3aXphcmQgVUkgZnJvbSB0YWJzIGluIGEgZm9ybSBkZWZpbml0aW9uIChlLmcuIEZvcm0uY3MpXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaXphcmREaWFsb2c8VEVudGl0eSwgVE9wdGlvbnM+IGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFRPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgd2l6YXJkR3JpZDogU2VyZW5pdHkuUHJvcGVydHlHcmlkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IHdpemFyZCBkaWFsb2dcclxuICAgICAgICAgKiBAcGFyYW0gb3B0IG9wdGlvbnMsIG1pZ2h0IGJlIHVzZWQgYnkgZGVyaXZlZCBjbGFzc2VzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0PzogVE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jaGlsZHJlbigpLmFkZENsYXNzKFwid2l6YXJkLWhvcnpcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpemFyZEdyaWQgPSBuZXcgUHJvcGVydHlHcmlkKHRoaXMuYnlJZChcIldpemFyZEdyaWRcIiksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5R3JpZE9wdGlvbnMoKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpemFyZEdyaWQuZWxlbWVudC5jaGlsZHJlbihcIi5wcm9wZXJ0eS10YWJzXCIpLmNoaWxkcmVuKCdsaScpLmVhY2goKGksIGxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGxpID0gJChsaSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaCA9ICRsaS5jaGlsZHJlbignYScpLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICRsaS5odG1sKCcnKS5hdHRyKCdkYXRhLXN0ZXAnLCBpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAkKCc8c3BhbiBjbGFzcz1cImJhZGdlXCIvPicpLnRleHQoaSArIDEpLmFwcGVuZFRvKCRsaSk7XHJcbiAgICAgICAgICAgICAgICAkKCc8c3BhbiBjbGFzcz1cInRleHRcIi8+JykuaHRtbChoKS5hcHBlbmRUbygkbGkpO1xyXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4gY2xhc3M9XCJjaGV2cm9uXCIvPicpLmFwcGVuZFRvKCRsaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKFwiQ2FuY2VsQnV0dG9uXCIpLmNsaWNrKChlKSA9PiB0aGlzLmNvbmZpcm1DYW5jZWwoZSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKFwiQmFja0J1dHRvblwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1N0ZXAodGhpcy5zdGVwIC0gMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKFwiTmV4dEJ1dHRvblwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvU3RlcCh0aGlzLnN0ZXAgKyAxKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpemFyZEdyaWQuZWxlbWVudC5jaGlsZHJlbihcIi5wcm9wZXJ0eS10YWJzXCIpXHJcbiAgICAgICAgICAgICAgICAub24oXCJjbGlja1wiLCBcImxpXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGVwID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3N0ZXAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPiB0aGlzLnN0ZXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9TdGVwKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpemFyZEdyaWQubG9hZCh0aGlzLmdldEluaXRpYWxFbnRpdHkoKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2RpYWxvZ2JlZm9yZWNsb3NlIHBhbmVsYmVmb3JlY2xvc2UnLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghU2VyZW5pdHkuV1guaGFzT3JpZ2luYWxFdmVudChlKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtQ2FuY2VsKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGdldHMgcHJvcGVydHkgZ3JpZCBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFByb3BlcnR5R3JpZE9wdGlvbnMoKTogUHJvcGVydHlHcmlkT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZFByZWZpeDogdGhpcy5pZFByZWZpeCxcclxuICAgICAgICAgICAgICAgIG1vZGU6IFByb3BlcnR5R3JpZE1vZGUuaW5zZXJ0LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuZ2V0UHJvcGVydHlJdGVtcygpLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxUZXh0UHJlZml4OiB0aGlzLmdldExvY2FsVGV4dFByZWZpeCgpLFxyXG4gICAgICAgICAgICAgICAgdXNlQ2F0ZWdvcmllczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZ2V0cyBmb3JtIGtleSB0byB1c2UgdG8gbG9hZCBwcm9wZXJ0eSBpdGVtcyAvIHRhYnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGdldHMgbG9jYWwgdGV4dCBwcmVmaXggZm9yIGxhYmVsc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBnZXRzIGxpc3Qgb2YgcHJvcGVydHkgaXRlbXMgdG8gc2hvd24gb24gZm9ybSwgdXNlcyBmb3JtIGtleSB0byBsb2FkIGl0ZW1zIGJ5IGRlZmF1bHRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0UHJvcGVydHlJdGVtcygpOiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW1bXSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtS2V5ID0gdGhpcy5nZXRGb3JtS2V5KCk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtS2V5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuZ2V0Rm9ybShmb3JtS2V5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGdldHMgaW5pdGlhbCBlbnRpdHkgdG8gbG9hZCBvbnRvIGZvcm0sIG92ZXJyaWRlIHRoZXNlIHRvIGN1c3RvbWl6ZSBpbml0aWFsIGZvcm0gdmFsdWVzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluaXRpYWxFbnRpdHkoKTogVEVudGl0eSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fSBhcyBURW50aXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0cyBtYXhpbXVtIG51bWJlciBvZiBzdGVwcyBmcm9tXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldCBtYXhTdGVwcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2l6YXJkR3JpZC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCIucHJvcGVydHktdGFic1wiKVxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwibGlcIilcclxuICAgICAgICAgICAgICAgIC5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBtb3ZlcyB0byBhIHN0ZXAsIGJ5IGNhbGxpbmcgb25lIG9mIG5leHQsIGJhY2sgb3IgZmluaXNoIG1ldGhvZHMgYmFzZWQgb24gdGFyZ2V0IHN0ZXBcclxuICAgICAgICAgKiBAcGFyYW0gdG9TdGVwIHRoZSB0YXJnZXQgc3RlcCB0byBtb3ZlIHRvXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIG1vdmVUb1N0ZXAodG9TdGVwOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRvU3RlcCA9PSB0aGlzLnN0ZXAgfHwgdG9TdGVwIDwgMSB8fCB0b1N0ZXAgPiB0aGlzLm1heFN0ZXBzICsgMSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b1N0ZXAgPj0gdGhpcy5tYXhTdGVwcyArIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICh0b1N0ZXAgPCB0aGlzLnN0ZXAgPyB0aGlzLmJhY2sgOiB0aGlzLm5leHQpLmNhbGwodGhpcywgdG9TdGVwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3N0ZXA6IG51bWJlciA9IDE7XHJcblxyXG4gICAgICAgIC8vIGdldHMgY3VycmVudCBzdGVwXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldCBzdGVwKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGVwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0cyBjdXJyZW50IHN0ZXAgZGlyZWN0bHksIHNraXBwaW5nIGFueSB2YWxpZGF0aW9uXHJcbiAgICAgICAgcHJvdGVjdGVkIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdGVwTGluayh0aGlzLl9zdGVwKS5yZW1vdmVDbGFzcyhcImluIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdGVwUGFuZWwodGhpcy5fc3RlcCkucmVtb3ZlQ2xhc3MoXCJpbiBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RlcExpbmsodmFsdWUpLmFkZENsYXNzKFwiaW4gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFN0ZXBQYW5lbCh2YWx1ZSkuYWRkQ2xhc3MoXCJpbiBhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLnJlcXVpcmUtbGF5b3V0XCIpLnRyaWdnZXJIYW5kbGVyKFwibGF5b3V0XCIpO1xyXG4gICAgICAgICAgICB2YXIgczogbnVtYmVyO1xyXG4gICAgICAgICAgICBmb3IgKHMgPSB2YWx1ZTsgcyA8PSB0aGlzLl9zdGVwOyBzKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFN0ZXBMaW5rKHMpLnJlbW92ZUNsYXNzKFwiY29tcGxldGVcIikuZmluZChcInNwYW4uYmFkZ2VcIikucmVtb3ZlQ2xhc3MoXCJiYWRnZS1zdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHMgPSB0aGlzLl9zdGVwOyBzIDwgdmFsdWU7IHMrKylcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RlcExpbmsocykuYWRkQ2xhc3MoXCJjb21wbGV0ZVwiKS5maW5kKFwic3Bhbi5iYWRnZVwiKS5hZGRDbGFzcyhcImJhZGdlLXN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdGVwID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoXCJCYWNrQnV0dG9uXCIpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuX3N0ZXAgPD0gMSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnlJZChcIk5leHRCdXR0b25cIikuY2hpbGRyZW4oJy50eHQnKS50ZXh0KHRoaXMuX3N0ZXAgPT0gdGhpcy5tYXhTdGVwcyA/IFwiRmluaXNoXCIgOiBcIk5leHRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjYWxsZWQgdG8gcmVzZXQgdGhlIGZvcm0sIGFuZCBnbyBiYWNrIHRvIGZpcnN0IHN0ZXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgcmVzZXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMud2l6YXJkR3JpZC5sb2FkKHRoaXMuZ2V0SW5pdGlhbEVudGl0eSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGlzIGNhbGxlZCB3aGVuIHVzZXIgY2xpY2tzIHRoZSBGaW5pc2ggYnV0dG9uIChuZXh0IGJ1dHRvbiBvbiBsYXN0IHN0ZXApXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGZpbmlzaCgpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogbmV4dCBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdXNlciB0cmllcyB0byBnbyBmb3J3YXJkXHJcbiAgICAgICAgICogQHBhcmFtIHRvU3RlcCB0aGUgc3RlcCB1c2VyIGlzIHRyeWluZyB0byBtb3ZlIHRvLCB1c3VhbGx5IG9uZSBzdGVwIGFoZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIG5leHQodG9TdGVwOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwID0gdG9TdGVwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYmFjayBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdXNlciB0cmllcyB0byBnbyBiYWNrd2FyZFxyXG4gICAgICAgICAqIEBwYXJhbSB0b1N0ZXAgdGhlIHN0ZXAgdXNlciBpcyB0cnlpbmcgdG8gbW92ZSB0bywgdXN1YWxseSBvbmUgc3RlcCBiYWNrIGJ1dCBjYW4gYWxzbyBiZSBtdWx0aXBsZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBiYWNrKHRvU3RlcDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IHRvU3RlcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0U3RlcExpbmsoc3RlcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aXphcmRHcmlkLmVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcIi5wcm9wZXJ0eS10YWJzXCIpXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCJsaVwiKS5lcShzdGVwIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFN0ZXBQYW5lbChzdGVwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpemFyZEdyaWQuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiLnByb3BlcnR5LXBhbmVzXCIpXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oKS5lcShzdGVwIC0gMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG1ha2Ugc3VyZSBkZXJpdmVkIGNsYXNzZXMgdXNlIFdpemFyZERpYWxvZyB0ZW1wbGF0ZSxcclxuICAgICAgICAgKiBpZiB0aGV5IGRvbid0IGRlZmluZSBvbmUgb2YgdGhlaXIgb3duXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZhbGxiYWNrVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldFRlbXBsYXRlKFwiQ29tbW9uLldpemFyZERpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGdldHMgY2FuY2VsIGNvbmZpcm1hdGlvbiBtZXNzYWdlLCByZXR1cm4gbnVsbCB0byBkaXNhYmxlIGNvbmZpcm1hdGlvblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDYW5jZWxNZXNzYWdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLCv0VzdMOhcyBzZWd1cm8gZGUgcXVlIGRlc2VhcyBjYW5jZWxhciBlc3RlIGFzaXN0ZW50ZT9cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNvbmZpcm1zIHdoZW4gdXNlciB0cmllcyB0byBjYW5jZWwgb3IgY2xvc2UgdGhlIHdpemFyZFxyXG4gICAgICAgICAqIEBwYXJhbSBlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1DYW5jZWwoZTogSlF1ZXJ5RXZlbnRPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGNhbmNlbE1lc3NhZ2UgPSB0aGlzLmdldENhbmNlbE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgaWYgKCFjYW5jZWxNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgUS5jb25maXJtKGNhbmNlbE1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiogZ2V0cyBzYXZlIGVudGl0eSBmcm9tIGZvcm0sIG9wdGlvbmFsbHkgZnJvbSBhIGxpbWl0ZWQgbGlzdCBvZiBzdGVwcyAodGFicylcclxuICAgICAgICAgKiBAcGFyYW0gc3RlcHMgdGhlIGxpc3Qgb2Ygc3RlcHMgdG8gcmVhZCBkYXRhIGZyb20sIHBhc3MgbnVsbCB0byBnZXQgYWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNhdmVFbnRpdHkoc3RlcHM/OiBudW1iZXJbXSk6IFRFbnRpdHkge1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0ge30gYXMgVEVudGl0eTtcclxuICAgICAgICAgICAgdGhpcy53aXphcmRHcmlkLnNhdmUoZW50aXR5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGVwcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4U3RlcHMgPSB0aGlzLm1heFN0ZXBzO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbWF4U3RlcHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwcy5pbmRleE9mKGkpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFuZWwgPSB0aGlzLmdldFN0ZXBQYW5lbChpKTtcclxuICAgICAgICAgICAgICAgICAgICBwYW5lbC5maW5kKCcuZmllbGQnKS5lYWNoKCh6LCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSAkKGVsKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbnRpdHlbZmllbGRdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0cyB2YWx1ZSBvZiBjb21wYWN0IHN0ZXBzIG9wdGlvblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXQgY29tcGFjdFN0ZXBzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNoaWxkcmVuKCkuaGFzQ2xhc3MoXCJjb21wYWN0LXN0ZXBzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0cyB2YWx1ZSBvZiBjb21wYWN0IHN0ZXBzIG9wdGlvbiwgd2hlbiBpdCBpcyBvbiwgaW5hY3RpdmUgc3RlcCB0aXRsZXMgb25seSBzaG93XHJcbiAgICAgICAgLy8gbnVtYmVycyBhbmQgZ2V0cyB2aXNpYmxlIG9uIGhvdmVyLiB0aGlzIGlzIGJldHRlciB0aGVyZSBhcmUgbWFueSBzdGVwcyB0byBmaXRcclxuICAgICAgICBwcm90ZWN0ZWQgc2V0IGNvbXBhY3RTdGVwcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2hpbGRyZW4oKS50b2dnbGVDbGFzcyhcImNvbXBhY3Qtc3RlcHNcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJkZWNsYXJlIHZhciBqc1BERjtcclxuXHJcbm5hbWVzcGFjZSBSZW50YWxfU1BBLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBkZkV4cG9ydE9wdGlvbnMge1xyXG4gICAgICAgIGdyaWQ6IFNlcmVuaXR5LkRhdGFHcmlkPGFueSwgYW55PjtcclxuICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IGJvb2xlYW47XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgaGludD86IHN0cmluZztcclxuICAgICAgICBzZXBhcmF0b3I/OiBib29sZWFuO1xyXG4gICAgICAgIHJlcG9ydFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIHRpdGxlVG9wPzogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlRm9udFNpemU/OiBudW1iZXI7XHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgcGFnZU51bWJlcnM/OiBib29sZWFuO1xyXG4gICAgICAgIGNvbHVtblRpdGxlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICAgICAgdGFibGVPcHRpb25zPzoganNQREYuQXV0b1RhYmxlT3B0aW9ucztcclxuICAgICAgICBvdXRwdXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgYXV0b1ByaW50PzogYm9vbGVhbjtcclxuICAgICAgICBwcmludERhdGVUaW1lSGVhZGVyPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBkZkV4cG9ydEhlbHBlciB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvQXV0b1RhYmxlQ29sdW1ucyhzcmNDb2x1bW5zOiBTbGljay5Db2x1bW5bXSwgY29sdW1uU3R5bGVzOiB7IFtkYXRhS2V5OiBzdHJpbmddOiBqc1BERi5BdXRvVGFibGVTdHlsZXM7IH0sXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5UaXRsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNyY0NvbHVtbnMubWFwKHNyYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sOiBqc1BERi5BdXRvVGFibGVDb2x1bW4gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleTogc3JjLmlkIHx8IHNyYy5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc3JjLm5hbWUgfHwgJydcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtblRpdGxlcyAmJiBjb2x1bW5UaXRsZXNbY29sLmRhdGFLZXldICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgY29sLnRpdGxlID0gY29sdW1uVGl0bGVzW2NvbC5kYXRhS2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGU6IGpzUERGLkF1dG9UYWJsZVN0eWxlcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKChzcmMuY3NzQ2xhc3MgfHwgJycpLmluZGV4T2YoXCJhbGlnbi1yaWdodFwiKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmhhbGlnbiA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoc3JjLmNzc0NsYXNzIHx8ICcnKS5pbmRleE9mKFwiYWxpZ24tY2VudGVyXCIpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuaGFsaWduID0gJ2NlbnRlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uU3R5bGVzW2NvbC5kYXRhS2V5XSA9IHN0eWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2w7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9BdXRvVGFibGVEYXRhKGVudGl0aWVzOiBhbnlbXSwga2V5czogc3RyaW5nW10sIHNyY0NvbHVtbnM6IFNsaWNrLkNvbHVtbltdICkge1xyXG4gICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXRpZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRzdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2VsbCA9IDA7IGNlbGwgPCBzcmNDb2x1bW5zLmxlbmd0aDsgY2VsbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNyYyA9IHNyY0NvbHVtbnNbY2VsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsZCA9IHNyYy5maWVsZCB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tjZWxsXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyYy5mb3JtYXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9IHNyYy5mb3JtYXR0ZXIocm93LCBjZWxsLCBpdGVtW2ZsZF0sIHNyYywgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNyYy5mb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9IHNyYy5mb3JtYXQoeyByb3c6IHJvdywgY2VsbDogY2VsbCwgaXRlbTogaXRlbSwgdmFsdWU6IGl0ZW1bZmxkXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gaXRlbVtmbGRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCB8fCAoaHRtbC5pbmRleE9mKCc8JykgPCAwICYmIGh0bWwuaW5kZXhPZignJicpIDwgMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gaHRtbDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA9PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsLmNoaWxkcmVuWzBdKS5pcyhcIjppbnB1dFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSAkKGVsLmNoaWxkcmVuWzBdKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbC5jaGlsZHJlbikuaXMoJy5jaGVjay1ib3gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSAkKGVsLmNoaWxkcmVuKS5oYXNDbGFzcyhcImNoZWNrZWRcIikgPyBcIlhcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGVsLnRleHRDb250ZW50IHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvdysrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRzdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZXhwb3J0VG9QZGYob3B0aW9uczogUGRmRXhwb3J0T3B0aW9ucyk6IHZvaWQge1xyXG5cclxuICAgICAgICAgICAgdmFyIGcgPSBvcHRpb25zLmdyaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMub25WaWV3U3VibWl0KCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpbmNsdWRlQXV0b1RhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IFEuZGVlcENsb25lKGcudmlldy5wYXJhbXMpIGFzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0O1xyXG4gICAgICAgICAgICByZXF1ZXN0LlRha2UgPSAwO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlNraXAgPSAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNvcnRCeSA9IGcudmlldy5zb3J0Qnk7XHJcbiAgICAgICAgICAgIGlmIChzb3J0QnkgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuU29ydCA9IHNvcnRCeTtcclxuXHJcbiAgICAgICAgICAgIHZhciBncmlkQ29sdW1ucyA9IGcuc2xpY2tHcmlkLmdldENvbHVtbnMoKTtcclxuICAgICAgICAgICAgZ3JpZENvbHVtbnMgPSBncmlkQ29sdW1ucy5maWx0ZXIoeCA9PiB4LmlkICE9PSBcIl9fc2VsZWN0X19cIik7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LkluY2x1ZGVDb2x1bW5zID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGNvbHVtbiBvZiBncmlkQ29sdW1ucylcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMucHVzaChjb2x1bW4uaWQgfHwgY29sdW1uLmZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBnLnZpZXcudXJsLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkb2MgPSBuZXcganNQREYoJ2wnLCAncHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3JjQ29sdW1ucyA9IGdyaWRDb2x1bW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5TdHlsZXM6IHsgW2RhdGFLZXk6IHN0cmluZ106IGpzUERGLkF1dG9UYWJsZVN0eWxlczsgfSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gdG9BdXRvVGFibGVDb2x1bW5zKHNyY0NvbHVtbnMsIGNvbHVtblN0eWxlcywgb3B0aW9ucy5jb2x1bW5UaXRsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gY29sdW1ucy5tYXAoeCA9PiB4LmRhdGFLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdGllcyA9ICg8U2VyZW5pdHkuTGlzdFJlc3BvbnNlPGFueT4+cmVzcG9uc2UpLkVudGl0aWVzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdG9BdXRvVGFibGVEYXRhKGVudGl0aWVzLCBrZXlzLCBzcmNDb2x1bW5zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTaXplKG9wdGlvbnMudGl0bGVGb250U2l6ZSB8fCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTdHlsZSgnYm9sZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXBvcnRUaXRsZSA9IG9wdGlvbnMucmVwb3J0VGl0bGUgfHwgZy5nZXRUaXRsZSgpIHx8IFwiUmVwb3J0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KHJlcG9ydFRpdGxlLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRpdGxlVG9wIHx8IDI1LCB7IGhhbGlnbjogJ2NlbnRlcicgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VzRXhwID0gXCJ7e1R9fVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZU51bWJlcnMgPSBvcHRpb25zLnBhZ2VOdW1iZXJzID09IG51bGwgfHwgb3B0aW9ucy5wYWdlTnVtYmVycztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b09wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogeyB0b3A6IDI1LCBsZWZ0OiAyNSwgcmlnaHQ6IDI1LCBib3R0b206IHBhZ2VOdW1iZXJzID8gMjUgOiAzMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFk6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdsaW5lYnJlYWsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFBhZGRpbmc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ246ICdtaWRkbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblN0eWxlczogY29sdW1uU3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy50YWJsZU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZU51bWJlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvb3RlciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gZGF0YS5wYWdlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUb3RhbCBwYWdlIG51bWJlciBwbHVnaW4gb25seSBhdmFpbGFibGUgaW4ganNwZGYgdjEuMCtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jLnB1dFRvdGFsUGFnZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyBcIiAvIFwiICsgdG90YWxQYWdlc0V4cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KHN0ciwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gYXV0b09wdGlvbnMubWFyZ2luLmJvdHRvbSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9PcHRpb25zLmFmdGVyUGFnZUNvbnRlbnQgPSBmb290ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFByaW50IGhlYWRlciBvZiBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJpbnREYXRlVGltZUhlYWRlciA9PSBudWxsIHx8IG9wdGlvbnMucHJpbnREYXRlVGltZUhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmVmb3JlUGFnZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udFN0eWxlKCdub3JtYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5zZXRGb250U2l6ZSg4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRlIGFuZCB0aW1lIG9mIHRoZSByZXBvcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KFEuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpLCBcImRkLU1NLXl5eXkgSEg6bW1cIiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIGF1dG9PcHRpb25zLm1hcmdpbi5yaWdodCwgMTMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsaWduOiAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9PcHRpb25zLmJlZm9yZVBhZ2VDb250ZW50ID0gYmVmb3JlUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGUoY29sdW1ucywgZGF0YSwgYXV0b09wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvYy5wdXRUb3RhbFBhZ2VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5wdXRUb3RhbFBhZ2VzKHRvdGFsUGFnZXNFeHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5vdXRwdXQgfHwgb3B0aW9ucy5vdXRwdXQgPT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gb3B0aW9ucy5maWxlTmFtZSB8fCBvcHRpb25zLnJlcG9ydFRpdGxlIHx8IFwiezB9X3sxfS5wZGZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBRLmZvcm1hdChmaWxlTmFtZSwgZy5nZXRUaXRsZSgpIHx8IFwicmVwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLmZvcm1hdERhdGUobmV3IERhdGUoKSwgXCJ5eXl5TU1kZF9ISG1tXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnNhdmUoZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hdXRvUHJpbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvUHJpbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IG9wdGlvbnMub3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQgPT0gJ25ld3dpbmRvdycgfHwgJ19ibGFuaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9ICdkYXRhdXJsbmV3d2luZG93JztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvdXRwdXQgPT0gJ3dpbmRvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9ICdkYXRhdXJpJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLm91dHB1dChvdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbEJ1dHRvbihvcHRpb25zOiBQZGZFeHBvcnRPcHRpb25zKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPFNlcmVuaXR5LlRvb2xCdXR0b24+e1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBoaW50OiBvcHRpb25zLmhpbnQgfHwgJ1BERicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC1wZGYtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IGV4cG9ydFRvUGRmKG9wdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBvcHRpb25zLnNlcGFyYXRvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5jbHVkZUpzUERGKCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzUERGICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9ICQoXCJqc1BERlNjcmlwdFwiKTtcclxuICAgICAgICAgICAgaWYgKHNjcmlwdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgJChcIjxzY3JpcHQvPlwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0eXBlXCIsIFwidGV4dC9qYXZhc2NyaXB0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwianNQREZTY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIFEucmVzb2x2ZVVybChcIn4vU2NyaXB0cy9qc3BkZi5taW4uanNcIikpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuaGVhZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbmNsdWRlQXV0b1RhYmxlKCkge1xyXG4gICAgICAgICAgICBpbmNsdWRlSnNQREYoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNQREYgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgICAgIHR5cGVvZiAoanNQREYgYXMgYW55KS5BUEkgPT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIChqc1BERiBhcyBhbnkpLkFQSS5hdXRvVGFibGUgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gJChcImpzUERGQXV0b1RhYmxlU2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBpZiAoc2NyaXB0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAkKFwiPHNjcmlwdC8+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJqc1BERkF1dG9UYWJsZVNjcmlwdFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzcmNcIiwgUS5yZXNvbHZlVXJsKFwifi9TY3JpcHRzL2pzcGRmLnBsdWdpbi5hdXRvdGFibGUubWluLmpzXCIpKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGRvY3VtZW50LmhlYWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJkZWNsYXJlIHZhciBqc1BERjtcclxuXHJcbm5hbWVzcGFjZSBSZW50YWxfU1BBLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVwb3J0RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJlcG9ydERpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnQ6IFNlcmVuaXR5LlJlcG9ydGluZy5SZXBvcnRSZXRyaWV2ZVJlc3BvbnNlO1xyXG4gICAgICAgIHByaXZhdGUgcHJvcGVydHlHcmlkOiBTZXJlbml0eS5Qcm9wZXJ0eUdyaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFJlcG9ydERpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXBvcnQodGhpcy5vcHRpb25zLnJlcG9ydEtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nQnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUHJvcGVydHlHcmlkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZCAmJiB0aGlzLmJ5SWQoJ1Byb3BlcnR5R3JpZCcpLmh0bWwoJycpLmF0dHIoJ2NsYXNzJywgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZCA9IG5ldyBTZXJlbml0eS5Qcm9wZXJ0eUdyaWQodGhpcy5ieUlkKCdQcm9wZXJ0eUdyaWQnKSwge1xyXG4gICAgICAgICAgICAgICAgaWRQcmVmaXg6IHRoaXMuaWRQcmVmaXgsXHJcbiAgICAgICAgICAgICAgICB1c2VDYXRlZ29yaWVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMucmVwb3J0LlByb3BlcnRpZXNcclxuICAgICAgICAgICAgfSkuaW5pdChudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBsb2FkUmVwb3J0KHJlcG9ydEtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vUmVwb3J0L1JldHJpZXZlJyksXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVwb3J0S2V5OiByZXBvcnRLZXlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydCA9IHJlc3BvbnNlIGFzIFNlcmVuaXR5LlJlcG9ydGluZy5SZXBvcnRSZXRyaWV2ZVJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaWFsb2coKS5kaWFsb2coJ29wdGlvbicsICd0aXRsZScsIHRoaXMucmVwb3J0LlRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5R3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHlHcmlkLmxvYWQodGhpcy5yZXBvcnQuSW5pdGlhbFNldHRpbmdzIHx8IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdwcmludC1wcmV2aWV3LWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlKHRoaXMucmVwb3J0ICYmICF0aGlzLnJlcG9ydC5Jc0RhdGFPbmx5UmVwb3J0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdleHBvcnQtcGRmLWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlKHRoaXMucmVwb3J0ICYmICF0aGlzLnJlcG9ydC5Jc0RhdGFPbmx5UmVwb3J0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdleHBvcnQteGxzeC1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZSh0aGlzLnJlcG9ydCAmJiB0aGlzLnJlcG9ydC5Jc0RhdGFPbmx5UmVwb3J0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4ZWN1dGVSZXBvcnQodGFyZ2V0OiBzdHJpbmcsIGV4dDogc3RyaW5nLCBkb3dubG9hZDogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdCA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZC5zYXZlKG9wdCk7XHJcbiAgICAgICAgICAgIFJlcG9ydEhlbHBlci5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZCxcclxuICAgICAgICAgICAgICAgIHJlcG9ydEtleTogdGhpcy5yZXBvcnQuUmVwb3J0S2V5LFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBleHQgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBnZXRUb29sYmFyQnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ByZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAncHJpbnQtcHJldmlldy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZXhlY3V0ZVJlcG9ydCgnX2JsYW5rJywgbnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUERGJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC1wZGYtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmV4ZWN1dGVSZXBvcnQoJ19ibGFuaycsICdwZGYnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0V4Y2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC14bHN4LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5leGVjdXRlUmVwb3J0KCdfYmxhbmsnLCAneGxzeCcsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0RGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgcmVwb3J0S2V5OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuQ29tbW9uIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcG9ydEV4ZWN1dGVPcHRpb25zIHtcclxuICAgICAgICByZXBvcnRLZXk6IHN0cmluZztcclxuICAgICAgICBkb3dubG9hZD86IGJvb2xlYW47XHJcbiAgICAgICAgZXh0ZW5zaW9uPzogJ3BkZicgfCAnaHRtJyB8ICdodG1sJyB8ICd4bHN4JyB8ICdkb2N4JztcclxuICAgICAgICBnZXRQYXJhbXM/OiAoKSA9PiBhbnk7XHJcbiAgICAgICAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxyXG4gICAgICAgIHRhcmdldD86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcG9ydEJ1dHRvbk9wdGlvbnMgZXh0ZW5kcyBSZXBvcnRFeGVjdXRlT3B0aW9ucyB7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgY3NzQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgaWNvbj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlcG9ydEhlbHBlciB7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb29sQnV0dG9uKG9wdGlvbnM6IFJlcG9ydEJ1dHRvbk9wdGlvbnMpOiBTZXJlbml0eS5Ub29sQnV0dG9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLmNvYWxlc2NlKG9wdGlvbnMudGl0bGUsICdSZXBvcnQnKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBRLmNvYWxlc2NlKG9wdGlvbnMuY3NzQ2xhc3MsICdwcmludC1idXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGljb246IG9wdGlvbnMuaWNvbixcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSZXBvcnRIZWxwZXIuZXhlY3V0ZShvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBleGVjdXRlKG9wdGlvbnM6IFJlcG9ydEV4ZWN1dGVPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBvcHRpb25zLmdldFBhcmFtcyA/IG9wdGlvbnMuZ2V0UGFyYW1zKCkgOiBvcHRpb25zLnBhcmFtcztcclxuXHJcbiAgICAgICAgICAgIFEucG9zdFRvVXJsKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ34vUmVwb3J0LycgKyAob3B0aW9ucy5kb3dubG9hZCA/ICdEb3dubG9hZCcgOiAnUmVuZGVyJyksXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IG9wdGlvbnMucmVwb3J0S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dDogUS5jb2FsZXNjZShvcHRpb25zLmV4dGVuc2lvbiwgJ3BkZicpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdDogb3B0ID8gJC50b0pTT04ob3B0KSA6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBRLmNvYWxlc2NlKG9wdGlvbnMudGFyZ2V0LCAnX2JsYW5rJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZGVjbGFyZSB2YXIganNQREY7XHJcblxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcG9ydFBhZ2UgZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0S2V5OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBwcm9wZXJ0eUl0ZW1zOiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW1bXTtcclxuICAgICAgICBwcml2YXRlIHByb3BlcnR5R3JpZDogU2VyZW5pdHkuUHJvcGVydHlHcmlkO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAkKCcucmVwb3J0LWxpbmsnLCBlbGVtZW50KS5jbGljayhlID0+IHRoaXMucmVwb3J0TGlua0NsaWNrKGUpKTtcclxuICAgICAgICAgICAgJCgnZGl2LmxpbmUnLCBlbGVtZW50KS5jbGljayhlID0+IHRoaXMuY2F0ZWdvcnlDbGljayhlKSk7XHJcbiAgICAgICAgICAgIG5ldyBTZXJlbml0eS5RdWlja1NlYXJjaElucHV0KCQoJy5zLVF1aWNrU2VhcmNoQmFyIGlucHV0JywgZWxlbWVudCksIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIGRvbmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTWF0Y2hGbGFncyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGxpTGlzdCA9ICQoJy5yZXBvcnQtbGlzdCcsIHRoaXMuZWxlbWVudCkuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgIHRleHQgPSBRLnRyaW1Ub051bGwodGV4dCk7XHJcbiAgICAgICAgICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LmNoaWxkcmVuKCd1bCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5zaG93KCkucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHRleHQpLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwb3J0SXRlbXMgPSBsaUxpc3QuZmlsdGVyKCcucmVwb3J0LWl0ZW0nKTtcclxuICAgICAgICAgICAgcmVwb3J0SXRlbXMuZWFjaChmdW5jdGlvbiAoaXgsIGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gJChlKTtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS5jb2FsZXNjZSh4LnRleHQoKSwgJycpLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlLmluZGV4T2YodGV4dCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeC5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nSXRlbXMgPSByZXBvcnRJdGVtcy5ub3QoJy5ub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgdmFyIHZpc2libGVzID0gbWF0Y2hpbmdJdGVtcy5wYXJlbnRzKCdsaScpLmFkZChtYXRjaGluZ0l0ZW1zKTtcclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgIHZpc2libGVzLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGVzLmxlbmd0aCA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5jaGlsZHJlbigndWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjYXRlZ29yeUNsaWNrKGUpIHtcclxuICAgICAgICAgICAgdmFyIGxpID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICAgICAgaWYgKGxpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsaS5maW5kKCd1bCcpLmhpZGUoJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIGxpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGkuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGkuY2hpbGRyZW4oJ3VsJykuc2hvdygnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpLmxlbmd0aCA9PT0gMSAmJiAhbGkuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbignLmxpbmUnKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVwb3J0TGlua0NsaWNrKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuZXcgUmVwb3J0RGlhbG9nKHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydEtleTogJChlLnRhcmdldCkuZGF0YSgna2V5JylcclxuICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJQcmVmZXJlbmNlU3RvcmFnZSBpbXBsZW1lbnRzIFNlcmVuaXR5LlNldHRpbmdTdG9yYWdlIHtcclxuICAgICAgICBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBVc2VyUHJlZmVyZW5jZVNlcnZpY2UuUmV0cmlldmUoe1xyXG4gICAgICAgICAgICAgICAgUHJlZmVyZW5jZVR5cGU6IFwiVXNlclByZWZlcmVuY2VTdG9yYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBOYW1lOiBrZXlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gdmFsdWUgPSByZXNwb25zZS5WYWx1ZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXN5bmM6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0SXRlbShrZXk6IHN0cmluZywgZGF0YTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIFVzZXJQcmVmZXJlbmNlU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgUHJlZmVyZW5jZVR5cGU6IFwiVXNlclByZWZlcmVuY2VTdG9yYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBOYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICBWYWx1ZTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQXJyaWVuZG9zRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEFycmllbmRvc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBcnJpZW5kb3NGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEFycmllbmRvc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFycmllbmRvc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQXJyaWVuZG9zUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQXJyaWVuZG9zU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBcnJpZW5kb3NSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXJyaWVuZG9zUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEFycmllbmRvc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEFycmllbmRvc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFycmllbmRvc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEFycmllbmRvc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnR2VzdGlvbi5BcnJpZW5kb3MnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBBcnJpZW5kb3NEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEFycmllbmRvc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBcnJpZW5kb3NSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBcnJpZW5kb3NSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBcnJpZW5kb3NTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQXRyaWJ1dG9zRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEF0cmlidXRvc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBdHJpYnV0b3NGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEF0cmlidXRvc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEF0cmlidXRvc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQXRyaWJ1dG9zUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQXRyaWJ1dG9zU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBdHJpYnV0b3NSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXRyaWJ1dG9zUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEF0cmlidXRvc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEF0cmlidXRvc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEF0cmlidXRvc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEF0cmlidXRvc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnR2VzdGlvbi5BdHJpYnV0b3MnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBBdHJpYnV0b3NEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEF0cmlidXRvc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBdHJpYnV0b3NSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBdHJpYnV0b3NSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBdHJpYnV0b3NTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2xpZW50ZXNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q2xpZW50ZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2xpZW50ZXNGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENsaWVudGVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2xpZW50ZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENsaWVudGVzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2xpZW50ZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENsaWVudGVzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENsaWVudGVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENsaWVudGVzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ2xpZW50ZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDbGllbnRlc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPENsaWVudGVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdHZXN0aW9uLkNsaWVudGVzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ2xpZW50ZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENsaWVudGVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENsaWVudGVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2xpZW50ZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDbGllbnRlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0b0RldGFsbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UHJvZHVjdG9EZXRhbGxlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFByb2R1Y3RvRGV0YWxsZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdG9EZXRhbGxlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHJvZHVjdG9EZXRhbGxlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHJvZHVjdG9EZXRhbGxlU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0b0RldGFsbGVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdG9EZXRhbGxlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RvRGV0YWxsZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFByb2R1Y3RvRGV0YWxsZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RvRGV0YWxsZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFByb2R1Y3RvRGV0YWxsZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnR2VzdGlvbi5Qcm9kdWN0b0RldGFsbGUnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQcm9kdWN0b0RldGFsbGVEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RvRGV0YWxsZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0b0RldGFsbGVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0b0RldGFsbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0b0RldGFsbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGludGVyZmFjZSBwcm9kdWN0b3NQYXJhbWV0ZXJzIHtcclxuICAgICAgICBJdGVtczogUHJvZHVjdG9zUm93W11cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdG9zQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxwcm9kdWN0b3NQYXJhbWV0ZXJzPntcclxuICAgICAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1FUycsIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6ICdDTFAnLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkl0ZW1zLm1hcDxSZWFjdC5SZWFjdE5vZGU+KChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDw+IDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIi9Qcm9kdWN0RGV0YWlsL1wiICsgaXRlbS5JZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi91cGxvYWQvXCIgKyBpdGVtLkZvdG99IGNsYXNzTmFtZT1cImltZyBpbWctcmVzcG9uc2l2ZVwiIGhlaWdodD1cIjQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLW5hbWVcIj57aXRlbS5Ob21icmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1vdmVydmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLW92ZXJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IG0tMlwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS5DYW50aWRhZH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RvY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IG0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntmb3JtYXR0ZXIuZm9ybWF0KGl0ZW0uUHJlY2lvKS5yZXBsYWNlKFwiQ0xQXCIsIFwiJFwiKS5yZXBsYWNlKFwiLFwiLFwiLlwiKX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXJyaWVuZG8gRGlhcmlvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57Zm9ybWF0dGVyLmZvcm1hdChpdGVtLkdhcmFudGlhKS5yZXBsYWNlKFwiQ0xQXCIsIFwiJFwiKS5yZXBsYWNlKFwiLFwiLCBcIi5cIil9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdhcmFudMOtYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PjwvPiB9KX1cclxuICAgICAgICAgICAgPC8+KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcihbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5lbGVtZW50KFwiPGRpdi8+XCIpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdG9zRGV0RWRpdG9yQ2FyZCBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZFdpZGdldDxhbnk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc0RpcnR5OiBib29sZWFuO1xyXG4gICAgICAgIHByaXZhdGUgaXRlbXM6IFByb2R1Y3RvRGV0YWxsZVJvd1tdO1xyXG4gICAgICAgIHByaXZhdGUgaXRlbUxpc3Q6IEpRdWVyeTtcclxuICAgICAgICBwcml2YXRlIHJvd0l0ZW1zOiBSb3dJdGVtW107XHJcbiAgICAgICAgcHJpdmF0ZSBwb3JjaWVudG9TdWJUb3RhbElucHV0OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIHByaXZhdGUgaW1wb3J0ZVN1YlRvdGFsSW5wdXQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRpdjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRpdik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0ID0gdGhpcy5ieUlkKCdJdGVtTGlzdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfSWRUaXBvQXJyaWVuZG86IG51bWJlcjtcclxuICAgICAgICBwdWJsaWMgc2V0IElkVGlwb0FycmllbmRvKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fSWRUaXBvQXJyaWVuZG8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2NvbC1tZC0xMicgaWQ9J35fSXRlbUxpc3QnPjwvZGl2PlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZvbGthbmNleWxhbi9TZXJlbml0eS9pc3N1ZXMvMzE0MFxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVDb250ZW50KCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3dJdGVtcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5jaGlsZHJlbigpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpcG9zQWRpY2lvbmFsZXMgPSBSZW50YWxfU1BBLkdlc3Rpb24uVGlwb3NBZGljaW9uYWxlc1Jvdy5nZXRMb29rdXAoKS5pdGVtcy5zb3J0KCh4LCB5KSA9PiBRLnR1cmtpc2hMb2NhbGVDb21wYXJlKHguT3JkZW4udG9TdHJpbmcoKSwgeS5PcmRlbi50b1N0cmluZygpKSk7O1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGFkaWNpb25hbGVzID0gVkRULk5vbWVuY2xhZG9yZXMuQWRpY2lvbmFsZXNSb3cuZ2V0TG9va3VwKCkuaXRlbXM7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpcG9zQWRpY2lvbmFsZXNQYXJhVGlwb0FydGljdWxvOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX0lkVGlwb0FycmllbmRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpcG9BcnRpY3Vsb0RldGFsbGVzID0gUmVudGFsX1NQQS5HZXN0aW9uLlRpcG9BcnJpZW5kb1Jvdy5nZXRMb29rdXAoKS5pdGVtQnlJZFt0aGlzLl9JZFRpcG9BcnJpZW5kby50b1N0cmluZygpXS5EZXRhbGxlcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVEuaXNFbXB0eU9yTnVsbCh0aXBvQXJ0aWN1bG9EZXRhbGxlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwb3NBZGljaW9uYWxlc1BhcmFUaXBvQXJ0aWN1bG8gPSB0aXBvQXJ0aWN1bG9EZXRhbGxlcy5zcGxpdCgnLCcpLm1hcCh4ID0+IFEucGFyc2VJbnRlZ2VyKHgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdDEgPSAwOyB0MSA8IHRpcG9zQWRpY2lvbmFsZXMubGVuZ3RoOyB0MSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXBvQWRpY2lvbmFsID0gdGlwb3NBZGljaW9uYWxlc1t0MV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpIG5vIGVzdGEgZGVudHJvIGRlIGxhIGxpc3RhLCBubyBsbyBtdWVzdHJvLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGlwb3NBZGljaW9uYWxlc1BhcmFUaXBvQXJ0aWN1bG8uc29tZSh4ID0+IHggPT0gdGlwb0FkaWNpb25hbC5JZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBFc3RhIGFncmVnYWRvP1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SXRlbSA9IFEudHJ5Rmlyc3QodGhpcy5pdGVtcywgeCA9PiB4LklkVGlwb0FkaWNpb25hbCA9PSB0aXBvQWRpY2lvbmFsLklkKSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpdlJvdyA9ICQoYDxkaXYgY2xhc3M9XCJyb3dcIiBpZFRpcG9BZGljaW9uYWw9XCIke3RpcG9BZGljaW9uYWwuSWR9XCIvPmApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXYxID0gJCgnPGRpdiBjbGFzcz1cImNvbC1tZC0yIGZpZWxkXCIvPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXYyID0gJCgnPGRpdiBjbGFzcz1cImNvbC1tZC00IGZpZWxkXCIvPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXYzID0gJCgnPGRpdiBjbGFzcz1cImNvbC1tZC0yIGZpZWxkXCIvPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXY0ID0gJCgnPGRpdiBjbGFzcz1cImNvbC1tZC00IGZpZWxkXCIvPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXYxXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGxhYmVsIGNsYXNzPVwiY2FwdGlvblwiIC8+JykudGV4dCh0aXBvQWRpY2lvbmFsLlRpdHVsbykuYXBwZW5kVG8oZGl2MSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdjIgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dElkMiA9IHRoaXMuaXRlbUxpc3QudW5pcXVlSWQoKVswXS5pZCArICdfSWRBZGljaW9uYWxfJyArIHRpcG9BZGljaW9uYWwuSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGlucHV0Lz4nKS5hdHRyKCd0eXBlJywgJ3RleHQnKS5hdHRyKCduYW1lJywgJ0lkQWRpY2lvbmFsJykuYXR0cignaWQnLCBpbnB1dElkMikuYXR0cignc3R5bGUnLCd3aWR0aDo0MDBweDsnKS5hcHBlbmRUbyhkaXYyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGl2MyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZXQgaW5wdXRJZDMgPSB0aGlzLml0ZW1MaXN0LnVuaXF1ZUlkKClbMF0uaWQgKyAnX1BvcmNpZW50b18nICsgdGlwb0FkaWNpb25hbC5JZDtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmICh0aXBvQWRpY2lvbmFsLk1vc3RyYXJQb3JjZW50YWplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgJCgnPGxhYmVsIGNsYXNzPVwiY2FwdGlvblwiIGZvcj1cIicgKyBpbnB1dElkMyArICdcIi8+JykudGV4dCgnJScpLmFwcGVuZFRvKGRpdjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vJCgnPGlucHV0Lz4nKS5hdHRyKCd0eXBlJywgJ3RleHQnKS5hdHRyKCduYW1lJywgJ1BvcmNpZW50bycpLmF0dHIoJ2lkJywgaW5wdXRJZDMpLmFwcGVuZFRvKGRpdjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJCgnPGRpdiBjbGFzcz1cInZ4XCIgLz4nKS5hcHBlbmRUbyhkaXYzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGl2NFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbGV0IGlucHV0SWQ0ID0gdGhpcy5pdGVtTGlzdC51bmlxdWVJZCgpWzBdLmlkICsgJ19JbXBvcnRlXycgKyB0aXBvQWRpY2lvbmFsLklkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKHRpcG9BZGljaW9uYWwuTW9zdHJhckltcG9ydGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAkKCc8bGFiZWwgY2xhc3M9XCJjYXB0aW9uXCIgZm9yPVwiJyArIGlucHV0SWQ0ICsgJ1wiLz4nKS50ZXh0KCckJykuYXBwZW5kVG8oZGl2NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCc8aW5wdXQvPicpLmF0dHIoJ3R5cGUnLCAndGV4dCcpLmF0dHIoJ25hbWUnLCAnSW1wb3J0ZScpLmF0dHIoJ2lkJywgaW5wdXRJZDQpLmFwcGVuZFRvKGRpdjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJCgnPGRpdiBjbGFzcz1cInZ4XCIgLz4nKS5hcHBlbmRUbyhkaXY0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2MS5hcHBlbmRUbyhkaXZSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdjIuYXBwZW5kVG8oZGl2Um93KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYzLmFwcGVuZFRvKGRpdlJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2NC5hcHBlbmRUbyhkaXZSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdlJvdy5hcHBlbmRUbyh0aGlzLml0ZW1MaXN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRib3ggPSBuZXcgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKCQoJyMnICsgaW5wdXRJZDIpKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Ym94LnZhbHVlID0gY3VycmVudEl0ZW0uVmFsb3IgPyBjdXJyZW50SXRlbS5WYWxvci50b1N0cmluZygpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHRib3guY2hhbmdlKGUgPT4gdGhpcy5vbkNoYW5nZUNvbWJvKGUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZXQgaW5wdXQxID0gbmV3IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3IoJChgIyR7aW5wdXRJZDN9YCksIHsgZGVjaW1hbHM6IDIsIHBhZERlY2ltYWxzOiAyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vU2VyZW5pdHkuRWRpdG9yVXRpbHMuc2V0UmVhZG9ubHkoJChgIyR7aW5wdXRJZDN9YCksICFjdXJyZW50SXRlbS5JZEF0cmlidXRvKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lucHV0MS52YWx1ZSA9IGN1cnJlbnRJdGVtLiB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaW5wdXQxLmNoYW5nZShlID0+IHRoaXMub25DaGFuZ2VJbnB1dChlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoIXRpcG9BZGljaW9uYWwuTW9zdHJhclBvcmNpZW50bykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGlucHV0MS5lbGVtZW50LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZXQgaW5wdXQyID0gbmV3IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3IoJCgnIycgKyBpbnB1dElkNCksIHsgZGVjaW1hbHM6IDIsIHBhZERlY2ltYWxzOiAyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vU2VyZW5pdHkuRWRpdG9yVXRpbHMuc2V0UmVhZG9ubHkoJChgIyR7aW5wdXRJZDR9YCksICFjdXJyZW50SXRlbS5JZEFkaWNpb25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbnB1dDIudmFsdWUgPSBjdXJyZW50SXRlbS5JbXBvcnRlIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbnB1dDIuY2hhbmdlKGUgPT4gdGhpcy5vbkNoYW5nZUlucHV0KGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmICghdGlwb0FkaWNpb25hbC5Nb3N0cmFySW1wb3J0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGlucHV0Mi5lbGVtZW50LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dJdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSWRUaXBvQWRpY2lvbmFsOiB0aXBvQWRpY2lvbmFsLklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWYWxvcjogdGV4dGJveCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9JZFRpcG9BcnJpZW5kbyB8fCAhUmVudGFsX1NQQS5HZXN0aW9uLlRpcG9BcnJpZW5kb1Jvdy5nZXRMb29rdXAoKS5pdGVtQnlJZFt0aGlzLl9JZFRpcG9BcnJpZW5kby50b1N0cmluZygpXS5EZXRhbGxlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJvd0l0ZW1zLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGlzdGUgZW4gdGhpcy5pdGVtcz9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLnNvbWUoeSA9PiB5LklkVGlwb0FkaWNpb25hbCA9PSB4LklkVGlwb0FkaWNpb25hbCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gUS50cnlGaXJzdCh0aGlzLml0ZW1zLCB5ID0+IHkuSWRUaXBvQWRpY2lvbmFsID09IHguSWRUaXBvQWRpY2lvbmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGVuZ28gcXVlIGJvcnJhcmxvXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuaXNFbXB0eU9yTnVsbCh4LklkVGlwb0FkaWNpb25hbC50b1N0cmluZygpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShRLmluZGV4T2YodGhpcy5pdGVtcywgeSA9PiB5LklkVGlwb0FkaWNpb25hbCA9PSB4LklkVGlwb0FkaWNpb25hbCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLlZhbG9yID0geC5WYWxvci52YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uSWRUaXBvQWRpY2lvbmFsID0geC5JZFRpcG9BZGljaW9uYWw7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeC5JZFRpcG9BZGljaW9uYWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsb3I6IHguVmFsb3IudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElkVGlwb0FkaWNpb25hbCA6IHguSWRUaXBvQWRpY2lvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuc29ydChmdW5jdGlvbiAob2JqMSwgb2JqMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlbnRhbF9TUEEuR2VzdGlvbi5UaXBvc0FkaWNpb25hbGVzUm93LmdldExvb2t1cCgpLml0ZW1CeUlkW29iajEuSWRUaXBvQWRpY2lvbmFsXS5PcmRlbiAtIFJlbnRhbF9TUEEuR2VzdGlvbi5UaXBvc0FkaWNpb25hbGVzUm93LmdldExvb2t1cCgpLml0ZW1CeUlkW29iajIuSWRUaXBvQWRpY2lvbmFsXS5PcmRlbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBQcm9kdWN0b0RldGFsbGVSb3dbXSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gdmFsdWUgfHwgW107XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEVkaXRWYWx1ZShwcm9wOiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW0sIHRhcmdldCkge1xyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcC5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0RWRpdFZhbHVlKHNvdXJjZSwgcHJvcDogU2VyZW5pdHkuUHJvcGVydHlJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2VbcHJvcC5uYW1lXSB8fCBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvbkNoYW5nZTogKCkgPT4gdm9pZDtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBSb3dJdGVtIHtcclxuICAgICAgICBJZFRpcG9BZGljaW9uYWw6IG51bWJlcjtcclxuICAgICAgICBWYWxvcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yOyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuICAgIGludGVyZmFjZSBwcm9kdWN0b1BhcmFtZXRlcnMge1xyXG4gICAgICAgIFByb2R1Y3RvOiBQcm9kdWN0b3NSb3dcclxuICAgIH0gICBcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0b0RldGFsbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8cHJvZHVjdG9QYXJhbWV0ZXJzPntcclxuXHJcbiAgICAgICAgLy9wcml2YXRlIGRldGFsbGVzOiBJZERldGFsbGVbXTtcclxuICAgICAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tRVMnLCB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnQ0xQJyxcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJicmVhZGNydW1icy1jdXN0b20taW5zZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzLWN1c3RvbSBjb250ZXh0LWRhcmsgYmctb3ZlcmxheS02MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzLWN1c3RvbS10aXRsZVwiPnt0aGlzLnByb3BzLlByb2R1Y3RvLk5vbWJyZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzLWN1c3RvbS1wYXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj57dGhpcy5wcm9wcy5Qcm9kdWN0by5Ob21icmV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1wb3NpdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChcIi91cGxvYWQvJyArIHRoaXMucHJvcHMuUHJvZHVjdG8uRm90byArICdcIiknfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLXNtIHNlY3Rpb24tZmlyc3QgYmctZGVmYXVsdCB0ZXh0LW1kLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctNTAganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy14bC1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbGctMTIgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zcGFjaW5nLTI1IGZvbnQtd2VpZ2h0LW5vcm1hbCB0aXRsZS1vcGFjaXR5LTlcIj48L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnMtY3VzdG9tIHRhYnMtaG9yaXpvbnRhbCB0YWJzLWxpbmVcIiBpZD1cInRhYnMtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cInRhYnMtNC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5Qcm9kdWN0by5EZXNjcmlwY2lvbiB9fT57IH08L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOic0cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBBdHJpYnV0b3MgZGVsIFByb2R1Y3RvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLlByb2R1Y3RvLlByb2R1Y3Rvc0RldC5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uSWRUaXBvQWRpY2lvbmFsVGl0dWxvfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uVmFsb3J9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01IHRleHQtY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuUHJvZHVjdG8uQ2FudGlkYWR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYW50aWRhZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2Zvcm1hdHRlci5mb3JtYXQodGhpcy5wcm9wcy5Qcm9kdWN0by5QcmVjaW8pLnJlcGxhY2UoXCJDTFBcIiwgXCIkXCIpLnJlcGxhY2UoXCIsXCIsXCIuXCIpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VmFsb3IgQXJyaWVuZG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntmb3JtYXR0ZXIuZm9ybWF0KHRoaXMucHJvcHMuUHJvZHVjdG8uR2FyYW50aWEpLnJlcGxhY2UoXCJDTFBcIiwgXCIkXCIpLnJlcGxhY2UoXCIsXCIsXCIuXCIpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2FyYW50w61hPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIHRleHQtY2VudGVyIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIFwiPiBBcnJlbmRhci4uLjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgICAgICAgICAgPC8+KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCgpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdG9zRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFByb2R1Y3Rvc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQcm9kdWN0b3NGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3Rvc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3Rvc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdG9zUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHJvZHVjdG9zU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0b3NSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdG9zUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3Rvc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFByb2R1Y3Rvc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdD86IGFueSkge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLklkVGlwb0FycmllbmRvLmNoYW5nZSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLlByb2R1Y3Rvc0RldC5JZFRpcG9BcnJpZW5kbyA9IFEucGFyc2VJbnRlZ2VyKHRoaXMuZm9ybS5JZFRpcG9BcnJpZW5kby52YWx1ZSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uSWRUaXBvQXJyaWVuZG8uY2hhbmdlU2VsZWN0MigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLlByb2R1Y3Rvc0RldC52YWx1ZSA9IFtdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3Rvc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFByb2R1Y3Rvc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnR2VzdGlvbi5Qcm9kdWN0b3MnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQcm9kdWN0b3NEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3Rvc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0b3NSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0b3NSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0b3NTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVnaW9uZXNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UmVnaW9uZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmVnaW9uZXNGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlZ2lvbmVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVnaW9uZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlZ2lvbmVzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVnaW9uZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJlZ2lvbmVzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFJlZ2lvbmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJlZ2lvbmVzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUmVnaW9uZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZWdpb25lc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFJlZ2lvbmVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdHZXN0aW9uLlJlZ2lvbmVzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUmVnaW9uZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlZ2lvbmVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFJlZ2lvbmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVnaW9uZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZWdpb25lc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLkdlc3Rpb24ge1xyXG5cclxuICAgIGludGVyZmFjZSBhcnJpZW5kb1BhcmFtZXRlcnMge1xyXG4gICAgICAgIEl0ZW1zOiBUaXBvQXJyaWVuZG9Sb3dbXVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUaXBvQXJyaWVuZG9DYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFycmllbmRvUGFyYW1ldGVycz57XHJcbiAgICAgICAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8PlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuSXRlbXMubWFwPFJlYWN0LlJlYWN0Tm9kZT4oKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBpY29uLWJveFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvUHJvZHVjdExpc3QvXCIgKyBpdGVtLklkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL3VwbG9hZC9cIiArIGl0ZW0uRm90b30gY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIiB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiMjAwcHhcIiBkYXRhLWhvbGRlci1yZW5kZXJlZD1cInRydWVcIiBhbHQ9e2l0ZW0uVGlwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIi9Qcm9kdWN0TGlzdC9cIiArIGl0ZW0uSWR9PntpdGVtLlRpcG99PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSkgfVxyXG5cclxuICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSIsIlxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUaXBvQXJyaWVuZG9EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VGlwb0FycmllbmRvUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFRpcG9BcnJpZW5kb0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGlwb0FycmllbmRvUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVGlwb0FycmllbmRvUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBUaXBvQXJyaWVuZG9Sb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUaXBvQXJyaWVuZG9TZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFRpcG9BcnJpZW5kb1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBUaXBvQXJyaWVuZG9Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVGlwb0FycmllbmRvUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgVGlwb0FycmllbmRvRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVGlwb0FycmllbmRvR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VGlwb0FycmllbmRvUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdHZXN0aW9uLlRpcG9BcnJpZW5kbyc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFRpcG9BcnJpZW5kb0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGlwb0FycmllbmRvUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFRpcG9BcnJpZW5kb1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFRpcG9BcnJpZW5kb1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRpcG9BcnJpZW5kb1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUaXBvc0FkaWNpb25hbGVzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFRpcG9zQWRpY2lvbmFsZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVGlwb3NBZGljaW9uYWxlc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGlwb3NBZGljaW9uYWxlc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFRpcG9zQWRpY2lvbmFsZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFRpcG9zQWRpY2lvbmFsZXNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUaXBvc0FkaWNpb25hbGVzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBUaXBvc0FkaWNpb25hbGVzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFRpcG9zQWRpY2lvbmFsZXNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVGlwb3NBZGljaW9uYWxlc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFRpcG9zQWRpY2lvbmFsZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5HZXN0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUaXBvc0FkaWNpb25hbGVzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VGlwb3NBZGljaW9uYWxlc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnR2VzdGlvbi5UaXBvc0FkaWNpb25hbGVzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVGlwb3NBZGljaW9uYWxlc0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGlwb3NBZGljaW9uYWxlc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBUaXBvc0FkaWNpb25hbGVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVGlwb3NBZGljaW9uYWxlc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRpcG9zQWRpY2lvbmFsZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuR2VzdGlvbiB7XHJcbiAgICBcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKClcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFycmllbmRvV2l6YXJkRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuV2l6YXJkRGlhbG9nPEFycmllbmRvV2l6YXJkUm93LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBcnJpZW5kb1dpemFyZEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQXJyaWVuZG9XaXphcmRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBcnJpZW5kb1dpemFyZFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuXHJcbiAgICAgICAgLy8vL3Byb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBBcnJpZW5kb1dpemFyZFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICAvL3Byb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2F0ZWdvcmlhc1NlcnZpY2UuYmFzZVVybDsgfSAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEFycmllbmRvV2l6YXJkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0PzogYW55KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0LmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZFRvKCQoYCMke29wdC5jb250YWluZXJ9YCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbmV4dCh0b1N0ZXA6IG51bWJlcik6IHZvaWQge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodG9TdGVwKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIubmV4dCh0b1N0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZm9ybS5Ib3JhcmlvRGlzcG9uaWJsZS5jYWxlbmRhclVwZGF0ZVNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAvL2lmICghdGhpcy5mb3JtLkhvcmFyaW9EaXNwb25pYmxlLlZhbHVlIHx8ICF0aGlzLmZvcm0uSG9yYXJpb0Rpc3BvbmlibGUuVmFsdWUuRmVjaGFEZXNkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFEubm90aWZ5V2FybmluZyhcIlBvciBmYXZvciwgc2VsZWNjaW9uZSBhbGfDum4gaG9yYXJpbyBkaXNwb25pYmxlIHBhcmEgbGEgY2l0YSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICBzdXBlci5uZXh0KHRvU3RlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1hY2lvbkNvbnRleHQuZWxlbWVudC5odG1sKGA8ZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCI+PGxhYmVsIGNsYXNzPVwiY2FwdGlvblwiPk5vbWJyZTo8L2xhYmVsPjxzcGFuPiR7dGhpcy5mb3JtLk5vbWJyZXMudmFsdWV9PC9zcGFuPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCI+PGxhYmVsIGNsYXNzPVwiY2FwdGlvblwiPkFwZWxsaWRvczo8L2xhYmVsPjxzcGFuPiR7dGhpcy5mb3JtLkFwZWxsaWRvcy52YWx1ZX08L3NwYW4+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyb3dcIj48bGFiZWwgY2xhc3M9XCJjYXB0aW9uXCI+VGVsw6lmb25vOjwvbGFiZWw+PHNwYW4+JHt0aGlzLmZvcm0uVGVsZWZvbm8udmFsdWV9PC9zcGFuPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCI+PGxhYmVsIGNsYXNzPVwiY2FwdGlvblwiPkVtYWlsOjwvbGFiZWw+PHNwYW4+JHt0aGlzLmZvcm0uRW1haWwudmFsdWV9PC9zcGFuPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCI+Jm5ic3A7PC9kaXY+XHJcblxyXG48YnIvPlxyXG48ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj48aDMgc3R5bGU9XCJjb2xvcjogIzFjNWM5MzsgZm9udC1mYW1pbHk6XCJPcGVuIFNhbnNcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4XCI+VmFsb3IgZGVsIEFycmllbmRvOiAke1EuZm9ybWF0KFEudGV4dCgnU2l0ZS5SZXBvcnRzLkFtb3VudFBheScpKX08L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLm5leHQodG9TdGVwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIubmV4dCh0b1N0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybUNhbmNlbChlOiBKUXVlcnlFdmVudE9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY2FuY2VsTWVzc2FnZSA9IHRoaXMuZ2V0Q2FuY2VsTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICBpZiAoIWNhbmNlbE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybChcIn4vXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFEuY29uZmlybShjYW5jZWxNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4geyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoXCJ+L1wiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZpbmlzaCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICBSZW50YWxfU1BBLkdlc3Rpb24uQXJyaWVuZG9XaXphcmRTZXJ2aWNlLkNyZWF0ZSh7IEVudGl0eTogdGhpcy5nZXRTYXZlRW50aXR5KCkgfSwgcmVzcCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIlNlIGNyZcOzIHN1IEFycmllbmRvIHNhdGlzZmFjdG9yaWFtZW50ZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmZpbmlzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5QYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8TG9naW5SZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMb2dpbkZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgJC5mblsndmVnYXMnXSAmJiAkKCdib2R5JylbJ3ZlZ2FzJ10oe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMDAwLFxyXG4gICAgICAgICAgICAgICAgY292ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvdmVybGF5OiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUlBQUFBQ0FRTUFBQUJJZUo5bkFBQUFBM05DU1ZRSUNBamI0VVwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIi9nQUFBQUJsQk1WRVgvLy84QUFBQlZ3dE4rQUFBQUFuUlNUbE1BLzF1UklyVUFBQUFKY0VoWmN3QUFBc1FBQUFMRUFWdVJuUXNBQUFBV2RFVllkRU55WldGMFwiICtcclxuICAgICAgICAgICAgICAgICAgICBcImFXOXVJRlJwYldVQU1EUXZNVE12TVRHclcwVDZBQUFBSEhSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCR2FYSmxkMjl5YTNNZ1ExTTFjYlhqTmdBQUFBeEpSRUZVQ0psamFHQmdBQUFCaEFDQnJPTklQZ0FBQUFCSlJVNUVya0pnZ2c9PVwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6IFEucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL3NsaWRlcy9zbGlkZTEuanBnXCIpLCB0cmFuc2l0aW9uOiAnZmFkZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzogUS5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvc2xpZGVzL3NsaWRlMi5qcGdcIiksIHRyYW5zaXRpb246ICd6b29tT3V0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOiBRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9zbGlkZXMvc2xpZGUzLmpwZ1wiKSwgdHJhbnNpdGlvbjogJ3N3aXJsTGVmdCcgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnTG9naW5CdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJSZWRpcmVjdFVzZXJUb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLkVycm9yLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiAhUS5pc0VtcHR5T3JOdWxsKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI1Bhc3N3b3JkJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuRXJyb3JIYW5kbGluZy5zaG93U2VydmljZUVycm9yKHJlc3BvbnNlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JldHVyblVybCgpIHtcclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHJldHVyblVybCA9IHFbJ3JldHVyblVybCddIHx8IHFbJ1JldHVyblVybCddO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9ICcjJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5VcmwgKz0gaGFzaDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuPGRpdiBjbGFzcz1cImZsZXgtbGF5b3V0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPjwvZGl2PlxyXG4gICAgPGgzPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Gb3JtVGl0bGVcIil9PC9oMz5cclxuICAgIDxmb3JtIGlkPVwifl9Gb3JtXCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInMtRm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzZXQgdWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50IHVpLWNvcm5lci1hbGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fTG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnbkluQnV0dG9uXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvRm9yZ290UGFzc3dvcmQnKX1cIj48aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPiZuYnNwOyR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Gb3Jnb3RQYXNzd29yZFwiKX08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKX1cIj48aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPiZuYnNwOyR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduVXBCdXR0b25cIil9PC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG48L2Rpdj5cclxuYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLncoJ0NvbmZpcm1QYXNzd29yZCcsIFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yKS52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0NoYW5nZVBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPEZvcmdvdFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRm9yZ290UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBGb3Jnb3RQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9yZ290UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvRm9yZ290UGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFJlbnRhbF9TUEEuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxSZXNldFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmVzZXRQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFJlc2V0UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFJlc2V0UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlRva2VuID0gdGhpcy5ieUlkKCdUb2tlbicpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9SZXNldFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuUmVzZXRQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8U2lnblVwUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gU2lnblVwRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogU2lnblVwRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBTaWduVXBGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1FbWFpbC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtRW1haWwudmFsdWUgIT09IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uRW1haWxDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXlOYW1lOiB0aGlzLmZvcm0uRGlzcGxheU5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB0aGlzLmZvcm0uRW1haWwudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5TaWduVXAuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEhpc3RvcmlhRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEhpc3RvcmlhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEhpc3RvcmlhRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBIaXN0b3JpYVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEhpc3RvcmlhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBIaXN0b3JpYVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEhpc3RvcmlhU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBIaXN0b3JpYVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBIaXN0b3JpYVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBIaXN0b3JpYVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEhpc3RvcmlhRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEhpc3RvcmlhR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8SGlzdG9yaWFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ1NpdGlvLkhpc3RvcmlhJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gSGlzdG9yaWFEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEhpc3RvcmlhUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEhpc3RvcmlhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gSGlzdG9yaWFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBIaXN0b3JpYVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUGFyYSBhZ3JlZ2FyIGxhIG9wY2nDs24gZGUgT3JkZW5hciBsYXMgRmlsYXMuXHJcbiAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLnNldFNlbGVjdGlvbk1vZGVsKG5ldyBTbGljay5Sb3dTZWxlY3Rpb25Nb2RlbCgpKTtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLm1ha2VPcmRlcmFibGUodGhpcy5zbGlja0dyaWQsIChyb3dzOiBudW1iZXJbXSwgaW5zZXJ0QmVmb3JlOiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJvdyA9IFEuZGVlcENsb25lKHRoaXMuaXRlbUF0KHJvd3NbMF0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEl0ZW1zID0gdGhpcy52aWV3LmdldEl0ZW1zKCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbXMuc3BsaWNlKHJvd3NbMF0sIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtcy5zcGxpY2UoaW5zZXJ0QmVmb3JlLCAwLCBjdXJyZW50Um93KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3JkZW4oY3VycmVudEl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmJsb2NrVUkoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFEudGV4dCgnU2l0ZS5CYXNpY1Byb2dyZXNzRGlhbG9nLkFndWFyZGVNdG8nKSxcclxuICAgICAgICAgICAgICAgICAgICBvbkJsb2NrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbXMuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbnRhbF9TUEEuU2l0aW8uSGlzdG9yaWFTZXJ2aWNlLlVwZGF0ZSh7IEVudGl0eUlkOiByb3cuSWQsIEVudGl0eTogcm93IH0sIHJlc3AgPT4geyB9LCB7IGFzeW5jOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEuYmxvY2tVbmRvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoY3VycmVudEl0ZW1zLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1Byb2Nlc3NEYXRhKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8SGlzdG9yaWFSb3c+KTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEhpc3RvcmlhUm93PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuRW50aXRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuRW50aXRpZXMgPSByZXNwb25zZS5FbnRpdGllcy5zb3J0KChhLCBiKSA9PiBhLk9yZGVuIC0gYi5PcmRlbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdQcm9jZXNzRGF0YShyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWRkQnV0dG9uQ2xpY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dE9yZGVuTnJvOiBudW1iZXIgPSAxO1xyXG4gICAgICAgICAgICBpZiAodGhpcy52aWV3LmdldEl0ZW1zKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dE9yZGVuTnJvID0gdGhpcy52aWV3LmdldEl0ZW1zKCkuc29ydCgoYSwgYikgPT4gYi5PcmRlbiAtIGEuT3JkZW4pWzBdLk9yZGVuICsgMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5lZGl0SXRlbSh7IE9yZGVyOiBuZXh0T3JkZW5Ocm8gfSBhcyBIaXN0b3JpYVJvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpOiBTbGljay5Db2x1bW5bXSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlkOiBcIiNcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzZWxlY3RBbmRNb3ZlXCIsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJjZWxsLXJlb3JkZXIgZG5kXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTbGlja09wdGlvbnMoKTogU2xpY2suR3JpZE9wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHN1cGVyLmdldFNsaWNrT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5lbmFibGVSb3dSZW9yZGVyaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFZpZXdPcHRpb25zKCk6IFNsaWNrLlJlbW90ZVZpZXdPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBzdXBlci5nZXRWaWV3T3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5yb3dzUGVyUGFnZSA9IDI1MDA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzZXRPcmRlbihyb3dzOiBIaXN0b3JpYVJvd1tdKSB7XHJcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSAxO1xyXG4gICAgICAgICAgICByb3dzLmZvckVhY2goeCA9PiB4Lk9yZGVuID0gaSsrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5TaXRpbyB7XHJcblxyXG4gICAgaW50ZXJmYWNlIG5vc290cm9zUGFyYW1ldGVycyB7XHJcbiAgICAgICAgSXRlbXM6IE5vc290cm9zUm93W11cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIaXN0b3JpYUNhcmQ6IFJlYWN0LlNGQyA9ICh7IH0pID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgW1RhYnMsIHNldFRhYnNdID0gUmVhY3QudXNlU3RhdGU8SGlzdG9yaWFSb3dbXT4oW10pO1xyXG5cclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBSZW50YWxfU1BBLlNpdGlvLkhpc3RvcmlhU2VydmljZS5MaXN0KHt9LCByZXNwID0+IHsgc2V0VGFicyhyZXNwLkVudGl0aWVzKTsgfSlcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWN1c3RvbSB0YWJzLWhvcml6b250YWwgdGFicy1saW5lIHRhYnMtbGluZS1iaWcgdGFicy1saW5lLXN0eWxlLTIgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCIgaWQ9XCJ0YWJzLTdcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICB7VGFicy5tYXAoKGl0ZW0sIGkpID0+IDxsaSBrZXk9e2l0ZW0uSWR9IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBcIiArIChpID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIil9IGhyZWY9e1wiI3RhYnMtNy1cIiArIGl9IGRhdGEtdG9nZ2xlPVwidGFiXCI+e2l0ZW0uVGl0dWxvfTwvYT48L2xpPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIHtUYWJzLm1hcCgoaXRlbSwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtcInRhYi1wYW5lIGZhZGUgXCIgKyAoaSA9PSAwID8gXCJzaG93IGFjdGl2ZVwiIDogXCJcIil9IGlkPXtcInRhYnMtNy1cIiArIGl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LWRlc2NyaXB0aW9uYyB0ZXh0LWp1c3RpZnlcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0uQm9keSB9fT57IH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBOb3NvdHJvc0NhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8bm9zb3Ryb3NQYXJhbWV0ZXJzPntcclxuXHJcbiAgICAgICAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkl0ZW1zLm1hcDxSZWFjdC5SZWFjdE5vZGU+KChpdGVtLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIga2V5PXtpdGVtLklkfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUgbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS5UaXR1bG99PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLkJvZHkgfX0+eyB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiB2aWRlby1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvdXBsb2FkL1wiICsgaXRlbS5Gb3RvfSB3aWR0aD1cIjYwMFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgcGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIaXN0b3JpYUNhcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3ggbS0yXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj48aSBjbGFzc05hbWU9e1wiYnggXCIgKyBpdGVtLkljb25vfT48L2k+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLkNvbXRhcmlvIH19PnsgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE5vc290cm9zRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE5vc290cm9zUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE5vc290cm9zRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBOb3NvdHJvc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE5vc290cm9zUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBOb3NvdHJvc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE5vc290cm9zU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBOb3NvdHJvc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBOb3NvdHJvc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBOb3NvdHJvc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE5vc290cm9zRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE5vc290cm9zR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Tm9zb3Ryb3NSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ1NpdGlvLk5vc290cm9zJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTm9zb3Ryb3NEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE5vc290cm9zUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE5vc290cm9zUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTm9zb3Ryb3NSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBOb3NvdHJvc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlve1xyXG4gICAgaW50ZXJmYWNlIE91ckNsaWVudHNQYXJhbWV0ZXJzIHtcclxuICAgICAgICBJdGVtczogTnVlc3Ryb3NDbGllbnRlc1Jvd1tdXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE51ZXN0cm9zQ2xpZW50ZXNDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE91ckNsaWVudHNQYXJhbWV0ZXJzPntcclxuICAgICAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtY2Fyb3VzZWxcIiBpZD1cImRlYWxzLWRpc2NvdW50cy1jYXJvdXNlbFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSXRlbXMubWFwPFJlYWN0LlJlYWN0Tm9kZT4oKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2wtbWQtNiBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1hbGlnbi1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi91cGxvYWQvXCIgKyBpdGVtLkxvZ299IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHRpdGxlPXtpdGVtLk5vbWJyZX0gYWx0PXtpdGVtLk5vbWJyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gPC8+KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAgICAgLy89PT09PT09PT09PT09IERlYWxzIGFuZCBEaXNjb3VudCBDYXJvdXNlbCA9PT09PVxyXG5cclxuICAgICAgICAgICAgJChcIiNkZWFscy1kaXNjb3VudHMtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc21hcnRTcGVlZDogMTAwMCxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxufSIsIlxyXG5uYW1lc3BhY2UgUmVudGFsX1NQQS5TaXRpbyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTnVlc3Ryb3NDbGllbnRlc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxOdWVzdHJvc0NsaWVudGVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE51ZXN0cm9zQ2xpZW50ZXNGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE51ZXN0cm9zQ2xpZW50ZXNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBOdWVzdHJvc0NsaWVudGVzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBOdWVzdHJvc0NsaWVudGVzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTnVlc3Ryb3NDbGllbnRlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTnVlc3Ryb3NDbGllbnRlc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBOdWVzdHJvc0NsaWVudGVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE51ZXN0cm9zQ2xpZW50ZXNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBOdWVzdHJvc0NsaWVudGVzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE51ZXN0cm9zQ2xpZW50ZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxOdWVzdHJvc0NsaWVudGVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdTaXRpby5OdWVzdHJvc0NsaWVudGVzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTnVlc3Ryb3NDbGllbnRlc0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTnVlc3Ryb3NDbGllbnRlc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBOdWVzdHJvc0NsaWVudGVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTnVlc3Ryb3NDbGllbnRlc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE51ZXN0cm9zQ2xpZW50ZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUmVudGFsX1NQQS5TaXRpbyB7XHJcblxyXG4gICAgaW50ZXJmYWNlIHNsaWRlclBhcmFtZXRlciB7XHJcbiAgICAgICAgSXRlbXM6IFNsaWRlclJvd1tdXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNsaWRlckNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8c2xpZGVyUGFyYW1ldGVyPntcclxuICAgICAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoZXJvQ2Fyb3VzZWxcIiBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZSBjYXJvdXNlbC1mYWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIiBpZD1cImhlcm8tY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjwvb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCIgcm9sZT1cImxpc3Rib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkl0ZW1zLm1hcDxSZWFjdC5SZWFjdE5vZGU+KChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2kgPT0gMCA/ICdjYXJvdXNlbC1pdGVtIGFjdGl2ZScgOiAnY2Fyb3VzZWwtaXRlbSd9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChcIi91cGxvYWQvJyArIGl0ZW0uRm90byArICdcIiknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250ZW50IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd25cIj57aXRlbS5UaXR1bG99PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLlN1YlRpdHVsbyB9fSBjbGFzc05hbWU9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5VcFwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNoZXJvQ2Fyb3VzZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNsaWRlPVwicHJldlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24gaWNvZm9udC1yb3VuZGVkLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNoZXJvQ2Fyb3VzZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24gaWNvZm9udC1yb3VuZGVkLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Lz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICAkKFwiI2hlcm9DYXJvdXNlbFwiKS5jYXJvdXNlbCh7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogMzAwMCxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbm5hbWVzcGFjZSBSZW50YWxfU1BBLlNpdGlvIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTbGlkZXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8U2xpZGVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNsaWRlckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gU2xpZGVyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2xpZGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBTbGlkZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTbGlkZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFNsaWRlclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTbGlkZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gU2xpZGVyUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgU2xpZGVyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFJlbnRhbF9TUEEuU2l0aW8ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNsaWRlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFNsaWRlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnU2l0aW8uU2xpZGVyJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU2xpZGVyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTbGlkZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gU2xpZGVyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2xpZGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gU2xpZGVyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19