import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}





/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private key = 'usuarios';

  

  register(user: any) {
    const usuarios = JSON.parse(localStorage.getItem(this.key) || '[]');
    usuarios.push(user);
    localStorage.setItem(this.key, JSON.stringify(usuarios));
  }

  login(email: string, password: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem(this.key) || '[]');
    return usuarios.some((u: any) => u.email === email && u.password === password);
  }
}*/
