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
    nombre: '',
    costo_Producto: 0,
    porcent_Utilidad: 0,
    precio_Producto: 0,
  }

  constructor(private productoService: ProductoService) {}

  crearProducto () {
    this.productoService.crearProducto(this.producto).subscribe(resp=>{
      this.producto = {
        nombre: '',
        costo_Producto: 0,
        porcent_Utilidad: 0,
        precio_Producto: 0,
      };
    });
  }
}
