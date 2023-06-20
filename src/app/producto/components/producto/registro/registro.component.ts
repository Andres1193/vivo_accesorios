import { Component } from '@angular/core';
import { Producto } from 'src/app/producto/interfaces/producto.interface';
import { ProductoService } from 'src/app/producto/services/producto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponentProducto {

  public producto: Producto = {
    idProducto: 0,
    codigoProducto: '',
    nombre: '',
    costo_Producto: 0,
    porcent_Utilidad: 0,
    precio_Producto: 0,
    estado: 'a',
  }

  constructor(private productoService: ProductoService) {}

  crearProducto () {
    this.productoService.crearProducto(this.producto).subscribe(resp=>{
      this.producto = {
        idProducto: 0,
        codigoProducto: '',
        nombre: '',
        costo_Producto: 0,
        porcent_Utilidad: 0,
        precio_Producto: 0,
        estado: 'a',
      };
    });
  }
}
