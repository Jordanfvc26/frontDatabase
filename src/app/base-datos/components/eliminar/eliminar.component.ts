import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }


  //Método que eliminará la tabla y todas sus columnas
  eliminarTabla(){
  }

  //Iconos a utilizar
  iconCancelar = iconos.faXmark;
  iconTabla = iconos.faTable;
  iconEliminar = iconos.faTrash;
  iconAceptar = iconos.faCheck;
}
