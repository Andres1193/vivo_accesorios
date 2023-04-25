import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';



@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
