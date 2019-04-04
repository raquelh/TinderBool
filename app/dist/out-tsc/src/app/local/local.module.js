import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LocalPage } from './local.page';
var routes = [
    {
        path: '',
        component: LocalPage
    }
];
var LocalPageModule = /** @class */ (function () {
    function LocalPageModule() {
    }
    LocalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LocalPage]
        })
    ], LocalPageModule);
    return LocalPageModule;
}());
export { LocalPageModule };
//# sourceMappingURL=local.module.js.map