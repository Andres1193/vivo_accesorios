import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistroComponentProducto } from './components/producto/registro/registro.component';
import { RegistroComponentCategoria } from './components/categoria/registro/registro.component';
import { EditarComponentProducto } from './components/producto/editar/editar.component';
import { EditarComponentCategoria } from './components/categoria/editar/editar.component';


@NgModule({
  declarations: [
    RegistroComponentProducto,
    EditarComponentProducto,
    RegistroComponentCategoria,
    EditarComponentCategoria
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
