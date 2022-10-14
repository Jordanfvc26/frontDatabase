import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './../tablas/editar/editar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './crear/crear.component';


const routes:Routes =[
  {
    path: '',
    children: [
      { path: 'crear', component: CrearComponent},
      { path: 'listar', component: ListarComponent},
      { path: 'editar', component: EditarComponent},
      /*Path cuando no se especifica una ruta correcta*/
      { path: '**', redirectTo:'listar'}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ColumnasRoutingModule { }
