import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router'; // Añadimos RouterLink para los botones
import { CardResumenComponent } from './card-resumen/card-resumen.component';
import { ChatComponent } from '../components/chat/chat.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,CommonModule,ReactiveFormsModule,CommonModule,
    FormsModule, MatIconModule, MatCardModule, CardResumenComponent, ChatComponent]
})
export class HomeComponent implements OnInit {
// =================================================================
  // VARIABLES que resuelven las tarjetas (app-card-resumen)
  // =================================================================

  // Métrica 1: Ventas del Día (usada como {{ ventasHoy | currency:'USD' }})
  ventasHoy: number = 1450.50;

  // Métrica 2: Órdenes Pendientes (usada como {{ ordenesPendientes }})
  ordenesPendientes: number = 8;

  // Métrica 3: Producto Más Vendido Hoy (usada como {{ productoMasVendido }})
  productoMasVendido: string = 'Latte de Vainilla';

  constructor(private router: Router) {
    // Aquí se podrían inyectar servicios para cargar datos reales.
  }

  ngOnInit(): void {
    // Lógica para cargar los datos al iniciar el componente
    // this.cargarDatosDeResumen();
  }

  nuevaVenta() {
    this.router.navigate(['/productosdisponibles']);
  }

  abrirReportes() {
    this.router.navigate(['/reportes']);
  }

  abrirGestionStock() {
    this.router.navigate(['/listaProductos']);
  }

  exportarDatos() {
    alert('Funcionalidad de exportación no implementada aún.');
  }
}
