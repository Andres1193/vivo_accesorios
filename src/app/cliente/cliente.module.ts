import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';


@NgModule({
  declarations: [
    RegistroClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class ClienteModule { }
