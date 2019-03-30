import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from  "@angular/router";
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  sportsman: any;

  constructor(public api: RestApiService, public loadingCtrl: LoadingController, private  router:  Router) {

  }

  ngOnInit() {

  }

  signUp() {

  }

  async login(form) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.api.login(form.value.email, form.value.password)
      .subscribe(res => {
        console.log(res);
        this.sportsman = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
