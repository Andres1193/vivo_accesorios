import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],

})
export class RegistroUsuarioComponent {

  public usuario: Usuario = {
    nombre: '',
    nom_usuario: '',
    correo: '',
    contrasena: '',
    estado: ''
  };

  constructor (private usuarioService: UsuarioService) { }

  // @Input() usuarios: Usuario[] = [];

  // ngOnInit(): void {
  //   this.usuarioService.getUsuarios().subscribe(
  //     resp=> {
  //       console.log(resp);
  //       this.usuarios = resp;
  //     }
  //   );

  // crearProducto() {
  //   if (this.productoForm.valid) {
      // Acciones para crear el producto utilizando this.producto
  //   }

  crearUsuario() {
    if ( this.usuario.nombre.length === 0 ) {
      return ;
    } else if ( this.usuario.nom_usuario.length === 0 ) {
      return ;
    } else if ( this.usuario.correo.length === 0 ) {
      return ;
    } else if ( this.usuario.contrasena.length === 0 ) {
      return ;
    } else {

      this.usuarioService.crearUsuario(this.usuario).subscribe(resp=>{
        this.usuario = {
          nombre: '',
          nom_usuario: '',
          correo: '',
          contrasena: '',
          estado: ''
        };
      });


    }

  }
}
