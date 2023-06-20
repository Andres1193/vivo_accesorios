import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/producto/interfaces/producto.interface';
import { ProductoService } from 'src/app/producto/services/producto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponentProducto {
  public productoForm: FormGroup;
  public producto: Producto = {
    idProducto: 0,
    codigoProducto: '',
    nombre: '',
    costo_Producto: 0,
    porcent_Utilidad: 0,
    precio_Producto: 0,
    estado: 'a',
  };

  constructor(private formBuilder: FormBuilder, private productoService: ProductoService) {
    this.productoForm = this.formBuilder.group({
      codigoProducto: ['', Validators.required],
      nombre: ['', Validators.required],
      costo_Producto: [0, Validators.required],
      porcent_Utilidad: [0, Validators.required],
      precio_Producto: [0, Validators.required],
    });
  }

  crearProducto() {
    if (this.productoForm.valid) {
      // Acciones para crear el producto utilizando this.producto
    }
  }
}
