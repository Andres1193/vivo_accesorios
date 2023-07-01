import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})

export class EditarUsuarioComponent implements OnInit {

  public UsuarioForm: FormGroup;
  public idUsuario: number = 0;
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

  editarUsuario() {
    // if (this.UsuarioForm.valid) {
    this.usuarioService.actualizarUsuario(this.idUsuario, this.usuario).subscribe(
      (response) => {
        // Manejar la respuesta exitosa
        console.log('Usuario editado:', response);
      }
      // (error) => {
      //   // Manejar el error
      //   console.error('Error al crear el producto:', error);
      // }
    );

  }

}



