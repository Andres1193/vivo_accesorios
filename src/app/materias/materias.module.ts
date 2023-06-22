import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { RegistroComponentMateriasCrudas } from './components/materias-crudas/registro/registro.component';
import { EditarComponentMateriasCrudas } from './components/materias-crudas/editar/editar.component';
import { RegistroComponentMateriasListas } from './components/materias-listas/registro/registro.component';
import { EditarComponentMateriasListas } from './components/materias-listas/editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponentMateriasCrudas,
    EditarComponentMateriasCrudas,
    RegistroComponentMateriasListas,
    EditarComponentMateriasListas
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MateriasModule { }
