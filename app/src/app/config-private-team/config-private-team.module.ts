import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfigPrivateTeamPage } from './config-private-team.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigPrivateTeamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigPrivateTeamPage]
})
export class ConfigPrivateTeamPageModule {}
