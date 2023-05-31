import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { RegistroComponent } from './components/registro/registro.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent,
    EditarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProveedorRoutingModule
  ]
})
export class ProveedorModule { }
