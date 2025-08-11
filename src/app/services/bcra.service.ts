
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BcraService {
  private url = 'https://dolarapi.com/v1/dolares/blue';

  constructor(private http: HttpClient) {}

  obtenerDolarOficial(): Observable<number> {
    return this.http.get<any>(this.url).pipe(
      map(data => data.venta ? parseFloat(data.venta) : 1)
    );
  }
}
