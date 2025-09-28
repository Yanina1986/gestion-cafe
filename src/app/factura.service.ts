import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiUrl = 'http://localhost:3000/api/facturas';

  constructor(private http: HttpClient) { }

  crearFactura(factura: any): Observable<any> {
    return this.http.post(this.apiUrl, factura);
  }

  listarFacturas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFacturas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
