import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  public producto: Producto = {
    nombre: '',
    costo_Producto: 0,
    porcent_Utilidad: 0,
    precio_Producto: 0,
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
