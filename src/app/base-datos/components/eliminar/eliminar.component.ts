import { ConsumirServiciosService } from './../../services/consumir-servicios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Inject, Input, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  static nombreTablaEliminar = "";

  constructor(
    public modal: NgbModal,
    private api: ConsumirServiciosService,
  ) {}

  ngOnInit(): void {
  }


  //Método que eliminará la tabla y todas sus columnas
  public eliminarTabla() {
    this.api.eliminarTablasColumnas(EliminarComponent.nombreTablaEliminar).subscribe(data => {
      console.log(data)
    })
    this.modal.dismissAll();
  }

  
  //Iconos a utilizar
  iconCancelar = iconos.faXmark;
  iconTabla = iconos.faTable;
  iconEliminar = iconos.faTrash;
  iconAceptar = iconos.faCheck;
}
