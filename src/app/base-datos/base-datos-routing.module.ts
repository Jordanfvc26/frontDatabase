import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CrearComponent } from './components/crear/crear.component';
import { ListarComponent } from './components/listar/listar.component';


const routes:Routes =[
  {
    path: '',
    children: [
      { path: 'crear', component: CrearComponent},
      { path: 'listar', component: ListarComponent},
      { path: 'login', component: LoginComponent},
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
export class BaseDatosRoutingModule { }
