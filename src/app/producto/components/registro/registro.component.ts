import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public producto: Producto = {
    codigo: 0,
    nombre: '',
    costo_Producto: 0,
    porcent_Utilidad: 0,
    precio_Producto: 0,
    estado: 'a'
  }

  constructor(private productoService: ProductoService) {}

  crearProducto () {
    this.productoService.crearProducto(this.producto).subscribe(resp=>{
      this.producto = {
        codigo: 0,
        nombre: '',
        costo_Producto: 0,
        porcent_Utilidad: 0,
        precio_Producto: 0,
        estado: 'a'
      };
    });
  }
}
