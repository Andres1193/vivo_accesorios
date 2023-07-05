import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta.interface';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http: HttpClient) {}

  apiUrl = "http://127.0.0.1:8000/productos/api/recetas/"

  getReceta() {
    return this.http.get<Receta[]>(this.apiUrl);
  }

  crearReceta(receta: Receta) {
    return this.http.post(this.apiUrl, receta);
  }

  actualizarReceta(recetaId: number, receta: Receta) {
    const url = `${this.apiUrl}${recetaId}/`;
    return this.http.put(url, receta);
  }

  eliminarReceta(recetaId: number) {
    const url = `${this.apiUrl}${recetaId}/`;
    return this.http.delete(url);
  }
}

