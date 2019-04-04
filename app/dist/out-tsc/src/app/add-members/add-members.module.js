import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddMembersPage } from './add-members.page';
var routes = [
    {
        path: '',
        component: AddMembersPage
    }
];
var AddMembersPageModule = /** @class */ (function () {
    function AddMembersPageModule() {
    }
    AddMembersPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddMembersPage]
        })
    ], AddMembersPageModule);
    return AddMembersPageModule;
}());
export { AddMembersPageModule };
//# sourceMappingURL=add-members.module.js.map