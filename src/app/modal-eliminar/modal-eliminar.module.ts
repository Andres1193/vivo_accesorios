import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEliminarComponent } from './modal-eliminar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ModalEliminarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [
    ModalEliminarComponent
  ]
})
export class ModalEliminarModule { }
