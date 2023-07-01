import { Component } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../services/proveedor.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent {
  public proveedorForm: FormGroup;
  public idProveedor: number = 0;
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

  actualizarProveedor() {
    if (this.proveedorForm.valid) {
      this.proveedorService.actualizarProveeedor(this.idProveedor,this.proveedorForm.value).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          console.log('Proveedor editado:', response);
        }
        // (error) => {
        //   // Manejar el error
        //   console.error('Error al crear el producto:', error);
        // }
      );
    }
  } 
}
