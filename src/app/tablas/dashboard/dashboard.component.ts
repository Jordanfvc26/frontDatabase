import { ListarComponent } from './../../columnas/listar/listar.component';
import { Router } from '@angular/router';
import { ConsumirServiciosService } from './../../servicios/consumir-servicios.service';
import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import * as iconosfab from '@fortawesome/free-brands-svg-icons';
import { Tablas, Columna } from 'src/app/interfaces/tablas';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  tablas: Tablas[] = []
  
  constructor(private api: ConsumirServiciosService, private ruta: Router, public modal: NgbModal) { }

  ngOnInit(): void {
    this.api.obtenerTablas().subscribe(data => {
      /*this.tablas = data.data;*/
      console.log(data)
    })
  }

  columnasAenviar: ListarComponent | undefined
  

  enviarColumnas(columna:Columna[]){
    this.ruta.navigateByUrl('/columnas/listar');
     this.columnasAenviar = new ListarComponent(columna);
        
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
