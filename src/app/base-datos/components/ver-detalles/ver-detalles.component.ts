import { Alerts } from 'src/app/base-datos/alerts/alerts.component';
import { ConsumirServiciosService } from './../../services/consumir-servicios.service';
import { Tabla } from './../../interfaces/tablas';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css']
})
export class VerDetallesComponent implements OnInit {

  tablas: Tabla[] = [];
  static IDTablaEliminar = 0;

  constructor(
    public modal: NgbModal,
    private api: ConsumirServiciosService,
    public alertaEmergente: Alerts,
  ) { }

  ngOnInit(): void {
    //Consumiendo servicio para listar el detalle de la tabla
    this.api.verDetalles(VerDetallesComponent.IDTablaEliminar).subscribe(data => {
      this.tablas = data.data;
    }, error => {
      this.alertaEmergente.alertMensajeError(error.error.msj);
    })
  }



  //Iconos a utilizar
  iconDetalles = iconos.faEye;
  iconAceptar = iconos.faCheckCircle;

}
