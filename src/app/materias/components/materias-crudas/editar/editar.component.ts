import { Component } from '@angular/core';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentMateriasCrudas {

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

  actualizarMateriasCrudas(){

  }

}
