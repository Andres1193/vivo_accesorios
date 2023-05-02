import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './1.html',
  styleUrls: ['./1.css'],

})
export class RegistroComponent implements OnInit{

  ngOnInit(): void {

  }


  public usuario: Usuario = {
    nombre: '',
    nom_usuario: '',
    correo: '',
    contrasena: '',
    estado: ''
  };

  constructor (private usuarioService: UsuarioService, private router: Router) { }

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
          this.router.navigate(['/usuario/components/listado']);
      });


    }

  }
}
