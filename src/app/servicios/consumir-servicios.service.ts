import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Columna, Tablas } from '../interfaces/tablas';

@Injectable({
  providedIn: 'root'
})
export class ConsumirServiciosService {

  url:string = "​http://localhost:3356/api/base-datos/mostrar/tablas-columnas"

  constructor(private http:HttpClient) { }

  obtenerTablas():Observable<any>{
    let ruta = this.url;
    return this.http.get<any>(ruta);
  }

  /*obtenerColumnas():Observable<Columna[]>{
    let ruta = this.url;
    return this.http.get<Columna[]>(ruta);
  }*/
}
