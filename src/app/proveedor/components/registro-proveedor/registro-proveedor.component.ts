import { Component } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../services/proveedor.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      cod_proveedor: new FormControl(''),
      nombre: new FormControl(''),
      telefono_1: new FormControl(''),
      telefono_2: new FormControl(''),
      telefono_3: new FormControl(''),
      telefono_4: new FormControl(''),
      telefono_5: new FormControl(''),
      direccion: new FormControl(''),
      ciudad: new FormControl(''),
      estado: new FormControl('Activo')
    });
  }


  crearProveedor() {
    if (this.proveedorForm.valid) {
      this.proveedorService.crearProveeedor(this.proveedorForm.value).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          console.log('Proveedor creado:', response);
        }
        // (error) => {
        //   // Manejar el error
        //   console.error('Error al crear el producto:', error);
        // }
      );
    } else{
      alert('Faltan llenar campos' );
    }

  }
}
