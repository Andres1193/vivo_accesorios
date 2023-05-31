import { Component } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  public proveedor: Proveedor = {
    nombre: '',
    telefono_1: '',
    telefono_2: '',
    telefono_3: '',
    telefono_4: '',
    telefono_5: '',
    direccion: '',
    ciudad: '',
    estado: '',
  }

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.proveedorService.getProveedor(this.proveedor).subscribe(resp =>{
      this.proveedor =  resp[0];
      console.log(resp);
    });
  }

  actualizarProveedor(){
    this.proveedorService.actualizarProveedor(this.proveedor).subscribe(resp =>{
      console.log(resp);
    });
  }
}
