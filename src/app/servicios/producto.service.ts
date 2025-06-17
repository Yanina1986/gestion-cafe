import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Clases/producto';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:3000/api/productos';

  constructor (private http: HttpClient) {  }

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
   /*private _productos: Array<Producto>;
  constructor() {
    this._productos = JSON.parse(localStorage.getItem("productos") ?? '[]');
  }

  public get Producto(): Array<Producto> {
    return this._productos;
  }

  public getProductos(): void {
    this._productos = JSON.parse(localStorage.getItem("productos") ?? '[]')
  }

  public saveProducto(productos: Array<Producto>) {
    localStorage.setItem('productos', JSON.stringify(productos));
    this.getProductos();
  }*/
}
