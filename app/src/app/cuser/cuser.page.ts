import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormControl, FormGroup} from 'node_modules/@angular/forms';
import { UsernameValidator } from 'validators/username.validator';

import {PasswordValidator} from 'validators/password.validator';

import {Router} from 'node_modules/@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-cuser',
  templateUrl: './cuser.page.html',
  styleUrls: ['./cuser.page.scss'],
})
export class CuserPage implements OnInit {


  validateUser: FormGroup;
  matching_passwords_group: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.matching_passwords_group = new FormGroup(
      {
        password: new FormControl("", Validators.compose([
            Validators.minLength(5),

            Validators.required,
            Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")
        ])
        ),
        confirm_password: new FormControl("", Validators.required)
      },
      (formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);
      }
    );
    this.validateUser = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(true, Validators.pattern('true'))
		});
  }

  validation_messages = {
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
  ]};

  onSubmit(values){
    console.log(values);
    this.router.navigate(["/user"]);
    }

}
