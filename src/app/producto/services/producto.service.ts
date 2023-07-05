import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService { 
  
  apiUrl = "http://127.0.0.1:8000/productos/api/productos/"

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  crearProducto(Producto: Producto) {
    return this.http.post(this.apiUrl, Producto);
  }

  actualizarProducto(ProductoId: number, Producto: Producto) {
    const url = `${this.apiUrl}${ProductoId}/`;
    return this.http.put(url, Producto);
  }

  eliminarProducto(ProductoId: number) {
    const url = `${this.apiUrl}${ProductoId}/`;
    return this.http.delete(url);
  }
}
