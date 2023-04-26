import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../../login/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  
  ngOnInit(): void {
      
  }

  public usuario: Usuario = {
    nombre: '',
    usuarioVar: '',
    correo: '',
    contrasena: '',
    estado: 'Activo'
  };

  constructor (private usuarioService: UsuarioService) { }

  crearUsuario() {
    if ( this.usuario.nombre.length === 0 ) {
      return;
    } else if ( this.usuario.usuarioVar.length === 0 ) {
      return;
    } else if ( this.usuario.correo.length === 0 ) {
      return;
    } else if ( this.usuario.contrasena.length === 0 ) {
      return;
    } else {

      this.usuarioService.crearUsuario(this.usuario).subscribe(resp=>{
        this.usuario = {
          nombre: '',
          usuarioVar: '',
          correo: '',
          contrasena: '',
          estado: 'Activo'
        }
      });
    }

  }


  // emitUsuario(): void {
  //   if ( this.usuario.nombre.length === 0 ) {
  //     return;
  //   } else if ( this.usuario.usuarioVar.length === 0 ) {
  //     return;
  //   } else if ( this.usuario.correo.length === 0 ) {
  //     return;
  //   } else if ( this.usuario.contrasena.length === 0 ) {
  //     return;
  //   } else {
  //     this.usuarioNuevo.emit(this.usuario);
  //   }

  //   this.usuario.nombre = '';
  //   this.usuario.usuarioVar = '';
  //   this.usuario.correo = '';
  //   this.usuario.contrasena = '';
  // }
}
