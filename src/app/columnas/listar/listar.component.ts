import { ConsumirServiciosService } from '../../services/consumir-servicios.service';
import { Columna } from './../../interfaces/tablas';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  columnas_: Columna[] = []

  constructor(@Inject(String) private param1: Columna[]){
    this.columnas_ = param1;
  }

  ngOnInit(): void {
  }

}
