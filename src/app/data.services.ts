import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vuelos } from "./componentes/programar-vuelo/vuelos";


@Injectable()
export class DataServices{    

    myAppUrl: string;
    myApiVuelos: string;
    myApiUsuarios: string;

    constructor(private httpClient: HttpClient){

        this.myAppUrl = 'https://localhost:44385';
        this.myApiVuelos = '/api/vuelo';
        this.myApiUsuarios = '/api/usuario';
        
    }    
    
    //peticion api vuelo

    cargarVuelos(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiVuelos}`);
    }

    cargarVuelo(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiVuelos}/${id}`);
    } 

    eliminarVuelo(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiVuelos}/${id}`);
    }

    crearVuelo(vuelo: Vuelos): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiVuelos}`, vuelo);
    }

    actualizarVuelo(vuelo: Vuelos): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiVuelos}`, vuelo);
    }

    //peticion api usuario

    cargarUsuario(nombreUsuario: string, password: string): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiUsuarios}/${nombreUsuario},${password}`);
    }
}
