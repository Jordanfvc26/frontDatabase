import { PermisosComponent } from './permisos/permisos.component';
import { EditarComponent } from './editar/editar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearComponent } from './crear/crear.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes:Routes =[
  {
    path: '',
    children: [
      { path: 'crear', component: CrearComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'editar', component: EditarComponent},
      { path: 'permisos', component: PermisosComponent},
      /*Path cuando no se especifica una ruta correcta*/
      { path: '**', redirectTo:'dashboard'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TablasRoutingModule { }
