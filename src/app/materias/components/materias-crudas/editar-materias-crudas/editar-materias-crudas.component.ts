import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';

@Component({
  selector: 'app-editar-materias-crudas',
  templateUrl: './editar-materias-crudas.component.html',
  styleUrls: ['./editar-materias-crudas.component.css']
})
export class EditarComponentMateriasCrudas {

  public materiaCrudasForm: FormGroup;
  public materiasCrudas: MateriasCrudas = {
    cod_interno: '',
    tipo_materia_prima: '',
    desc_mp: '',
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    bodega: '',
    stock: 0,
    estado: ''

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
      costo_total_unitario: [0, Validators.required],
      stock: [0, Validators.required]
    });
  }

  actualizarMateriasCrudas(){
    if (this.materiaCrudasForm.valid) {
      // Acciones para crear el producto utilizando this.materiasListas
    }
  }

    //Seleccionar una imagen;
    url: any;
    msg = "";
  

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'Debe seleccionar una imagen';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Solo soporta imagenes";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    }
  }

}
