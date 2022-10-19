import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearComponent } from './crear/crear.component';
import { PermisosComponent } from './permisos/permisos.component';
import { EditarComponent } from './editar/editar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablasRoutingModule } from './tablas-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { RepeatTypeComponent } from './repeat-section.type';



@NgModule({
  declarations: [
    DashboardComponent,
    CrearComponent,
    PermisosComponent,
    EditarComponent,
    RepeatTypeComponent
  ],
  imports: [
    TablasRoutingModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [{ name: 'repeat', component: RepeatTypeComponent }],
      validationMessages: [{ name: 'required', message: 'Este campo es requerido' }],
    }),
  ]
})
export class TablasModule { }
