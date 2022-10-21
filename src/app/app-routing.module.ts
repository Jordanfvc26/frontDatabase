import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Aplicando el Lazy Loading (Cargar Perezosa)*/
const routes: Routes = [
  {
    path: 'base-datos',
    loadChildren: () => import('./base-datos/base-datos.module').then(m => m.BaseDatosModule)
  },
  {
    path: '**',
    redirectTo: 'base-datos'
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
