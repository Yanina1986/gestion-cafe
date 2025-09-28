import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart,ArcElement, BarController, ChartConfiguration, Legend, PieController, Tooltip, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { FormsModule, NgModel } from '@angular/forms';


Chart.register(ArcElement, Tooltip, Legend, PieController, BarController, CategoryScale, LinearScale, BarElement);

@Component({
  selector: 'app-reports',
  imports: [CommonModule,CommonModule,CommonModule,CommonModule,FormsModule],
  templateUrl: './reports.component.html',
})
export class ReportsComponent {

  fromDate: string = '';
  toDate: string = '';
  groupBy: string = 'day';
  downloading: boolean = false;

  constructor() { }

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

  onFilterApply () {
    console.log('Filtro aplicado:', this.fromDate, this.toDate, this.groupBy);
    // Aquí iría la lógica para actualizar los datos del gráfico según los filtros aplicados
  }

  downloadCsv() {
    this.downloading = true;
    const csvContent = 'data:text/csv;charset=utf-8,Fecha,Ventas\n2024-01-01,5\n2024-01-02,10\n2024-01-03,7\n2024-01-04,14\n2024-01-05,9';
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'reporte_ventas.csv');
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
    this.downloading = false;
  }
}



