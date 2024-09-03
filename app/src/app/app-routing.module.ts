import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {path:'main', loadChildren:() => import('./main/main.module').then(m=>m.MainModule), canActivate: [authGuard]},
  {path:'', loadChildren:() => import('./auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
