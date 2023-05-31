import { Component } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

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

  crearProveedor () {
    this.proveedorService.crearProveedor(this.proveedor).subscribe(resp=>{
      this.proveedor = {
        nombre: '',
        telefono_1: '',
        telefono_2: '',
        telefono_3: '',
        telefono_4: '',
        telefono_5: '',
        direccion: '',
        ciudad: '',
        estado: '',
      };
    });
  }
  
}
