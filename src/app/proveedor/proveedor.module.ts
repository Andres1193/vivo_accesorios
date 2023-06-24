import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroProveedorComponent } from './components/registro-proveedor/registro-proveedor.component';
import { EditarProveedorComponent } from './components/editar-proveedor/editar-proveedor.component';


@NgModule({
  declarations: [
    RegistroProveedorComponent,
    EditarProveedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProveedorRoutingModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class ProveedorModule { }
