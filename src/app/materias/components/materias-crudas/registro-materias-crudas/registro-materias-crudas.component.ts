import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriasCrudas } from 'src/app/materias/interfaces/materias-crudas.interfaces';
import { MateriasPrimasService } from 'src/app/materias/services/materias-primas.service';

@Component({
  selector: 'app-registro-materias-crudas',
  templateUrl: './registro-materias-crudas.component.html',
  styleUrls: ['./registro-materias-crudas.component.css']
})
export class RegistroComponentMateriasCrudas {

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

  // opcionSeleccionadaCategoria: string = '';

  // seleccionarOpcionCategoria(opcion: string): void {
  //   this.opcionSeleccionadaCategoria = opcion;
  // }

  // opcionSeleccionadaProveedor: string = '';

  // seleccionarOpcionProveedor(opcion: string): void {
  //   this.opcionSeleccionadaProveedor = opcion;
  // }

  // opcionSeleccionadaUnidad: string = '';

  // seleccionarOpcionUnidad(opcion: string): void {
  //   this.opcionSeleccionadaProveedor = opcion;
  // }

  constructor(private formBuilder: FormBuilder, private mpService: MateriasPrimasService) {
    this.materiaCrudasForm = this.formBuilder.group({
      cod_interno: new FormControl(''),
      tipo_materia_prima: new FormControl('Mat. Prima Lista'),
      desc_mp: new FormControl(''),
      cant_linea: new FormControl(''),
      precio_linea: new FormControl(''),
      unidad_medida: new FormControl(''),
      costo_unitario: new FormControl(''),
      costo_total_unitario: new FormControl(''),
      bodega: new FormControl(''),
      stock: new FormControl(''),
      estado: new FormControl('Activo'),
 
    });
  }

  crearMateriasCrudas(){
  //    // if (this.materiaCrudasForm.valid) {
      
      console.log(this.materiaCrudasForm.value)
  //     // Acciones para crear el producto utilizando this.materiasListas
      this.mpService.crearMateriasPrimas(this.materiaCrudasForm.value).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          console.log('Materia prima creada:', response);
        }
        // (error) => {
        //   // Manejar el error
        //   console.error('Error al crear el producto:', error);
        // }
      );
    
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
