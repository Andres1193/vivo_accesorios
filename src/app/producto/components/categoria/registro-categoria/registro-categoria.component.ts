import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/producto/interfaces/categoria.interface';

@Component({
  selector: 'app-registro-categoria',
  templateUrl: './registro-categoria.component.html',
  styleUrls: ['./registro-categoria.component.css']
})
export class RegistroComponentCategoria {
  public categoriaForm: FormGroup;
  public categoria: Categoria = {
    codigoCategoria: 0,
    desc_categoria: ''
  }

  constructor(private formBuilder: FormBuilder) {
    this.categoriaForm = this.formBuilder.group({
      desc_categoria: ['', Validators.required]
    });
  }

  crearCategoria(){
    
  }
}
