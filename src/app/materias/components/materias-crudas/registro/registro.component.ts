import { Component } from '@angular/core';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponentMateriasCrudas {

  public materiasCrudas: MateriasCrudas = {
    codigoCrudas: 0,
    codigoInterno: ''
  }

  crearMateriasCrudas(){

  }

}
