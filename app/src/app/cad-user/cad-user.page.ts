import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsernameValidator } from "../../../validators/username.validator";
import { PasswordValidator } from "../../../validators/password.validator";

@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.page.html',
  styleUrls: ['./cad-user.page.scss'],
})
export class CadUserPage implements OnInit {
  [x: string]: FormControl;
  validate-user: FormGroup;
  matching_passwords_group: FormGroup;

  constructor() { }

  ngOnInit() {
    this.validate-user = this.formBuilder.group({
      this.name= new FormControl('', Validators.required)
    });
    
  };

}
