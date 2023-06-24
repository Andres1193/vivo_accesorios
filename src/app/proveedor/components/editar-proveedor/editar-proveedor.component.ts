import { Component } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../services/proveedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent {
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

  actualizarProveedor(){
    this.proveedorService.actualizarProveedor(this.proveedor).subscribe(resp =>{
      console.log(resp);
    });
  }
}
