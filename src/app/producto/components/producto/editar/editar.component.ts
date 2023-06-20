import { Component } from '@angular/core';
import { Producto } from 'src/app/producto/interfaces/producto.interface';

import { ProductoService } from 'src/app/producto/services/producto.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentProducto {

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

  ngOnInit(): void {
    this.productoService.getProducto(this.producto).subscribe(resp =>{
      this.producto =  resp[0];
      console.log(resp);
    });
  }

  actualizarProducto(){
    this.productoService.actualizarProducto(this.producto).subscribe(resp =>{
      console.log(resp);
    });
  }
}
