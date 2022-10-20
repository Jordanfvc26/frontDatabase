import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Este campo es requerido' },
        { name: 'minLenght', message: 'Se requiere mínimo 8 caracteres' }],
    })
  ],
  exports:[
    LoginComponent
  ]
})
export class AutenticacionModule { }
