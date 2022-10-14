import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    CrearComponent,
    EditarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ColumnasModule { }
