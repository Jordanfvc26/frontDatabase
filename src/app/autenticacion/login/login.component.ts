import { Component, OnInit } from '@angular/core';


import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }


  form = new FormGroup({
    
  });
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      //key: 'Input',
      type: 'input',
      props: {
        label: 'Email:',
        placeholder: 'usuario@gmail.com',
        minLength: 8,
        required: true,
        formControlName: 'email'
      },
    },
    {
      //key: 'Input',
      type: 'input',
      props: {
        label: 'Contraseña:',
        placeholder: 'Contraseña',
        minLength: 8,
        type: 'password',
        required: true,
        formControlName: 'email'
      },
    }
  ];


  iniciarSesion() {
    console.log(this.form)
    if (this.form.valid) {
      this.ruta.navigateByUrl('/tablas/dashboard');
    }
    
    
  }
}
