import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from "@angular/router";
import { RestApiService } from '../rest-api.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(api, loadingCtrl, router, alertController) {
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.alertController = alertController;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.signUp = function () {
    };
    LoginPage.prototype.errorToast = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: ['Continuar']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function (form) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Carregando...',
                            spinner: 'crescent',
                            duration: 4000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api.login(form.value.email, form.value.password)
                                .subscribe(function (res) {
                                console.log(res);
                                loading.dismiss();
                                if (res == 0)
                                    _this.errorToast('Algo de errado ocorreu', 'Tente novamente em alguns minutos.');
                                /*else if(res)
                                  this.errorToast('Email ou senha inválidos', 'Tente novamente');*/
                                else {
                                    _this.sportsman = res;
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [RestApiService,
            LoadingController,
            Router,
            AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map