import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormPage } from './form.page';
var routes = [
    {
        path: '',
        component: FormPage
    }
];
var FormPageModule = /** @class */ (function () {
    function FormPageModule() {
    }
    FormPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FormPage]
        })
    ], FormPageModule);
    return FormPageModule;
}());
export { FormPageModule };
//# sourceMappingURL=form.module.js.map