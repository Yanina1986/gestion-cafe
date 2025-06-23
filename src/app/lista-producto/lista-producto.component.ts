import { Component } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; 
import { Router } from '@angular/router';
import { ProductoDetalleComponent } from "../producto-detalle/producto-detalle.component";
import { ProductoService } from '../servicios/producto.service'; 
import { Producto } from '../Clases/producto';
@Component({
  selector: 'app-lista-producto',
  imports: [MatListModule, CommonModule, MatCardModule, MatIconModule, ProductoDetalleComponent],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  public productos: Array<Producto>;

  constructor(public route: Router, public productoService: ProductoService) {
    this.productos = this.productoService.Producto;
  }
  public editar(id: number) {
    this.route.navigateByUrl("producto/" + id.toString());
  }
  public eliminar(id: number){
    this.route.navigateByUrl("producto/"+id.toString());
  }
    
    

}