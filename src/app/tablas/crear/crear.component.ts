import { Component, OnInit } from '@angular/core';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  general: boolean = false;

  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }

  /*Form para crear la tabla*/
  formNewTabla = new FormGroup({});
  modelNewTabla: any = {};
  optionsNewTabla: FormlyFormOptions = {};
  fieldsNewTabla: FormlyFieldConfig[] = [
    {
      key: 'nombreTabla',
      type: 'input',
      props: {
        label: 'Nombre:',
        placeholder: 'usuarios',
        required: true
      },
    },
    {
      key: 'owner',
      type: 'select',
      props: {
        label: 'Owner:',
        placeholder: 'postgres',
        required: true,
        options: [
          { value: 1, label: 'postgres' },
          { value: 1, label: 'jvera' },
          { value: 2, label: 'lmore' },
          { value: 3, label: 'imanzaba' },
        ],
      },
    },
    {
      key: 'schema',
      type: 'select',
      props: {
        label: 'Schema:',
        placeholder: 'public',
        required: true,
        options: [
          { value: 1, label: 'public' },
          { value: 1, label: 'clientes' },
          { value: 2, label: 'ventas' },
          { value: 3, label: 'vendedores' },
        ],
      },
    },
  ];

  

  /*Form para crear las columnas */
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
            className: 'col-4',
            type: 'input',
            key: 'nombre',
            props: {
              label: 'Nombre:',
              required: true,
            },
          },
          {
            className: 'col-3',
            type: 'input',
            key: 'tipoDato',
            props: {
              label: 'Tipo de Dato',
              required: true,
            },
          },
          {
            className: 'col-2',
            type: 'input',
            key: 'longitud',
            props: {
              label: 'Longitud',
              required: true,
            },
          },
          {
            className: 'col-1',
            key: 'primaryKey',
            type: 'select',
            props: {
              label: '¿PK?',
              placeholder: 'Sí',
              required: true,
              options: [
                { value: 1, label: 'Sí' },
                { value: 2, label: 'No' },
              ],
            },
          },
          {
            className: 'col-2',
            key: 'aceptaNulo',
            type: 'select',
            props: {
              label: 'Acepta Nulos?',
              placeholder: 'Sí',
              required: true,
              options: [
                { value: 1, label: 'Sí' },
                { value: 2, label: 'No' },
              ],
            },
          },
        ]
      },
    },
  ];


  pestaniaGeneral(){
    this.general = false;
  }

  pestaniaColumnas(){
    this.general = true;
  }

  guardarDatosNewTabla(){
    console.log(this.modelNewTabla);
    console.log(this.modelNewColumnas);
  }
}
