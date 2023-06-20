import { Component } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public receta: Receta = {
    codigoReceta: 0,
    codigoInterno: 0,
    costoTotalUnd: 0,
    cantidad: 0,
    codProducto: 0,
    codME: 0,
    estado: 'a',
  }

  crearReceta(){
    
  }
}
