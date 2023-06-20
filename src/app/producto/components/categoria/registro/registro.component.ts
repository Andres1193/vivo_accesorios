import { Component } from '@angular/core';
import { Categoria } from 'src/app/producto/interfaces/categoria.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
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
