import { Component } from '@angular/core';
import { Login } from '../../interfaces/login.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuarios: Login[] = [
  {
    usuario: "oscar@gmail.com",
    contrasena: "1234"
  },
    {
      usuario: "frank@gmail.com",
      contrasena: "12345"
    },
    {
      usuario: "alejandra@gmail.com",
      contrasena: "12356"
    }
  ];
    
    
  

  public login: Login = {
    usuario: '',
    contrasena: ''
  }

}
