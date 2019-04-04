import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import jsSHA from 'jssha';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
var apiUrl = "https://api.com";
var RestApiService = /** @class */ (function () {
    function RestApiService(http) {
        this.http = http;
    }
    RestApiService.prototype.handleError = function (error) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (error.error instanceof ErrorEvent) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.error('Um erro ocorreu:', error.error.message);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.error("API retornou o c\u00F3digo " + error.status + ": " + error.error);
                }
                // return an observable with a user-facing error message
                return [2 /*return*/, 0];
            });
        });
    };
    RestApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestApiService.prototype.encrypt = function (text) {
        var shaObj = new jsSHA("SHA-256", "TEXT");
        shaObj.update(text);
        return shaObj.getHash("HEX");
    };
    RestApiService.prototype.login = function (email, password) {
        var passwordHash = this.encrypt(password);
        var url = apiUrl + "/sportsman?email=" + email + "&password=" + passwordHash;
        var result = this.http.get(url, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
        return result;
    };
    RestApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RestApiService);
    return RestApiService;
}());
export { RestApiService };
//# sourceMappingURL=rest-api.service.js.map