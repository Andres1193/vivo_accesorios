import { Component } from '@angular/core';
import { MateriasListas } from 'src/app/materias/interfaces/materias-listas.interface';
import { Proveedor } from '../../../../proveedor/interfaces/proveedor.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponentMateriasListas {
  public materiaListaForm: FormGroup;
  public materiasListas: MateriasListas = {
    cod_interno: '',
    desc_mp: '',
    categoria_mp: '',
    cant_linea: 0,
    precio_linea: 0,
    unidad_medida: '',
    costo_unitario: 0,
    costo_total_unitario: 0,
    estado: '',
    costo_banio_linea: 0,
    cantidad_banada: 0,
    costo_banio_un: 0,
    proveedores: []
  }

  constructor(private formBuilder: FormBuilder) {
    this.materiaListaForm = this.formBuilder.group({
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

  crearMateriaLista() {
    if (this.materiaListaForm.valid) {
      // Acciones para crear el producto utilizando this.producto
    }
  }

}
