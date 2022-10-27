import { PermisosComponent } from './../permisos/permisos.component';
import { ConsumirServiciosService } from '../../services/consumir-servicios.service';
import { Component, OnInit, Output } from '@angular/core';
import { Tabla } from 'src/app/base-datos/interfaces/tablas';
import { EliminarComponent } from '../eliminar/eliminar.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { Alerts } from '../../alerts/alerts.component';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  token = ""
  tablas: Tabla[] = []

  constructor(
    private api: ConsumirServiciosService, 
    public modal: NgbModal,
    public alertaEmergente: Alerts
  ) { }

  ngOnInit(): void {
    //Consumiendo servicio para listar las tablas.
    this.api.obtenerTablas().subscribe(data => {
      this.tablas = data.data;
      console.log(data)
    },error =>{
      this.alertaEmergente.alertMensajeError("No se ha podido consumir el servicio.");
    })
  }

  //Método que abre el modal para poder crear una tabla con sus respectivas columnas.
  nuevaTablaColumnas(modalCrearTabla: any) {
    this.modal.open(modalCrearTabla, { size: 'xl', scrollable: true });
  }

  //Método que abre el modal para poder asignar permisos a una tabla
  asignarPermisos(modalPermisos: any, nombreTabla:any){
    this.modal.open(modalPermisos, { size: 'lg', scrollable: true });
    PermisosComponent.nombreTabla = nombreTabla;
  }

  //Método que abre el modal para confirmar si se quiere eliminar la tabla.
  eliminarTablaColumnas(modalEliminarTabla: any, nombreTabla: any) {
    this.modal.open(modalEliminarTabla, { size: 'lg', centered: true });
    //Pasamos el nombre de la tabla a eliminar, al componente de Eliminar.
    EliminarComponent.nombreTablaEliminar = nombreTabla;

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
