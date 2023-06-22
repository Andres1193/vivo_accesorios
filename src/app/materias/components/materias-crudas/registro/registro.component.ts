import { Component } from '@angular/core';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponentMateriasCrudas {

  public materiasCrudas: MateriasCrudas = {
    cod_interno: '',
    desc_mp: '',
    categoria_mp: '',
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    estado: '',
    proveedores: []
  }

  crearMateriasCrudas(){

  }

}
