import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro-materias-crudas.component.html',
  styleUrls: ['./registro-materias-crudas.component.css']
})
export class RegistroComponentMateriasCrudas {

  public materiaCrudasForm: FormGroup;
  public materiasCrudas: MateriasCrudas = {
    cod_interno: '',
    desc_mp: '',
    categoria_mp: [],
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    estado: '',
    proveedores: []
  }

  opcionSeleccionadaCategoria: string = '';

  seleccionarOpcionCategoria(opcion: string): void {
    this.opcionSeleccionadaCategoria = opcion;
  }

  opcionSeleccionadaProveedor: string = '';

  seleccionarOpcionProveedor(opcion: string): void {
    this.opcionSeleccionadaProveedor = opcion;
  }

  opcionSeleccionadaUnidad: string = '';

  seleccionarOpcionUnidad(opcion: string): void {
    this.opcionSeleccionadaProveedor = opcion;
  }

  constructor(private formBuilder: FormBuilder) {
    this.materiaCrudasForm = this.formBuilder.group({
      desc_mp: ['', Validators.required],
      cant_linea: [0, Validators.required],
      precio_linea: [0, Validators.required],
      unidad_medida: [0, Validators.required],
      costo_unitario: [0, Validators.required],
      costo_total_unitario: [0, Validators.required]
    });
  }

  crearMateriasCrudas(){
    if (this.materiaCrudasForm.valid) {
      // Acciones para crear el producto utilizando this.materiasListas
    }
  }

}
