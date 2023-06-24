import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MateriasListas } from 'src/app/materias/interfaces/materias-listas.interface';

@Component({
  selector: 'app-editar-materias-listas',
  templateUrl: './editar-materias-listas.component.html',
  styleUrls: ['./editar-materias-listas.component.css']
})
export class EditarComponentMateriasListas {

  public materiaListaForm: FormGroup;
  public materiasListas: MateriasListas = {
    cod_interno: '',
    desc_mp: '',
    categoria_mp: [],
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    estado: '',
    costo_banio_linea: 0,
    cantidad_banada: 0,
    costo_banio_un: 0,
    proveedores: [],
    stock: 0
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
    this.materiaListaForm = this.formBuilder.group({
      desc_mp: ['', Validators.required],
      cant_linea: [0, Validators.required],
      precio_linea: [0, Validators.required],
      unidad_medida: [0, Validators.required],
      costo_unitario: [0, Validators.required],
      costo_total_unitario: [0, Validators.required],
      costo_banio_linea: [0, Validators.required],
      cantidad_banada: [0, Validators.required],
      costo_banio_un: [0, Validators.required],
      stock: [0, Validators.required]
    });
  }
  
  actualizarMateriasListas(){

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