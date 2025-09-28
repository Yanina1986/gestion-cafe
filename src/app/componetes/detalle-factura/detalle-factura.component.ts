import { Component } from '@angular/core';
import { FacturaService } from '../../factura.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-factura',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './detalle-factura.component.html',
  styleUrl: './detalle-factura.component.css'
})
export class DetalleFacturaComponent {
  productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 4' },
    { id: 5, nombre: 'Producto 5' }
  ];

  nuevoProducto: any = { producto_id: null, cantidad: 1, precio: 0 };
  carrito: any[] = [];
  dolar: number = 1000; // ejemplo, cambiar por valor de API

  constructor(private facturaService: FacturaService) {}

  agregarProducto() {
    const producto = this.productos.find(p => p.id == this.nuevoProducto.producto_id);
    if (producto) {
      this.carrito.push({
        ...this.nuevoProducto,
        nombre: producto.nombre
      });
    }
    this.nuevoProducto = { producto_id: null, cantidad: 1, precio: 0 };
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
  }

  guardarFactura() {
    const factura = {
      cliente: "Cliente demo",
      numeroFactura: Date.now(),
      totalARS: this.carrito.reduce((t, i) => t + (i.cantidad * i.precio), 0),
      totalUSD: this.carrito.reduce((t, i) => t + (i.cantidad * i.precio), 0) / this.dolar,
      items: this.carrito.map(i => ({
        producto_id: i.producto_id,
        cantidad: i.cantidad,
        precio_unitario: i.precio
      }))
    };

    this.facturaService.crearFactura(factura).subscribe({
      next: (res) => {
        alert('✅ Factura guardada correctamente');
        console.log(res);
        this.carrito = [];
      },
      error: (err) => {
        alert('❌ Error al guardar factura');
        console.error(err);
      }
    });
  }

  cancelarFactura() {
    this.carrito = [];
  }
}
