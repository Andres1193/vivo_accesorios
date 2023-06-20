import { Component } from '@angular/core';
import { Categoria } from 'src/app/producto/interfaces/categoria.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentCategoria {

  public categoria: Categoria = {
    codigoCategoria: 0,
    desc_categoria: '',
    estado: 'a',
  }

  actualizarCategoria(){

  }

}
