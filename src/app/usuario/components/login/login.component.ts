import { Component } from '@angular/core';
import { Login } from '../../interfaces/login.interface';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login: Login = {
    correo: '',
    contrasena: ''
  };

  constructor(public usuarioService: UsuarioService) {}
    
  autinticarUsuario(){
    this.usuarioService.iniciarSesion(this.login).subscribe(resp => {
      console.log(resp);
    })
  }

}
