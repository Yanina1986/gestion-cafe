import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl = 'http://localhost:3000/api/reports';

  constructor(private http: HttpClient) { }

  downloadInvoiceCsv (from?: string, to?: string): Observable<Blob>{

    let params =new HttpParams();
    if (from) params = params.set('from', from);
    if (to) params = params.set ('to', to)
     return this.http.get(`${this.baseUrl}/export/invoices`, { params, responseType: 'blob' });
  }

  getSales(groupBy: 'day' | 'week' | 'month', from?: string, to?: string): Observable<{ date: string; total: number }[]> {
    let params = new HttpParams().set('groupBy', groupBy);
    if (from) params = params.set('from', from);
    if (to) params = params.set('to', to);
    return this.http.get<{ date: string; total: number }[]>(`${this.baseUrl}/sales`, { params });
  }

  getTopProducts(limit = 10): Observable<{ productName: string; totalSold: number }[]> {
    const params = new HttpParams().set('limit', String(limit));
    return this.http.get<{ productName: string; totalSold: number }[]>(`${this.baseUrl}/top-products`, { params });
  }
}
