import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InitialPage } from './initial.page';
var routes = [
    {
        path: '',
        component: InitialPage
    }
];
var InitialPageModule = /** @class */ (function () {
    function InitialPageModule() {
    }
    InitialPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [InitialPage]
        })
    ], InitialPageModule);
    return InitialPageModule;
}());
export { InitialPageModule };
//# sourceMappingURL=initial.module.js.map