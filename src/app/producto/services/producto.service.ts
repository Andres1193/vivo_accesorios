import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public crearProducto(producto: Producto){

    //defino la url donde esta el servicio
    let  url ='http://localhost/VivoAccesorios/ProductoService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json')
       header.append('Access-Control-Allow-Methods','"POST"')
       header.append('Access-Control-Allow-Origin','http://localhost');
       return this.http.post(url,JSON.stringify(producto),{headers:header});
  }

 public getProducto(p: Producto | null = null){
 
  let  url ='http://localhost/tiendaservice/ProductoService.php';
     let header=new HttpHeaders();
     header.append('Content-Type','aplication/json')
     header.append('Access-Control-Allow-Methods','"GET"')
     header.append('Access-Control-Allow-Origin','http://localhost');

     return this.http.get<Producto[]>(url,{headers:header});
  }

  public actualizarProducto(producto: Producto) : Observable<Producto> {
    let  url ='http://localhost/VivoAccesorios/ProductoService.php';
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Methods', '"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    return this.http.put<Producto>(url, JSON.stringify(producto), { headers: header });
  }
}
