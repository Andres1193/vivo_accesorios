import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

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

  crearCliente(){

  }
}
