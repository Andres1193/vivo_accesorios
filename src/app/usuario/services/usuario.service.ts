import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/usuario/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  apiUrl = "http://127.0.0.1:8000/usuarios/api/usuarios/"

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(this.apiUrl);
  }

  crearUsuario(usuario: Usuario) {
    return this.http.post(this.apiUrl, usuario);
  }

  actualizarUsuario(usuarioId: number, usuario: Usuario) {
    const url = `${this.apiUrl}${usuarioId}/`;
    return this.http.put(url, usuario);
  }

  eliminarUsuario(usuarioId: number) {
    const url = `${this.apiUrl}${usuarioId}/`;
    return this.http.delete(url);
  }

}
