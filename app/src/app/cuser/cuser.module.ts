import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuserPage } from './cuser.page';

const routes: Routes = [
  {
    path: '',
    component: CuserPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CuserPage]
})
export class CuserPageModule {}
