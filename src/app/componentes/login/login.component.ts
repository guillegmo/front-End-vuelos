import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/data.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataServices: DataServices) { }

  ngOnInit(): void {
  }

  usuario: any = [];
  log = true;
  menu = false;
  nombreUsuario = "";
  password = "";
  mensaje = "";

  obtenerUsuario() {   
    this.dataServices.cargarUsuario((document.getElementById('usuario') as HTMLInputElement).value, (document.getElementById('password') as HTMLInputElement).value).subscribe(
      (res) => {
        this.usuario = res;        
        console.log(this.usuario);
        this.limpiarFormulario();
        this.log = false;
        this.menu = true;
      },
      (error) => {
        console.error(error);
        this.mensaje = "Usuario o Password Invalido";
      }
      
    );
  }

  limpiarFormulario(){
    this.nombreUsuario = "";
    this.password = "";
  }

}
