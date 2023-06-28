import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent {
  public clienteForm: FormGroup;
  public cliente: Cliente = {
    identificacion: '',
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    telefono: '',
    ciudad: '',
    estado: ''
  }

  constructor(private formBuilder: FormBuilder) {
    this.clienteForm = this.formBuilder.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  crearCliente(){

  }
}
