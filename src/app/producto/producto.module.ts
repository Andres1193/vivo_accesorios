import { Producto } from 'src/app/producto/interfaces/producto.interface';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponentProducto } from './components/producto/registro/registro.component';
import { EditarComponentProducto } from './components/producto/editar/editar.component';
import { RegistroComponentCategoria } from './components/categoria/registro/registro.component';
import { EditarComponentCategoria } from './components/categoria/editar/editar.component';



@NgModule({
  declarations: [
    RegistroComponentProducto,
    EditarComponentProducto,
    EditarComponentCategoria,
    RegistroComponentCategoria
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RegistroComponentProducto,
    EditarComponentProducto,
    EditarComponentCategoria,
    RegistroComponentCategoria
  ]
})
export class ProductoModule { }
