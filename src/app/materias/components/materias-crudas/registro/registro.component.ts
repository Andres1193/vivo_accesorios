import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponentMateriasCrudas {

  public materiaCrudaForm: FormGroup;
  public materiasCrudas: MateriasCrudas = {
    cod_interno: '',
    desc_mp: '',
    categoria_mp: '',
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    estado: '',
    proveedores: []
  }

  constructor(private formBuilder: FormBuilder) {
    this.materiaCrudaForm = this.formBuilder.group({
      desc_mp: ['', Validators.required],
      categoria_mp: ['', Validators.required],
      cant_linea: [0, Validators.required],
      precio_linea: [0, Validators.required],
      unidad_medida: [0, Validators.required],
      costo_unitario: [0, Validators.required],
      costo_total_unitario: [0, Validators.required]
    });
  }

  crearMateriasCrudas(){

  }

}
