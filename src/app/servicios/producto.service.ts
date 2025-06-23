import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../Clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private _productos : Array<Producto> =[]; 
  private isBrowser: boolean;
  constructor() {
    this.isBrowser = typeof window !== 'undefined' && !!window.localStorage;
    if (this.isBrowser) {
    this._productos = JSON.parse(localStorage.getItem("productos") ?? '[]');
    }
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
  
  actualizarProducto(producto: Producto) {
    const productos = this.obtenerProductos().map(p =>
      p.id === producto.id ? producto : p
    );
    localStorage.setItem('productos', JSON.stringify(productos));
  }
  
  eliminarProducto(id: number) {
    const productos = this.obtenerProductos().filter(p => p.id !== id);
    localStorage.setItem('productos', JSON.stringify(productos));
  }
  
  obtenerProductos(): Producto[] {
    return JSON.parse(localStorage.getItem('productos') || '[]');
  }
  
  
  
}

   