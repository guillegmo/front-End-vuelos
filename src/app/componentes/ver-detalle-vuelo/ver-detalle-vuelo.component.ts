import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/data.services';
import { Vuelos } from '../programar-vuelo/vuelos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ver-detalle-vuelo',
  templateUrl: './ver-detalle-vuelo.component.html',
  styleUrls: ['./ver-detalle-vuelo.component.css']
})
export class VerDetalleVueloComponent implements OnInit {

  idVuelo = 0;
  ciudadOrigen = '';
  ciudadDestino = '';
  fecha = '';
  horaSalida = '';
  horaLlegada = '';
  numeroVuelo = '';
  aerolinea = '';
  estado = '';

  vuelo: any = [];
  vuelos: any = [];
  
  
  constructor( private modal: NgbModal, private dataServices: DataServices) { 
  }

  ngOnInit(): void {
    this.obtenerVuelos();
  }

  openXL(contenido: any) {
    this.modal.open(contenido, { size: 'xl' });
  }

  cerrarModal() {
    this.modal.dismissAll();
  }

  obtenerVuelos(){
    this.dataServices.cargarVuelos()
    .subscribe(
      res => {
        this.vuelos = res;
        console.log(this.vuelos);
      },
      error => console.error(error)
    );
  }

  obtenerDatosActualizar(){
    let editarVuelo = new Vuelos(parseInt((document.getElementById('idVuelo') as HTMLInputElement).value), (document.getElementById('ciudadOrigen') as HTMLInputElement).value, (document.getElementById('ciudadDestino') as HTMLInputElement).value, (document.getElementById('fecha') as HTMLInputElement).value, (document.getElementById('horaSalida') as HTMLInputElement).value, (document.getElementById('horaLlegada') as HTMLInputElement).value,(document.getElementById('numeroVuelo') as HTMLInputElement).value, (document.getElementById('aerolinea') as HTMLInputElement).value, (document.getElementById('estado') as HTMLInputElement).value);
    this.actualizarVuelo(editarVuelo);
    this.cerrarModal();
  }

  actualizarVuelo(vuelo: Vuelos) {
    this.dataServices.actualizarVuelo(vuelo).subscribe(
      (res) => {
        console.log(res);
        this.obtenerVuelos();
        alert('Datos Vuelo\n' + 'Vuelo: ' + vuelo.ciudadOrigen + '-' + vuelo.ciudadDestino + '\n' + 'Numero Vuelo: ' + vuelo.numeroVuelo + '\n' + 'Nuevo Estado: ' + vuelo.estado);
      },
      (err) => console.log(err)
    );
  }

   actulizarPagina(){
    window.location.reload();
  }
}
