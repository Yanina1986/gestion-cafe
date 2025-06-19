import { Injectable } from '@angular/core';

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
}
