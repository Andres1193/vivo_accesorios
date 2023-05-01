import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component00.html',
  styleUrls: ['./registro.component00.css'],

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

}

$("main").addClass("pre-enter").removeClass("with-hover");
setTimeout(function(){
	$("main").addClass("on-enter");
}, 500);
setTimeout(function(){
	$("main").removeClass("pre-enter on-enter");
	setTimeout(function(){
		$("main").addClass("with-hover");
	}, 50);
}, 3000);

$("h1 a").click(function(){
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
	if ($(this).is("#link-signup")) {
		$("#form-login").removeClass("active");
		$("#intro-login").removeClass("active");
		setTimeout(function(){
			$("#form-signup").addClass("active");
			$("#intro-signup").addClass("active");
		}, 50);
	} else {
		$("#form-signup").removeClass("active");
		$("#intro-signup").removeClass("active");
		setTimeout(function(){
			$("#form-login").addClass("active");
			$("#intro-login").addClass("active");
		}, 50);
	}
});
