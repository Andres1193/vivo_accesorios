import { Component } from '@angular/core';
import { Categoria } from 'src/app/producto/interfaces/categoria.interface';

@Component({
  selector: 'app-registro-categoria',
  templateUrl: './registro-categoria.component.html',
  styleUrls: ['./registro-categoria.component.css']
})
export class RegistroComponentCategoria {

  public categoria: Categoria = {
    codigoCategoria: 0,
    desc_categoria: '',
    estado: 'a',
  }

  crearCategoria(){

  }
}
