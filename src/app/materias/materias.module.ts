import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { RegistroComponentMateriasCrudas } from './components/materias-crudas/registro-materias-crudas/registro-materias-crudas.component';
import { EditarComponentMateriasCrudas } from './components/materias-crudas/editar-materias-crudas/editar-materias-crudas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    RegistroComponentMateriasCrudas,
    EditarComponentMateriasCrudas
  ],
  exports: [
    RegistroComponentMateriasCrudas,
    EditarComponentMateriasCrudas
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class MateriasModule { }
