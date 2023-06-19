import { Component } from '@angular/core';
import { Login } from '../../interfaces/login.interface';
import { LoginService } from '../../services/login.service';


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

  constructor(public loginService: LoginService) {}
    
  autinticarUsuario(){
    this.loginService.iniciarSesion(this.login).subscribe(resp => {
      console.log(resp);
    })
  }

}
