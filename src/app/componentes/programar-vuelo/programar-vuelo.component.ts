import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/data.services';
import { Vuelos } from './vuelos';

@Component({
  selector: 'app-programar-vuelo',
  templateUrl: './programar-vuelo.component.html',
  styleUrls: ['./programar-vuelo.component.css'],
})
export class ProgramarVueloComponent implements OnInit {
  idVuelo = 0;
  ciudadOrigen = 'Seleccione Ciudad Origen';
  ciudadDestino = 'Seleccione Ciudad Destino';
  fecha = '';
  horaSalida = '';
  horaLlegada = '';
  numeroVuelo = '';
  aerolinea = 'Aerolineas';
  estado = 'Estado de Vuelo';
  boton = 'Crear';

  vuelo: any = [];
  vuelos: any = [];

  constructor(private dataServices: DataServices) {}

  ngOnInit(): void {
    this.obtenerVuelos();
  }

  agregarVuelos() {
    if( this.ciudadOrigen != "" && this.ciudadDestino != "" && this.fecha != "" && this.horaSalida != "" && this.horaLlegada != "" && this.numeroVuelo != "" && this.aerolinea != "" && this.estado != ""){
      
      let vuelo = new Vuelos(
        this.vuelos.length + 1,
        this.ciudadOrigen,
        this.ciudadDestino,
        this.fecha,
        this.horaSalida,
        this.horaLlegada,
        this.numeroVuelo,
        this.aerolinea,
        this.estado
      );
      this.dataServices.crearVuelo(vuelo).subscribe(
        (res) => {
          alert('Vuelo Creado con Exito');
          this.obtenerVuelos();
        },
        (error) => console.error(error)
      );
    }else{
      alert('Debe de llenar todos los campos para crear el Vuelo');
    } 
    
  }

  obtenerVuelos() {
    this.dataServices.cargarVuelos().subscribe(
      (res) => {
        this.vuelos = res;
        console.log(this.vuelos);
        this.limpiarFormulario();
      },
      (error) => console.error(error)
    );
  }

  eliminarGrupo(id: number) {
    this.dataServices.eliminarVuelo(id).subscribe(
      (res) => {
        console.log(res);
        this.obtenerVuelos();
        alert('Vuelo Eliminado con Exito');
      },
      (err) => console.log(err)
    );
  }

  obtenerDatosActualizar(){    
    let editarVuelo = new Vuelos(this.idVuelo, this.ciudadOrigen, this.ciudadDestino, this.fecha, this.horaSalida, this.horaLlegada, this.numeroVuelo, this.aerolinea, this.estado);
    this.actualizarVuelo(editarVuelo);    
  }

  actualizarVuelo(vuelo: Vuelos) {
    this.dataServices.actualizarVuelo(vuelo).subscribe(
      (res) => {
        console.log(res);
        this.obtenerVuelos();
        this.limpiarFormulario();
        alert('Vuelo Actulizado');
      },
      (err) => console.log(err)
    );
  }

  obtenerVuelo(id: string) {
    this.dataServices.cargarVuelo(parseInt(id)).subscribe(
      (res) => {
        this.vuelo = res;
        console.log(this.vuelo);
        this.idVuelo = this.vuelo.idVuelo;
        this.ciudadOrigen = this.vuelo.ciudadOrigen;
        this.ciudadDestino = this.vuelo.ciudadDestino;
        this.fecha = this.vuelo.fecha;
        this.horaSalida = this.vuelo.horaSalida;
        this.horaLlegada = this.vuelo.horaLlegada;
        this.numeroVuelo = this.vuelo.numeroVuelo;
        this.aerolinea = this.vuelo.aerolinea;
        this.estado = this.vuelo.estado;
        this.boton = 'Editar';
      },
      (error) => console.error(error)
    );
  }

  limpiarFormulario() {
    this.ciudadOrigen = 'Seleccione Ciudad Origen';
    this.ciudadDestino = 'Seleccione Ciudad Destino';
    this.fecha = "";
    this.horaSalida = "";
    this.horaLlegada = "";
    this.numeroVuelo = "";
    this.aerolinea = 'Aerolineas';
    this.estado = "Estado de Vuelo";
    this.boton = 'Crear';
  }

  actulizarPagina(){
    window.location.reload();
  }
}
