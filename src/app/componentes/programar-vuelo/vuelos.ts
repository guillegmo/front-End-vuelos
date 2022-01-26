export class Vuelos{
    constructor(
        public idVuelo: number,
        public ciudadOrigen: string,
        public ciudadDestino: String,
        public fecha: string,
        public horaSalida: string,
        public horaLlegada: string,
        public numeroVuelo: string,
        public aerolinea: string,
        public estado: string,
    ){}
}