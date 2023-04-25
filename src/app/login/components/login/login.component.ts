import { Component } from '@angular/core';
import { Login } from '../../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public login: Login = {
    usuario: '',
    contrasena: ''
  }

}
