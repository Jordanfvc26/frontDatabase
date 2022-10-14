import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes =[
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'registro', component: RegistroComponent},
      /*Path cuando no se especifica una ruta correcta*/
      { path: '**', redirectTo:'login'}
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AutenticacionRoutingModule { }