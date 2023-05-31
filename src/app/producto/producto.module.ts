import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';
import { EditarComponent } from './components/editar/editar.component';


@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
