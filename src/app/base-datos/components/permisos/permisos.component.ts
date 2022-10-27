import { ConsumirServiciosService } from './../../services/consumir-servicios.service';
import { Component, OnInit } from '@angular/core';

/*Importaciones necesarias para poder usar el Formly*/
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import * as iconos from '@fortawesome/free-solid-svg-icons';
import { Alerts } from 'src/app/base-datos/alerts/alerts.component';


@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  static nombreTabla = "";

  constructor(
    public modal: NgbModal,
    private api: ConsumirServiciosService,
    public alertaEmergente: Alerts
  ) { }

  ngOnInit(): void {
  }


  /*Form para crear la Tabla*/
  formPermisos = new FormGroup({});
  modelPermisos: any = {};
  optionsPermisos: FormlyFormOptions = {};
  fieldsPermisos: FormlyFieldConfig[] = [
    {
      key: 'permisos',
      
      fieldGroup:[
        {
          key: 'select',
          type: 'checkbox',
          props: {
            label: 'Select',
          }
        },
        {
          key: 'insert',
          type: 'checkbox',
          props: {
            label: 'Insert',
          }
        },
        {
          key: 'update',
          type: 'checkbox',
          props: {
            label: 'update',
          }
        },
        {
          key: 'delete',
          type: 'checkbox',
          props: {
            label: 'Delete',
          }
        },
      ]
    },
    {
      key: 'user',
      type: 'select',
      props: {
        label: 'Usuario que tendrá los permisos',
        placeholder: 'Seleccione',
        required: true,
        options: [
          { value: "jordan", label: 'Jordan' },
          { value: "postgres", label: 'postgres' },
        ],
      },
    },
  ];


  asignarPermisos() {
    var datosTabla : JSON = <JSON><unknown>{
      "table": PermisosComponent.nombreTabla,
      "permisos": this.modelPermisos.permisos,
      "user": this.modelPermisos.user
    }

    console.log(datosTabla);
    
    this.api.otorgarPermisos(datosTabla).subscribe(data => {
      //console.log(data)
      this.alertaEmergente.alertaMensajeOK("Se asignaron correctamente los permisos.");
    },error =>{
      this.alertaEmergente.alertMensajeError(error.error);
    })
    this.modal.dismissAll();
  }



  //Iconos a utilizar
  iconPermisos = iconos.faUserLock;
  iconCancelar = iconos.faXmark;
  iconAceptar = iconos.faCheck;
}
