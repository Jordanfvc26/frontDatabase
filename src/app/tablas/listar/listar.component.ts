import { Router } from '@angular/router';
import { ConsumirServiciosService } from '../../services/consumir-servicios.service';
import { Component, OnInit } from '@angular/core';
import { Tablas } from 'src/app/interfaces/tablas';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tablas: Tablas[] = []
  columnasAenviar: ListarComponent | undefined
  
  constructor(private api: ConsumirServiciosService, private ruta: Router, public modal: NgbModal) { }

  ngOnInit(): void {
    this.api.obtenerTablas().subscribe(data => {
      this.tablas = data.data;
      console.log(data)
    })
  }

  //Método que abre el modal para poder crear una tabla con sus respectivas columnas
  nuevaTablaColumnas(crearTabla:any){
    this.modal.open(crearTabla,{size: 'xl', scrollable: true});
  }

  //Iconos a utilizar
  iconAgregar = iconos.faPlus;
  iconBuscar = iconos.faMagnifyingGlass;
  iconTabla = iconos.faTable;
  iconVerDetalles = iconos.faEye;
  iconEditar = iconos.faPenToSquare;
  iconPermisos = iconos.faUserLock;
  iconEliminar = iconos.faTrash;

}
