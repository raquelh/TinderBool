import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD:app/src/app/cuser/cuser.module.ts
import { CuserPage } from './cuser.page';

const routes: Routes = [
  {
    path: '',
    component: CuserPage
=======
import { CadUserPage } from './cad-user.page';
/*
const routes: Routes = [
  {
    path: '',
    component: CadUserPage,
>>>>>>> e2f4530d0a96cf4e8c159767b3178b62c4ffd97b:app/src/app/cad-user/cad-user.module.ts
  }
];
*/
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
