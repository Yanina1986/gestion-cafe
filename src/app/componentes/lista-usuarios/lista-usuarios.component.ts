/*import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  imports: [],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

}*/
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que querés eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id);
      this.usuarios = this.usuarioService.obtenerUsuarios();
    }
  }

  editarUsuario(id: number): void {
    this.router.navigate(['/usuarios/editar', id]);
  }

  agregarUsuario(): void {
    this.router.navigate(['/usuarios/agregar']);
  }
}

