import { routes } from './../app.routes';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../Clases/producto';
import { ProductoService } from '../servicios/producto.service';
import { BcraService } from '../services/bcra.service';
import { FacturaComponent } from '../factura/factura/factura.component';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { ChatComponent } from '../components/chat/chat.component';

@Component({
  selector: 'app-productos-disponibles',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FacturaComponent,
    ChatComponent
  ],
  templateUrl: './productos-disponibles.component.html',
  styleUrls: ['./productos-disponibles.component.css']
})
export class ProductosDisponiblesComponent implements OnInit {
  productos: Producto[] = [];
  carrito: any[] = [];
  mostrarFactura: boolean = false;
  dolar: number = 1;

  constructor(
    private productoService: ProductoService,
    private bcraService: BcraService,
    private routes: Router,
    private chatService: ChatService

  ) {}

  ngOnInit(): void {
    // Trae productos
    this.productoService.obtenerProductos().subscribe((data: Producto[]) => {
  this.productos = data;
});


    // Trae valor del dólar
    this.bcraService.obtenerDolarOficial().subscribe((res: any) => {
      this.dolar = res.valor ?? 950;
    });
  }

  agregarAlCarrito(producto: Producto) {
  const existente = this.carrito.find(p => p.id === producto.id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    this.carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio_ars,
      categoria: producto.categoria,
      imagen: producto.image,
      cantidad: 1
    });
  }
}



  quitarDelCarrito(producto: Producto) {
    const index = this.carrito.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      if (this.carrito[index].cantidad > 1) {
        this.carrito[index].cantidad -= 1;
      } else {
        this.carrito.splice(index, 1);
      }
    }
  }

  getTotalARS(): number {
    return this.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  getTotalUSD(): number {
    return this.getTotalARS() / this.dolar;
  }

  procesarCompra() {
    alert('Compra confirmada');
    this.carrito = [];
    this.mostrarFactura = false;
  }

  mostrarFacturaToggle() {
    this.mostrarFactura = true;
  }
   listaProducto() {
    this.routes.navigate(['/listaProductos']);
  }
}

