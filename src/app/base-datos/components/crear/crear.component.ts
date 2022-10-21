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
      type: 'input',
      props: {
        label: 'Nombre:',
        placeholder: 'usuarios',
        required: true
      },
    },
  ];

  /*Form para crear las Columnas */
  formNewColumnas = new FormGroup({});
  modelNewColumnas: any = {};
  optionsNewColumnas: FormlyFormOptions = {};
  fieldsNewColumnas: FormlyFieldConfig[] = [
    {
      key: 'columnas',
      type: 'repeat',
      props: {
        addText: 'Add Task',
        label: 'Columnas',
      },
      fieldArray: {
        fieldGroupClassName: 'row',
        fieldGroup:[
          {
            className: 'col-6',
            type: 'input',
            key: 'nombre',
            props: {
              label: 'Nombre:',
              required: true,
            },
          },
          {
            className: 'col-3',
            key: 'tipo',
            type: 'select',
            props: {
              label: 'Tipo de datos',
              placeholder: 'Seleccione',
              required: true,
              options: [
                { value: "char", label: 'char' },
                { value: "character", label: 'character' },
                { value: "numeric", label: 'numeric' },
                { value: "date", label: 'date' },
                { value: "boolean", label: 'boolean' },
              ],
            },
          },
          {
            className: 'col-3',
            type: 'input',
            key: 'length',
            props: {
              label: 'Longitud:',
              required: true,
            },
          },
          /*{
            className: 'col-1',
            key: 'primaryKey',
            type: 'select',
            props: {
              label: '¿PK?',
              placeholder: 'Sí',
              required: true,
              options: [
                { value: true, label: 'Sí' },
                { value: false, label: 'No' },
              ],
            },
          },
          {
            className: 'col-2',
            key: 'notNull',
            type: 'select',
            props: {
              label: '¿Acepta Nulos?',
              placeholder: 'Sí',
              required: true,
              options: [
                { value: "SI", label: 'Sí' },
              ],
            },
          },*/
        ]
      },
    },
  ];


  //Métodos que cambia el estado de la variable general para poder cambiar de pestaña en el modal
  pestaniaGeneral(){
    this.general = false;
  }
  pestaniaColumnas(columnas:any){
    this.general = true;
  }

  //Método que manda a insertar la tabla y columna(s) que se está creando.
  guardarDatosNewTabla(){
    var datosTabla : JSON = <JSON><unknown>{
      "table": this.modelNewTabla.table,
      "columnas": this.modelNewColumnas.columnas
    }
    this.api.crearTablasColumnas(datosTabla).subscribe(data => {
      if(data.tokenValido){
        this.alertaEmergente.alertaMensajeOK("La tabla se creó correctamente");
        this.modal.dismissAll();
      }
      else{
        this.alertaEmergente.alertMensajeError("Existió un error inesperado y no se creó la tabla");
      }
    })
  }

  //Iconos a utilizar
  iconGuardar = iconos.faFloppyDisk;
  iconCancelar = iconos.faXmark;
  iconTabla = iconos.faTable;
}
