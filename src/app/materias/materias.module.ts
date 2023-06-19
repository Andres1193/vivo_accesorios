import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasPrimasComponent } from './components/materias-primas/materias-primas.component';
import { MateriasListasComponent } from './components/materias-listas/materias-listas.component';
import { MateriasCrudasComponent } from './components/materias-crudas/materias-crudas.component';


@NgModule({
  declarations: [
    MateriasPrimasComponent,
    MateriasListasComponent,
    MateriasCrudasComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule
  ]
})
export class MateriasModule { }
