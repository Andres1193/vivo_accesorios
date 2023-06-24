import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ModalEliminarComponent } from './modal-eliminar.component';



@NgModule({
  declarations: [
    ModalEliminarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    RouterModule
  ],
  exports:[
    ModalEliminarComponent
  ]
})
export class ModalEliminarModule { }


