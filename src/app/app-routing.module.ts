import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Aplicando el Lazy Loading (Cargar Perezosa)*/
const routes: Routes = [
  {
    path: 'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {
    path: 'tablas',
    loadChildren: () => import('./tablas/tablas.module').then(m => m.TablasModule)
  },
  {
    path: 'columnas',
    loadChildren: () => import('./columnas/columnas.module').then(m => m.ColumnasModule)
  },
  {
    path: '**',
    redirectTo: 'autenticacion'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
