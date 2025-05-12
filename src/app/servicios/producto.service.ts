import { Injectable } from '@angular/core';
import { Producto } from '../Clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   private _productos: Array<Producto>;
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
  }
}
