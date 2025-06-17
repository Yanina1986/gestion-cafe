/*import { Component , OnInit} from '@angular/core';
import { Usuario } from '../../Clases/usuario';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { MatCardModule } from '@angular/material/card';
import { FormularioUsuarioComponent } from '../../componentes/formulario-usuario/formulario-usuario.component';

@Component({
  selector: 'app-lista-usuarios',
  imports: [MatListModule,CommonModule,MatCardModule,FormularioUsuarioComponent],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent{
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  eliminarUsuario(id: string): void {
    if (confirm('¿Estás seguro de que querés eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id);
      this.usuarios = this.usuarioService.obtenerUsuarios();
    }
  }

  editarUsuario(id: string): void {
    this.router.navigate(['/usuarios/editar', id]);
  }

  agregarUsuario(): void {
    this.router.navigate(['/usuarios/agregar']);
  }
}*/

