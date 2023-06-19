import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { RegistroComponent } from './components/registro/registro.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListadoComponent } from './components/listado/listado.component';


@NgModule({
  declarations: [
    RegistroComponent,
    EditarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
