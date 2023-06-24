import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponentProducto } from './components/producto/registro-producto/registro-producto.component';
import { EditarComponentProducto } from './components/producto/editar-producto/editar-producto.component';
import { RegistroComponentCategoria } from './components/categoria/registro-categoria/registro-categoria.component';
import { EditarComponentCategoria } from './components/categoria/editar-categoria/editar-categoria.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
import { ModalEliminarModule } from '../modal-eliminar/modal-eliminar.module';



@NgModule({
    declarations: [
        RegistroComponentProducto,
        EditarComponentProducto,
        EditarComponentCategoria,
        RegistroComponentCategoria,
    ],
    exports: [
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
