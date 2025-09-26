import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-reports',
  imports: [CommonModule,BaseChartDirective],


  template: `
    <div class="p-3">
      <h2>Reportes de Ventas</h2>

      <!-- 📊 Gráfico de Ventas -->
      <div style="width: 600px; margin: 20px auto;">
        <canvas baseChart
          [data]="salesChartData"
          [options]="chartOptions"
          type="bar">
        </canvas>
      </div>

      <!-- 📊 Gráfico de Productos -->
      <div style="width: 600px; margin: 20px auto;">
        <canvas baseChart
          [data]="productsChartData"
          [options]="chartOptions"
          type="pie">
        </canvas>
      </div>
    </div>
  `
})
export class ReportsComponent {

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    }
  };

  salesChartData: ChartConfiguration['data'] = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    datasets: [
      { data: [5, 10, 7, 14, 9], label: 'Ventas' }
    ]
  };

  productsChartData: ChartConfiguration['data'] = {
    labels: ['Café', 'Té', 'Medialuna', 'Sandwich'],
    datasets: [
      {
        data: [30, 10, 20, 15],
        label: 'Productos'
      }
    ]
  };
}



