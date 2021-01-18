import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessListComponent } from './components/access-list/access-list.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'ResetPassword', component: ForgotComponent
  },
  { 
    path: 'Home', component: HomeComponent
  },
  {
    path: 'ListaDeAcesso', component: AccessListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
