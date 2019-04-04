import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EquipesPage } from './equipes.page';
var routes = [
    {
        path: '',
        component: EquipesPage
    }
];
var EquipesPageModule = /** @class */ (function () {
    function EquipesPageModule() {
    }
    EquipesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EquipesPage]
        })
    ], EquipesPageModule);
    return EquipesPageModule;
}());
export { EquipesPageModule };
//# sourceMappingURL=equipes.module.js.map