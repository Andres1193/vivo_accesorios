import { Component } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../services/proveedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.css']
})
export class RegistroProveedorComponent {
  public proveedorForm: FormGroup;
  public proveedor: Proveedor = {
    cod_proveedor: '',
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

  constructor(private formBuilder: FormBuilder, private proveedorService: ProveedorService) {
    this.proveedorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono_1: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }


  crearProveedor () {
    this.proveedorService.crearProveedor(this.proveedor).subscribe(resp=>{
      this.proveedor = {
        cod_proveedor: '',
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
