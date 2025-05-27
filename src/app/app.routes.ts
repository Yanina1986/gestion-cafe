import { Routes } from '@angular/router';
import { ProductoComponent } from './Paginas/producto/producto.component';
import { ListaProductoComponent } from './Paginas/lista-producto/lista-producto.component';
import { Usuario } from './Clases/usuario';
import { ListaUsuariosComponent } from './Paginas/lista-usuarios/lista-usuarios.component';
import { FormularioUsuarioComponent } from './componentes/formulario-usuario/formulario-usuario.component';
import { ListaBanderaComponent } from './Paginas/lista-bandera/lista-bandera.component';

export const routes: Routes = [
    {path:'', component:ProductoComponent,},
    {path: 'producto',component : ProductoComponent},
    {path:'producto/:idProducto', component: ProductoComponent },
    {path: 'listaProducto', component: ListaProductoComponent},
    {path: 'usuarios', component: ListaUsuariosComponent },
    {path: 'usuarios/agregar', component: FormularioUsuarioComponent },
    {path: 'usuarios/editar/:id', component: FormularioUsuarioComponent },
    {path: 'bandera', component:ListaBanderaComponent}


];
