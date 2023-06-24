import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponentProducto } from './components/producto/registro/registro.component';
import { EditarComponentProducto } from './components/producto/editar/editar.component';
import { RegistroComponentCategoria } from './components/categoria/registro/registro.component';
import { EditarComponentCategoria } from './components/categoria/editar/editar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ModalEliminarModule } from './components/modal-eliminar/modal-eliminar.module';



@NgModule({
    declarations: [
        RegistroComponentProducto,
        EditarComponentProducto,
        EditarComponentCategoria,
        RegistroComponentCategoria        
    ],
    exports: [
        RegistroComponentProducto,
        EditarComponentProducto,
        EditarComponentCategoria,
        RegistroComponentCategoria
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterModule,
        ModalEliminarModule
    ]
})
export class ProductoModule { }
