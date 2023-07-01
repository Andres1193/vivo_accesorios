import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  apiUrl = "http://127.0.0.1:8000/usuarios/api/proveedores/"

  constructor(private http: HttpClient) { }

  getProveeedores() {
    return this.http.get<Proveedor[]>(this.apiUrl);
  }

  crearProveeedor(proveedor: Proveedor) {
    return this.http.post(this.apiUrl, proveedor);
  }

  actualizarProveeedor(proveedorId: number, proveedor: Proveedor) {
    const url = `${this.apiUrl}${proveedorId}/`;
    return this.http.put(url, proveedor);
  }

  eliminarProveeedor(proveedorId: number) {
    const url = `${this.apiUrl}${proveedorId}/`;
    return this.http.delete(url);
  }

}
