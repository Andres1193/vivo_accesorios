import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MateriasPrimas } from '../interfaces/materias-primas.interface';

@Injectable({
  providedIn: 'root'
})
export class MateriasPrimasService {

  constructor(private http: HttpClient) {}

  apiUrl = "http://127.0.0.1:8000/mp/api/materiasPrimas/"

  obtenerDatosFiltrados(valor: string) {
    let params = { valor: valor };
    return this.http.get<MateriasPrimas>(this.apiUrl, { params });
  }

  getMateriasPrimas() {
    return this.http.get<MateriasPrimas[]>(this.apiUrl);
  }

  crearMateriasPrimas(mp: MateriasPrimas) {
    return this.http.post(this.apiUrl, mp);
  }

  actualizarMateriasPrimas(mpId: number, mp: MateriasPrimas) {
    const url = `${this.apiUrl}${mpId}/`;
    return this.http.put(url, mp);
  }

  eliminarMateriasPrimas(mpId: number) {
    const url = `${this.apiUrl}${mpId}/`;
    return this.http.delete(url);
  }


}
