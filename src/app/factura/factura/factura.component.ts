import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

  getTotalARS(): number {
    return this.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  getTotalUSD(): number {
    return this.getTotalARS() / this.dolar;
  }

  confirmarCompra() {
    this.confirmar.emit();
  }

  cancelarFactura() {
    this.cancelar.emit();
  }
}
