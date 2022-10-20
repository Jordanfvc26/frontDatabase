import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { PermisosComponent } from './permisos/permisos.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablasRoutingModule } from './tablas-routing.module';

/*Importaciones necesarias para poder aplicar el formly*/
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

/*Archivo repeat para poder intectar contenido en el form del modal nueva columna*/
import { RepeatTypeComponent } from './repeat-section.type';
import { Alerts } from '../alerts/alerts.component';



@NgModule({
  declarations: [
    CrearComponent,
    EditarComponent,
    ListarComponent,
    PermisosComponent,
    RepeatTypeComponent,
    ListarComponent
  ],
  providers: [
    Alerts
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
