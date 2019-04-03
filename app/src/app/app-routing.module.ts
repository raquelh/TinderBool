import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'config-members', loadChildren: './config-members/config-members.module#ConfigMembersPageModule' },
  { path: 'config-private-team', loadChildren: './config-private-team/config-private-team.module#ConfigPrivateTeamPageModule' },
  { path: 'initial', loadChildren: './initial/initial.module#InitialPageModule' },
  { path: 'equipes', loadChildren: './equipes/equipes.module#EquipesPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
