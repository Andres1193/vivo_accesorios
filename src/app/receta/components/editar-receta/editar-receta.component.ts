import { Component } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css']
})
export class EditarRecetaComponent {

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
