import { Component } from '@angular/core';
import { MateriasListas } from 'src/app/materias/interfaces/materias-listas.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentMateriasListas {

  public materiasListas: MateriasListas = {
    cod_interno: '',
    desc_mp: '',
    categoria_mp: '',
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    estado: '',
    costo_banio_linea: 0,
    cantidad_banada: 0,
    costo_banio_un: 0,
    proveedores: []
  }

  actualizarMateriasListas(){

  }
}
