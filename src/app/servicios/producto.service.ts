import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  precio_ars: number;
  categoria: string;
  imagen: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor (private http: HttpClient) {}

  listar(): Observable <Producto[]> {
    
    return this.http.get<Producto[]>(this.apiUrl);

  }

  agregar(producto: Producto): Observable <any> {
    return this.http.post<Producto[]>(this.apiUrl,producto);
  }

  editar (id: number, producto: Producto): Observable <any>{
  return this.http.put(`${this.apiUrl}/${id}`, producto);
}

eliminar(id: number): Observable<any> {
 return this.http.delete(`${this.apiUrl}/${id}`);
}
   
}
