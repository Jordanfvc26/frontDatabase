import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { ColumnasRoutingModule } from './columnas-routing.module';



@NgModule({
  declarations: [
    CrearComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    ColumnasRoutingModule
  ]
})
export class ColumnasModule { }
