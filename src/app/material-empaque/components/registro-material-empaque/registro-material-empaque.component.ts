import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialEmpaque } from '../../interfaces/material-empaque.interface';

@Component({
  selector: 'app-registro-material-empaque',
  templateUrl: './registro-material-empaque.component.html',
  styleUrls: ['./registro-material-empaque.component.css']
})
export class RegistroMaterialEmpaqueComponent {
  public materialEmpaqueForm: FormGroup;
  public materialEmpaque: MaterialEmpaque = {
    estado_me: '',
    codigo_proveedor: '',
    proveedores: [],
    codigo_categoria: '',
    categorias: [],
    nombre: '',

    // Composición - Materiales
    precio_banio_linea_m: 0,
    rendimiento_linea_m: 0,
    unidad_medida_m: 0,
    costo_banio_un_m: 0,

    // Composición - Actividades o Transformaciones
    precio_linea_a: 0,
    rendimiento_linea_a: 0,
    unidad_medida_a: 0,
    costo_banio_un_a: 0,

    // Costo
    precio_linea_c: 0,
    rendimiento_linea_c: 0,
    unidad_medida_c: 0,
    costo_un_c: 0
  }

  opcionSeleccionadaProveedor: string = '';

  seleccionarOpcionProveedor(opcion: string): void {
    this.opcionSeleccionadaProveedor = opcion;
  }

  opcionSeleccionadaCategoria: string = '';

  seleccionarOpcionCategoria(opcion: string): void {
    this.opcionSeleccionadaCategoria = opcion;
  }

  constructor(private formBuilder: FormBuilder) {
    this.materialEmpaqueForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio_banio_linea_m: [0, Validators.required],
      rendimiento_linea_m: [0, Validators.required],
      costo_banio_un_m: [0, Validators.required],
      precio_linea_a: [0, Validators.required],
      rendimiento_linea_a: [0, Validators.required],
      costo_banio_un_a: [0, Validators.required],
      precio_linea_c: [0, Validators.required],
      rendimiento_linea_c: [0, Validators.required],
      costo_un_c: [0, Validators.required],
    });
  }

  crearMaterialEmpaque(){

  }
}
