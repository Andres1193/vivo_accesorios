import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/usuario/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public crearUsuario(usuario: Usuario){

    //defino la url donde esta el servicio
    let  url ='http://localhost/VivoAccesorios/UsuariosService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json')
       header.append('Access-Control-Allow-Methods','"POST"')
       header.append('Access-Control-Allow-Origin','http://localhost');
       return this.http.post(url,JSON.stringify(usuario),{headers:header});
  }

 public getUsuarios(){
  //defino la url donde esta el servicio
  let  url ='http://localhost/tiendaservice/UsuariosService.php';
     let header=new HttpHeaders();
     header.append('Content-Type','aplication/json')
     header.append('Access-Control-Allow-Methods','"GET"')
     header.append('Access-Control-Allow-Origin','http://localhost');

     return this.http.get<Usuario[]>(url,{headers:header});
  }

public getJson(){
  
}
}
