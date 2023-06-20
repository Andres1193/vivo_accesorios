import { Component } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  public receta: Receta = {
    codigoReceta: 0,
    codigoInterno: 0,
    costoTotalUnd: 0,
    cantidad: 0,
    codProducto: 0,
    codME: 0,
    estado: 'a',
  }

  actualizarReceta(){
    
  }
}
