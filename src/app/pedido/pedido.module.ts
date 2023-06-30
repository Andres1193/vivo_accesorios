import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module'; './components/editar-pedido/editar-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroPedidoComponent } from './components/registro-pedido/registro-pedido.component';
import { EditarPedidoComponent } from './components/editar-pedido/editar-pedido.component';



@NgModule({
  declarations: [
    RegistroPedidoComponent,
    EditarPedidoComponent

  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class PedidoModule { }
