import { Component } from '@angular/core';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentMateriasCrudas {

  public materiasCrudas: MateriasCrudas = {
    codigoCrudas: 0,
    codigoInterno: ''
  }

  actualizarMateriasCrudas(){

  }

}
