import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadEquipePage } from './cad-equipe.page';
var routes = [
    {
        path: '',
        component: CadEquipePage
    }
];
var CadEquipePageModule = /** @class */ (function () {
    function CadEquipePageModule() {
    }
    CadEquipePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadEquipePage]
        })
    ], CadEquipePageModule);
    return CadEquipePageModule;
}());
export { CadEquipePageModule };
//# sourceMappingURL=cad-equipe.module.js.map