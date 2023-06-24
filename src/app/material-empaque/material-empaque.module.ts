import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';'./components/editar-material-empaque/editar-material-empaque.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroMaterialEmpaqueComponent } from './components/registro-material-empaque/registro-material-empaque.component';
import { EditarMaterialEmpaqueComponent } from './components/editar-material-empaque/editar-material-empaque.component';



@NgModule({
  declarations: [
    RegistroMaterialEmpaqueComponent,
    EditarMaterialEmpaqueComponent
  ],
  exports: [
    RegistroMaterialEmpaqueComponent,
    EditarMaterialEmpaqueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class MaterialEmpaqueModule { }
