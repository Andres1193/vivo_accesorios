import { Component } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro-receta.component.html',
  styleUrls: ['./registro-receta.component.css']
})
export class RegistroRecetaComponent {
  public recetaForm: FormGroup;
  public receta: Receta = {
    codigo_mp: 0,
    descripcion_mp: '',
    cantidad: 0,
    unidad_medida: [],
    costo_unitario: 0,
    costo_total_unitario: 0
  }

  opcionSeleccionada: string = '';

  seleccionarOpcion(opcion: string): void {
    this.opcionSeleccionada = opcion;
  }

  constructor(private formBuilder: FormBuilder) {
    this.recetaForm = this.formBuilder.group({
      codigo_mp: [0, Validators.required],
      cantidad: [0, Validators.required]
    });
  }

  crearReceta(){
    
  }
}
