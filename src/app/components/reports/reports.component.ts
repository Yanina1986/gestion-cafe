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

  // Datos de los gráficos
  salesChartData: ChartConfiguration['data'] = { labels: [], datasets: [{ data: [], label: 'Ventas (ARS)' }] };
  productsChartData: ChartConfiguration['data'] = { labels: [], datasets: [{ data: [], label: 'Productos más vendidos' }] };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
  };

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getVentasPorDia().subscribe({
      next: (data) => console.log('Ventas por día:', data),
      error: (error) => console.error('Error al obtener ventas por día:', error)
    }
    );

    this.reportService.getProductosMasVendidos().subscribe({
      next: (data) => console.log('Productos más vendidos:', data),
      error: (error) => console.error('Error al obtener productos más vendidos:', error)
    });
  }

}
