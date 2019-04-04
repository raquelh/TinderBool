import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'config-members', loadChildren: './config-members/config-members.module#ConfigMembersPageModule' },
    { path: 'config-private-team', loadChildren: './config-private-team/config-private-team.module#ConfigPrivateTeamPageModule' },
    { path: 'initial', loadChildren: './initial/initial.module#InitialPageModule' },
    { path: 'equipes', loadChildren: './equipes/equipes.module#EquipesPageModule' },
    { path: 'local', loadChildren: './local/local.module#LocalPageModule' },
    { path: 'cad-equipe', loadChildren: './cad-equipe/cad-equipe.module#CadEquipePageModule' },
    { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
    { path: 'add-members', loadChildren: './add-members/add-members.module#AddMembersPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map