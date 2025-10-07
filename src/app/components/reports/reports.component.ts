import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart,ArcElement, BarController, ChartConfiguration, Legend, PieController, Tooltip, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { FormsModule, NgModel } from '@angular/forms';
import { ReportService } from '../../services/report.service';





Chart.register(ArcElement, Tooltip, Legend, PieController, BarController, CategoryScale, LinearScale, BarElement);

@Component({
  selector: 'app-reports',
  imports: [CommonModule,CommonModule,CommonModule,CommonModule,FormsModule,BaseChartDirective],
  templateUrl: './reports.component.html',
})
export class ReportsComponent {

 fromDate: string = '';
  toDate: string = '';
  downloading: boolean = false;

  salesChartData: ChartConfiguration['data'] = { labels: [], datasets: [{ data: [], label: 'Ventas (ARS)' }] };
  productsChartData: ChartConfiguration['data'] = { labels: [], datasets: [{ data: [], label: 'Productos más vendidos' }] };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
  };

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.loadSalesData();
    this.loadTopProducts();
  }


  // 📅 Cargar ventas por día

  loadSalesData() {
    this.reportService.getVentasPorDia().subscribe({
      next: (data) => {
        this.salesChartData.labels = data.map((d) => d.dia);
        this.salesChartData.datasets[0].data = data.map((d) => d.total_ars);
      },
      error: (err) => console.error('Error cargando ventas:', err),
    });
  }

  // 🥐 Cargar productos más vendidos
  loadTopProducts() {
    this.reportService.getProductosMasVendidos().subscribe({
      next: (data) => {
        this.productsChartData.labels = data.map((p) => p.producto);
        this.productsChartData.datasets[0].data = data.map((p) => p.total_vendido);
      },
      error: (err) => console.error('Error cargando productos:', err),
    });
  }

  // 🔄 Aplicar filtros (en este caso solo recarga datos)
  onFilterApply() {
    this.loadSalesData();
    this.loadTopProducts();
  }

  // 💾 Descargar CSV real desde backend
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
}
