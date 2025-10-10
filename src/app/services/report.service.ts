import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl = 'http://localhost:3000/api/reportes';
  constructor(private http: HttpClient) { }


getVentasPorDia(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ventas-por-dia`);
  }

  getVentasPorDiaFiltradas(fromDate: string, toDate: string): Observable<any[]> {
    let params = new HttpParams();
    if (fromDate) {
      params = params.set('fromDate', fromDate);
    }
    if (toDate) {
      params = params.set('toDate', toDate);
    }
    return this.http.get<any[]>(`${this.baseUrl}/ventas-por-dia`, { params });
  };

  getProductosMasVendidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/productos-mas-vendidos`);
  };

  getProductosMasVendidosFiltrados(fromDate: string, toDate: string): Observable<any[]> {
    let params = new HttpParams();
    if (fromDate) {
      params = params.set('fromDate', fromDate);
    }
    if (toDate) {
      params = params.set('toDate', toDate);
    }
    return this.http.get<any[]>(`${this.baseUrl}/productos-mas-vendidos`, { params });
  };

  exportarCSV(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/exportar-facturas-csv`, { responseType: 'blob' });
  };
}
