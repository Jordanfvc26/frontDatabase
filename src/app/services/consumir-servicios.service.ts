import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Columna, Tablas } from '../interfaces/tablas';

@Injectable({
  providedIn: 'root'
})
export class ConsumirServiciosService {

  url:string = "http://localhost:3356/api/base-datos";

  constructor(private http:HttpClient) { }

  obtenerTablas():Observable<any>{
    return this.http.get<any>(this.url+"/mostrar/tablas-columnas");
  }

  crearTablasColumnas(formDatos: any):Observable<any>{
    return this.http.post(this.url+"/crear/tabla-columnas", formDatos);
  }

  /*obtenerColumnas():Observable<Columna[]>{
    let ruta = this.url;
    return this.http.get<Columna[]>(ruta);
  }*/
}
