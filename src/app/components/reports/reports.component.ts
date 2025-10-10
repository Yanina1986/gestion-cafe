import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ArcElement,
  BarController,
  ChartConfiguration,
  Legend,
  PieController,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { Router } from '@angular/router';

// Registrar los elementos de Chart.js necesarios
Chart.register(ArcElement, Tooltip, Legend, PieController, BarController, CategoryScale, LinearScale, BarElement);

@Component({
  standalone: true,
  selector: 'app-reportes',
  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent implements AfterViewInit {

  fromDate: string = '';
  toDate: string = '';
  downloading: boolean = false;
  public barChartType: ChartConfiguration<'bar'>['type'] = 'bar';
  public pieChartType: ChartConfiguration<'pie'>['type'] = 'pie';
  @ViewChild('ventasChart') ventasChart?: BaseChartDirective;
  @ViewChild('topProductosChart') topProductosChart?: BaseChartDirective;

  // Configuración de datos iniciales (tipado para mayor seguridad)
  salesChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{ data: [], label: 'Ventas (ARS)', backgroundColor: '#42A5F5' }]
  };

  productsChartData: ChartConfiguration<'pie'>['data'] = {
    labels: [],
    datasets: [{ data: [], label: 'Productos más vendidos', backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'] }]
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'top', labels: { font: { size: 14 } } },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      y: {
        min: 0,
        ticks: { stepSize: 1000 },
      }
    }
  };

  constructor(private reportService: ReportService) {}

  ngOnInit() {  }

  ngAfterViewInit() {
    this.cargaInformacionVentas();
    this.cargaTopProductos();
  }

  cargaInformacionVentas() {
    this.reportService.getVentasPorDia().subscribe({
      next: (data) => {
        this.salesChartData.labels = data.map((d) => d.dia);
        this.salesChartData.datasets[0].data = data.map((d) => parseFloat(d.total_ars));
        this.salesChartData.datasets[0].label = 'Ventas (ARS)';
        this.ventasChart?.chart?.update();
      },
      error: (err) => console.error('Error cargando ventas:', err),
    });
  }

  cargaTopProductos() {
    this.reportService.getProductosMasVendidos().subscribe({
      next: (data) => {
        this.productsChartData.labels = data.map((d) => d.producto_id);
        this.productsChartData.datasets[0].data = data.map((d) => parseInt(d.total_vendido));
        this.topProductosChart?.chart?.update();
      },
      error: (err) => console.error('Error cargando productos más vendidos:', err),
    });
  }

  onFilterApply() {
    if (this.fromDate && this.toDate && this.fromDate > this.toDate) {
      alert('La fecha "Desde" no puede ser mayor que la fecha "Hasta".');
      return;
    } else if (!this.fromDate || !this.toDate) {
      alert('Por favor, complete ambas fechas para aplicar el filtro.');
      return;
    } else if (!this.fromDate && !this.toDate) {
      alert('Por favor, ingrese al menos una fecha para filtrar.');
      return;
    }
    this.reportService.getProductosMasVendidosFiltrados(this.fromDate, this.toDate).subscribe({
      next: (data) => {
        this.productsChartData.labels = data.map((d) => d.producto_id);
        this.productsChartData.datasets[0].data = [];
        this.productsChartData.datasets[0].data = data.map((d) => parseInt(d.total_vendido));
        this.topProductosChart?.chart?.update();
      },
      error: (err) => console.error('Error cargando productos más vendidos con filtro:', err),
    });
    this.reportService.getVentasPorDiaFiltradas(this.fromDate, this.toDate).subscribe({
      next: (data) => {
        this.salesChartData.labels = data.map((d) => d.dia);
        this.salesChartData.datasets[0].data = [];
        this.salesChartData.datasets[0].data = data.map((d) => parseFloat(d.total_ars));
        this.salesChartData.datasets[0].label = 'Ventas (ARS)';
        this.ventasChart?.chart?.update();
      },
      error: (err) => console.error('Error cargando ventas con filtro:', err),
    });
  }

  downloadCsv() {
    this.downloading = true;
    this.reportService.exportarCSV().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'reporte_facturas.csv';
        link.click();
        window.URL.revokeObjectURL(url);
        this.downloading = false;
      },
      error: (err) => {
        console.error('Error descargando CSV:', err);
        this.downloading = false;
      },
    });
  }
  volverHome() {
    this.router.navigate(['/home']);
  }
}

