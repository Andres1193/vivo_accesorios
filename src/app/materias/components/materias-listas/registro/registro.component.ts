import { Component } from '@angular/core';
import { MateriasListas } from 'src/app/materias/interfaces/materias-listas.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponentMateriasListas {

  public materiasListas: MateriasListas = {
    codigoListas: 0,
    codigoInterno: '',
    costoBanioLinea: 0,
    cantidadBanada: 0,
    costoBanioUnd: 0,
  }

  crearMateriasListas(){

  }

}
