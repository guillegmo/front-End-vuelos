import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramarVueloComponent } from './componentes/programar-vuelo/programar-vuelo.component';
import { VerDetalleVueloComponent } from './componentes/ver-detalle-vuelo/ver-detalle-vuelo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataServices } from './data.services';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramarVueloComponent,
    VerDetalleVueloComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
