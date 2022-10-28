import { ConsumirServiciosService } from '../../services/consumir-servicios.service';
import { Component, OnInit } from '@angular/core';

/*Importaciones necesarias para poder usar el Formly*/
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

/*Importamos el componente de Alertas para usar las alertas emergentes.*/
import { Alerts } from 'src/app/base-datos/alerts/alerts.component';
import * as iconos from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  general: boolean = false;

  constructor(
    public modal: NgbModal,
    private api: ConsumirServiciosService,
    public alertaEmergente: Alerts
  ) { }


  ngOnInit(): void {
  }

  /*Form para crear la Tabla*/
  formNewTabla = new FormGroup({});
  modelNewTabla: any = {};
  optionsNewTabla: FormlyFormOptions = {};
  fieldsNewTabla: FormlyFieldConfig[] = [
    {
      key: 'table',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          type: 'input',
          key: 'name',
          props: {
            label: 'Nombre:',
            required: true,
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'description',
          props: {
            label: 'Descripción:',
            required: true,
          },
        },
        {
          className: 'col-2',
          type: 'input',
          key: 'code',
          props: {
            label: 'Código:',
            required: true,
          },
        },
      ]
    },
  ];



  /*Form para crear las Columnas */
  formNewColumnas = new FormGroup({});
  modelNewColumnas: any = {};
  optionsNewColumnas: FormlyFormOptions = {};
  fieldsNewColumnas: FormlyFieldConfig[] = [
    {
      key: 'fields',
      type: 'repeat',
      props: {
        addText: 'Add Task',
        label: 'Columnas',
      },
      fieldArray: {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-4',
            type: 'input',
            key: 'name',
            props: {
              label: 'Nombre:',
              required: true,
            },
          },
          {
            className: 'col-6',
            type: 'input',
            key: 'description',
            props: {
              label: 'Descripción:',
              required: true,
            },
          },
          {
            className: 'col-2',
            type: 'input',
            key: 'code',
            props: {
              label: 'Código:',
              required: true,
            },
          },
        ]
      },
    },
  ];


  //Métodos que cambia el estado de la variable general para poder cambiar de pestaña en el modal
  pestaniaGeneral() {
    this.general = false;
  }
  pestaniaColumnas(columnas: any) {
    this.general = true;
  }

  //Método que manda a insertar la tabla y columna(s) que se está creando.
  guardarDatosNewTabla() {
    var objectTabla = JSON.parse(JSON.stringify(
      this.modelNewTabla.table
    ))
    //Creamos un modelo JSON de acuerdo a los campos que se encuentran en la parte superior.
    var datosTabla: JSON = <JSON><unknown>{
      "table": objectTabla,
      "fields": this.modelNewColumnas.fields
    }
    this.api.crearTablasColumnas(datosTabla).subscribe(data => {
      this.alertaEmergente.alertaMensajeOK("La tabla se creó correctamente");
      this.modal.dismissAll();
    }, error => {
      this.alertaEmergente.alertMensajeError(error.error.msj);
    })
  }

  //Iconos a utilizar
  iconGuardar = iconos.faFloppyDisk;
  iconCancelar = iconos.faXmark;
  iconTabla = iconos.faTable;
}
