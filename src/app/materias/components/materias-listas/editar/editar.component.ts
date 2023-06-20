import { Component } from '@angular/core';
import { MateriasListas } from 'src/app/materias/interfaces/materias-listas.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentMateriasListas {

  public materiasListas: MateriasListas = {
    codigoListas: 0,
    codigoInterno: '',
    costoBanioLinea: 0,
    cantidadBanada: 0,
    costoBanioUnd: 0,
  }

  actualizarMateriasListas(){

  }
}
