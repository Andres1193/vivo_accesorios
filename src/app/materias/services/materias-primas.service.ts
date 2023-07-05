import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MateriasCrudas } from '../interfaces/materias-crudas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MateriasPrimasService {

  constructor(private http: HttpClient) {}

  apiUrl = "http://127.0.0.1:8000/mp/api/materiasPrimas/"


  getMateriasPrimas() {
    return this.http.get<MateriasCrudas[]>(this.apiUrl);
  }

  crearMateriasPrimas(mp: MateriasCrudas) {
    return this.http.post(this.apiUrl, mp);
  }

  actualizarMateriasPrimas(mpId: number, mp: MateriasCrudas) {
    const url = `${this.apiUrl}${mpId}/`;
    return this.http.put(url, mp);
  }

  eliminarMateriasPrimas(mpId: number) {
    const url = `${this.apiUrl}${mpId}/`;
    return this.http.delete(url);
  }
}
