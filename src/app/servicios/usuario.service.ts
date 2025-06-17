import { Injectable } from '@angular/core';
import { Usuario } from '../Clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuarios: Array<Usuario>;

  constructor() {
    const datos = localStorage.getItem("usuarios");
    this._usuarios = datos ? JSON.parse(datos) : [];
  }

  public get usuarios(): Array<Usuario> {
    return this._usuarios;
  }
  obtenerUsuarios(): Usuario[] {
  return this._usuarios;
}


 // agregarUsuario(usuario: Usuario): void {
   // usuario.id = this.generarId();
   // this._usuarios.push(usuario);
   // this.guardarEnLocalStorage();
 // }

  actualizarUsuario(usuario: Usuario): void {
    const index = this._usuarios.findIndex(u => u.id === usuario.id);
    if (index !== -1) {
      this._usuarios[index] = usuario;
      this.guardarEnLocalStorage();
    }
  }

  eliminarUsuario(id: number): void {
    this._usuarios = this._usuarios.filter(usuario => usuario.id !== id);

    //this.guardarEnLocalStorage();
  }

  obtenerUsuarioPorId(id: number){
    return this._usuarios.find(usuario => usuario.id ===id);

  }

  private generarId(): number {
    return this._usuarios.length > 0
      ? Math.max(...this._usuarios.map(u => Number(u.id))) + 1
      : 1;
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem('usuarios', JSON.stringify(this._usuarios));
  }
}
