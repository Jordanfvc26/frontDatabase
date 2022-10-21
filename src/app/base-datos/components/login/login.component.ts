import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }


  /*Formulario para el login*/
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email:',
        placeholder: 'usuario@gmail.com',
        minLength: 8,
        required: true
      },
    },
    {
      key: 'password',
      type: 'input',
      props: {
        label: 'Contraseña:',
        placeholder: 'Contraseña',
        minLength: 8,
        type: 'password',
        required: true
      },
    }
  ];


  iniciarSesion() {
    if (this.model.email == "jordan123" && this.model.password == "12345678") {
      this.ruta.navigateByUrl('base-datos/listar');
    }
  }
}