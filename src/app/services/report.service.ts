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

  getProductosMasVendidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/productos-mas-vendidos`);
  }


  exportarCSV(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/exportar`, { responseType: 'blob' });
  }
}
