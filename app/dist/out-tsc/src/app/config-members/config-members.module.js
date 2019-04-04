import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfigMembersPage } from './config-members.page';
var routes = [
    {
        path: '',
        component: ConfigMembersPage
    }
];
var ConfigMembersPageModule = /** @class */ (function () {
    function ConfigMembersPageModule() {
    }
    ConfigMembersPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConfigMembersPage]
        })
    ], ConfigMembersPageModule);
    return ConfigMembersPageModule;
}());
export { ConfigMembersPageModule };
//# sourceMappingURL=config-members.module.js.map