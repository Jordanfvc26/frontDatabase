import { BaseDatosRoutingModule } from './base-datos-routing.module';
import { CrearComponent } from './../base-datos/components/crear/crear.component';
import { ListarComponent } from './..//base-datos/components/listar/listar.component';
import { LoginComponent } from './../base-datos/components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Importaciones necesarias para poder aplicar el formly*/
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

/*Archivo repeat para poder intectar contenido en el form del modal nueva columna*/
import { RepeatTypeComponent } from '../base-datos/repeat-section.type';
import { Alerts } from '../base-datos/alerts/alerts.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { PermisosComponent } from './components/permisos/permisos.component';



@NgModule({
  declarations: [
    RepeatTypeComponent,
    LoginComponent,
    ListarComponent,
    CrearComponent,
    EliminarComponent,
    PermisosComponent
  ],
  providers: [
    Alerts
  ],
  imports: [
    BaseDatosRoutingModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [{ name: 'repeat', component: RepeatTypeComponent }],
      validationMessages: [
        { name: 'required', message: 'Este campo es requerido' },
        { name: 'minLenght', message: 'Se requiere mínimo 8 caracteres' }],
    }),
  ],
  /*exports:[
    LoginComponent
  ]*/
})
export class BaseDatosModule { }
