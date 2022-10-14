import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tablas } from '../interfaces/tablas';

@Injectable({
  providedIn: 'root'
})
export class ConsumirServiciosService {

  url:string = "http://localhost:3000/api/base-datos/mostrar"

  constructor(private http:HttpClient) { }

  obtenerTablas():Observable<Tablas[]>{
    let ruta = this.url;
    return this.http.get<Tablas[]>(ruta);
  }
}
