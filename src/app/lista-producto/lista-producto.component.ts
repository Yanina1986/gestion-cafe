import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ProductoDetalleComponent } from "../producto-detalle/producto-detalle.component";
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../Clases/producto';
import { MatIconModule } from '@angular/material/icon';
import { FiltroProductosPipe } from '../pipes/filtro-productos.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-lista-producto',
  imports: [MatListModule, CommonModule, MatCardModule, MatIconModule, FormsModule,ProductoDetalleComponent,FiltroProductosPipe,ReactiveFormsModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  productos: any[] = [];
  filtro: string = '';

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  editar(id: number) {
  this.router.navigate(['/producto/editar', id]);
}

  eliminar(id: number) {
    if (confirm('¿Estás segura/o de eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe(() => {
        this.productos = this.productos.filter(p => p.id !== id);
      });
    }
  }

  agregarProducto() {
    this.router.navigate(['/producto/nuevo']);
  }

  volverHome() {
    this.router.navigate(['/home']);
  }
}
