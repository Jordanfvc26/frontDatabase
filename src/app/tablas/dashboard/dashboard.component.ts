import { ConsumirServiciosService } from './../../servicios/consumir-servicios.service';
import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import * as iconosfab from '@fortawesome/free-brands-svg-icons';
import { Tablas, Columna } from 'src/app/interfaces/tablas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  tablas: Tablas[] = []
  
  constructor(private api: ConsumirServiciosService) { }

  ngOnInit(): void {
    this.api.obtenerTablas().subscribe(data => {
      this.tablas = data;
    })
  }


  //Iconos a utilizar
  iconAgregar = iconos.faPlus;
}
