
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearComponent } from './crear/crear.component';
import { PermisosComponent } from './permisos/permisos.component';
import { EditarComponent } from './editar/editar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablasRoutingModule } from './tablas-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    CrearComponent,
    PermisosComponent,
    EditarComponent
  ],
  imports: [
    TablasRoutingModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class TablasModule { }
