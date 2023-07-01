import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],

})
export class RegistroUsuarioComponent implements OnInit {

  public UsuarioForm: FormGroup;
  public usuario: Usuario = {
    nombre: '',
    nom_usuario: '',
    correo: '',
    contrasena: '',
    estado: ''
  };

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.UsuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      nom_usuario: ['', Validators.required],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }


  ngOnInit(): void {

  }

  // getUsuarios(): void {
  //   this.usuarioService
  //     .getUsuarios()
  //     .subscribe((usuarios) => (this.usuarios = usuarios));
  // }


 
  crearProducto() {
    if (this.UsuarioForm.valid) {
      this.usuarioService.crearUsuario(this.usuario).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          console.log('Producto creado:', response);
        }
        // (error) => {
        //   // Manejar el error
        //   console.error('Error al crear el producto:', error);
        // }
      );

    }



}



}


