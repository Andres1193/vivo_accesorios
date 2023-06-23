import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { RegistroComponent } from './components/registro/registro.component';
import { EditarComponent } from './components/editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    RegistroComponent,
    EditarComponent

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
