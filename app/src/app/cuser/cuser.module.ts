import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuserPage } from './cuser.page';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild()
  ],
  declarations: [CuserPage]
})
export class CuserPageModule {}
