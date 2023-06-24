import { Component } from '@angular/core';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentProducto {

  // public producto: Producto = {
  //   idProducto: 0,
  //   codigoProducto: '',
  //   nombre: '',
  //   costo_Producto: 0,
  //   porcent_Utilidad: 0,
  //   precio_Producto: 0,
  //   estado: 'a',
  // }

  // constructor(private productoService: ProductoService) {}

  // ngOnInit(): void {
  //   this.productoService.getProducto(this.producto).subscribe(resp =>{
  //     this.producto =  resp[0];
  //     console.log(resp);
  //   });
  // }

  // actualizarProducto(){
  //   this.productoService.actualizarProducto(this.producto).subscribe(resp =>{
  //     console.log(resp);
  //   });
  // }

  
  //Seleccionar una imagen;
  url: any;
  msg = "";

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'Deberías seleccionar una imagen';
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
