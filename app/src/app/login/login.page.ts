import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  signIn() {

  }

  signUp() {
    this.http.get('http://learnifier.com/users').subscribe((response) => {
      console.log(response);
    });
  }

}
