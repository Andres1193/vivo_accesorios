import { Component } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public recetaForm: FormGroup;
  public receta: Receta = {
    codigoInterno: 0,
    costo_total_un: 0,
    cantidad: 0,
    cod_producto: 0,
    estado: '',
    productos: []
  }

  constructor(private formBuilder: FormBuilder) {
    this.recetaForm = this.formBuilder.group({
      desc_mp: ['', Validators.required],
      categoria_mp: ['', Validators.required],
      cant_linea: [0, Validators.required],
      precio_linea: [0, Validators.required],
      unidad_medida: [0, Validators.required],
      costo_unitario: [0, Validators.required],
      costo_total_unitario: [0, Validators.required],
      costo_banio_linea: [0, Validators.required],
      cantidad_banada: [0, Validators.required],
      costo_banio_un: [0, Validators.required],
      
    });
  }

  crearReceta(){
    
  }
}
