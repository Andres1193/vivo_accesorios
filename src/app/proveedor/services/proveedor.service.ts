import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  public crearProveedor(proveedor: Proveedor){

    //defino la url donde esta el servicio
    let  url ='http://localhost/VivoAccesorios/ProveedorService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json')
       header.append('Access-Control-Allow-Methods','"POST"')
       header.append('Access-Control-Allow-Origin','http://localhost');
       return this.http.post(url,JSON.stringify(proveedor),{headers:header});
  }

 public getProveedor(p: Proveedor | null = null){
 
  let  url ='http://localhost/tiendaservice/ProveedorService.php';
     let header=new HttpHeaders();
     header.append('Content-Type','aplication/json')
     header.append('Access-Control-Allow-Methods','"GET"')
     header.append('Access-Control-Allow-Origin','http://localhost');

     return this.http.get<Proveedor[]>(url,{headers:header});
  }

  public actualizarProveedor(proveedor: Proveedor) : Observable<Proveedor> {
    let  url ='http://localhost/VivoAccesorios/Proveedorervice.php';
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Methods', '"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    return this.http.put<Proveedor>(url, JSON.stringify(proveedor), { headers: header });
  }

}
