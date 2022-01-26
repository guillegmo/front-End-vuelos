import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProgramarVueloComponent } from './componentes/programar-vuelo/programar-vuelo.component';
import { VerDetalleVueloComponent } from './componentes/ver-detalle-vuelo/ver-detalle-vuelo.component';

const routes: Routes = [
  { path: 'programarVuelo', component: ProgramarVueloComponent },
  { path: 'verDetalleVuelo', component: VerDetalleVueloComponent },
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
