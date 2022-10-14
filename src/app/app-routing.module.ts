import { DashboardComponent } from './tablas/dashboard/dashboard.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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

  /*{path:"", pathMatch:"full", redirectTo:"login"},
  {path: "login", component:LoginComponent},
  {path: "registro", component:RegistroComponent},
  {path: "dashboard", component:DashboardComponent}*/
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
