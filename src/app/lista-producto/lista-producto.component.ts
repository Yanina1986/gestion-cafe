import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ProductoDetalleComponent } from "../producto-detalle/producto-detalle.component";
import { ProductoService } from '../servicios/producto.service'; 
import { Producto } from '../Clases/producto';
import { MatIconModule } from '@angular/material/icon';
import { FiltroProductoPipe } from '../pipes/filtro-producto.pipe';
@Component({
  selector: 'app-lista-producto',
  imports: [MatListModule, CommonModule, MatCardModule, MatIconModule, ProductoDetalleComponent,FiltroProductoPipe],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  productos: any[] = [];
  filtro: string = '';

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe(data => this.productos = data);
  }

  editar(id: number) {
    this.router.navigate(['/producto/editar', id]);
  }

  eliminar(id: number) {
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.productos = this.productos.filter(p => p.id !== id);
    });
  }

  agregarProducto() {
    this.router.navigate(['/producto/nuevo']);
  }
}