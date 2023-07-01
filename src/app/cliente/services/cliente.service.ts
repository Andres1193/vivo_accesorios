import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = "http://127.0.0.1:8000/usuarios/api/clientes/"

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(this.apiUrl);
  }

  crearCliente(cliente: Cliente) {
    return this.http.post(this.apiUrl, cliente);
  }

  actualizarCliente(clienteId: number, cliente: Cliente) {
    const url = `${this.apiUrl}${clienteId}/`;
    return this.http.put(url, cliente);
  }

  eliminarCliente(clienteId: number) {
    const url = `${this.apiUrl}${clienteId}/`;
    return this.http.delete(url);
  }
}
