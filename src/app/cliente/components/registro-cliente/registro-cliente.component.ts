import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Cliente } from "../../interfaces/cliente.interfaces";
import { ClienteService } from "../../services/cliente.service";


@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  public clienteForm: FormGroup;
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
      nombres:         new FormControl(''),
      apellidos:       new FormControl(''),
      correo:         new FormControl(''),
      direccion:      new FormControl(''),
      telefono:       new FormControl(''),
      ciudad:         new FormControl(''),
      estado:         new FormControl('Activo')
    });
  }

  ngOnInit(): void {

  }

  crearCliente(){
    if (this.clienteForm.valid) {
      this.clienteService.crearCliente(this.clienteForm.value).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          console.log('Cliente creado:', response);
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
