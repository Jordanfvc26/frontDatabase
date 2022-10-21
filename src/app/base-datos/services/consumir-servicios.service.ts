import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumirServiciosService {

  url: string = "http://localhost:3356/api/base-datos";

  token = localStorage.getItem("usuario");
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + this.token
  });
  options = { headers: this.headers }
  

  constructor(private http: HttpClient) { }

  //Método para obtener el token.
  obtenerToken(): Observable<any> {
    return this.http.get(this.url + "/firmaToken");
  }

  //Método para obtener las tablas y listarlas.
  obtenerTablas(): Observable<any> {
    return this.http.get<any>(this.url + "/mostrar/tablas-columnas", this.options);
  }

  //Método para crear las tablas y sus respectivas columnas.
  crearTablasColumnas(formDatos: any): Observable<any> {
    return this.http.post(this.url + "/crear/tabla-columnas", formDatos, this.options);
  }

  //Método para eliminar una tabla con sus columnas
  eliminarTablasColumnas(nombreTabla: any):Observable<any>{
    return this.http.delete(this.url + "/borrar/tabla/" + nombreTabla, this.options);
  }
}
