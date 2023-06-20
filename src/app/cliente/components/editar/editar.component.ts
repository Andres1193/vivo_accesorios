import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interfaces';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  public cliente: Cliente = {
    codigoCliente: 0,
    identificacion: '',
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    telefono: '',
    ciudad: '',
    estado: ''
  }

  actualizarCliente(){

  }
}
