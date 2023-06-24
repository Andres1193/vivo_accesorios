import { Component } from '@angular/core';
import { Categoria } from 'src/app/producto/interfaces/categoria.interface';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
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
