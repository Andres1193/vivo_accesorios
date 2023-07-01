import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interfaces';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  public clienteForm: FormGroup;
  public idCliente: number = 0;
  public cliente: Cliente = {
    identificacion: '',
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '', 
    direccion: '',
    ciudad: '',
    estado: ''
  }

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) {
    this.clienteForm = this.formBuilder.group({
        identificacion: new FormControl(''),
        nombre:         new FormControl(''),
        apellido:       new FormControl(''),
        correo:         new FormControl(''),
        direccion:      new FormControl(''),
        telefono:       new FormControl(''),
        ciudad:         new FormControl(''),
        estado:         new FormControl('Activo') 
      });
  }
  
  actualizarCliente(){
    if (this.clienteForm.valid) {
      this.clienteService.actualizarCliente(this.idCliente,this.clienteForm.value).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          console.log('Cliente editado:', response);
        }
        // (error) => {
        //   // Manejar el error
        //   console.error('Error al crear el producto:', error);
        // }
      );
    }
  }
}
