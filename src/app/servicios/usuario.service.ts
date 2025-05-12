/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
}
*/
import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private listaUsuarios: Usuario[] = [];

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  obtenerUsuarios(): Usuario[] {
    return [...this.listaUsuarios];
  }

  obtenerUsuarioPorId(id: number): Usuario | undefined {
    return this.listaUsuarios.find(usuario => usuario.id === id);
  }

  agregarUsuario(usuario: Usuario): void {
    usuario.id = this.generarId();
    this.listaUsuarios.push(usuario);
    this.guardarEnLocalStorage();
  }

  actualizarUsuario(usuario: Usuario): void {
    const index = this.listaUsuarios.findIndex(u => u.id === usuario.id);
    if (index !== -1) {
      this.listaUsuarios[index] = usuario;
      this.guardarEnLocalStorage();
    }
  }

  eliminarUsuario(id: number): void {
    this.listaUsuarios = this.listaUsuarios.filter(usuario => usuario.id !== id);
    this.guardarEnLocalStorage();
  }

  private generarId(): number {
    return this.listaUsuarios.length > 0
      ? Math.max(...this.listaUsuarios.map(usuario => usuario.id)) + 1
      : 1;
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem('usuarios', JSON.stringify(this.listaUsuarios));
  }

  private cargarDesdeLocalStorage(): void {
    const datos = localStorage.getItem('usuarios');
    if (datos) {
      this.listaUsuarios = JSON.parse(datos);
    }
  }
}

