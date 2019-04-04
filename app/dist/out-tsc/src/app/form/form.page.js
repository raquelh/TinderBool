import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { PasswordValidator } from "../../../validators/password.validator";
import { Router } from "@angular/router";
var FormPage = /** @class */ (function () {
    function FormPage(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Por favor coloque seu nome.' }
            ],
            'lastname': [
                { type: 'required', message: 'Por favor coloque seu sobrenome.' }
            ],
            'email': [
                { type: 'required', message: 'Por favor coloque seu email.' },
                { type: 'pattern', message: 'Um válido de preferencia.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required.' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Password mismatch.' }
            ]
        };
    }
    FormPage.prototype.ngOnInit = function () {
        // baguio
        this.matching_passwords_group = new FormGroup({
            password: new FormControl("", Validators.compose([
                Validators.minLength(5),
                Validators.required,
                Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")
            ])),
            confirm_password: new FormControl("", Validators.required)
        }, function (formGroup) {
            return PasswordValidator.areEqual(formGroup);
        });
        this.validations_form = this.formBuilder.group({
            name: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            terms: new FormControl(true, Validators.pattern('true'))
        });
    };
    FormPage.prototype.onSubmit = function (values) {
        console.log(values);
        this.router.navigate(["/user"]);
    };
    FormPage = tslib_1.__decorate([
        Component({
            selector: "app-form",
            templateUrl: "form.page.html",
            styleUrls: ["form.page.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Router])
    ], FormPage);
    return FormPage;
}());
export { FormPage };
//# sourceMappingURL=form.page.js.map