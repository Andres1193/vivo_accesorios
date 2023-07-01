import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
      nombre: new FormControl(''),
      nom_usuario: new FormControl(''),
      correo: new FormControl(''),
      contrasena: new FormControl(''),
      estado: new FormControl('Activo')
    });
  }


  ngOnInit(): void {

  }

  crearUsuario() {
    if (this.UsuarioForm.valid) {
      this.usuarioService.crearUsuario(this.UsuarioForm.value).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          console.log('Usuario creado:', response);
        }
        // (error) => {
        //   // Manejar el error
        //   console.error('Error al crear el producto:', error);
        // }
      );
    }

  }



}






