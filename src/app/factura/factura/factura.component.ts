import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FacturaService } from '../../factura.service';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-factura',
  imports: [CommonModule, ReactiveFormsModule,CommonModule,ReactiveFormsModule,CommonModule,
    FormsModule
],
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  @Input() carrito: any[] = [];
  @Input() dolar: number = 1;

  @Output() confirmar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();

  currentUid: string = '';

  constructor(private facturaService: FacturaService, private router: Router) {
    this.currentUid = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).nombre : '';
    console.log('Usuario actual:', this.currentUid);
  }

  getTotalARS(): number {
    return this.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  getTotalUSD(): number {
    return this.getTotalARS() / this.dolar;
  }

  confirmarCompra() {
    const factura = {
      cliente: this.currentUid,
      numeroFactura: Date.now(),
      totalARS: this.getTotalARS(),
      totalUSD: this.getTotalUSD(),
      items: this.carrito.map(item => ({
        producto_id: item.id,
        cantidad: item.cantidad,
        precio: item.precio
      }))
    };

    console.log('Factura a enviar:', factura);
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
    this.cancelar.emit();
  }
  }


