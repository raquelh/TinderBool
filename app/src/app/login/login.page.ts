import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
  private loginForm: any;

  constructor(public api: RestApiService,
              public loadingCtrl: LoadingController,
              private  router:  Router,
              public alertController : AlertController ) { }

  ngOnInit() {

  }

  async errorToast(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['Continuar']
    });
    await alert.present();
  }


  async login(form) {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando...',
      spinner: 'crescent',
      duration: 4000
    });
    await loading.present();
    await this.api.login(form.value.email, form.value.password)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();
        if(res == 0)
          this.errorToast('Algo de errado ocorreu', 'Tente novamente em alguns minutos.');
        /*else if(res)
          this.errorToast('Email ou senha inválidos', 'Tente novamente');*/
        else{
          this.sportsman = res;
        }
      });
  }

}
