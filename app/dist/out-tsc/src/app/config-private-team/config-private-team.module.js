import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfigPrivateTeamPage } from './config-private-team.page';
var routes = [
    {
        path: '',
        component: ConfigPrivateTeamPage
    }
];
var ConfigPrivateTeamPageModule = /** @class */ (function () {
    function ConfigPrivateTeamPageModule() {
    }
    ConfigPrivateTeamPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConfigPrivateTeamPage]
        })
    ], ConfigPrivateTeamPageModule);
    return ConfigPrivateTeamPageModule;
}());
export { ConfigPrivateTeamPageModule };
//# sourceMappingURL=config-private-team.module.js.map