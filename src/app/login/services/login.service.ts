import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public iniciarSesion(inicioSesion: Login){
    let  url ='http://localhost/VivoAccesorios/UsuariosService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json')
       header.append('Access-Control-Allow-Methods','"POST"')
       header.append('Access-Control-Allow-Origin','http://localhost');
       return this.http.post(url,JSON.stringify(inicioSesion),{headers:header});
  }
}
