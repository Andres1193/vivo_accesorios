import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RecetaRoutingModule } from './proveedor-routing.module';
import { RegistroRecetaComponent } from './components/registro-receta/registro-receta.component';
import { EditarRecetaComponent } from './components/editar-receta/editar-receta.component';



@NgModule({
  declarations: [
    RegistroRecetaComponent,
    EditarRecetaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecetaRoutingModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class RecetaModule { }
