import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { RegisterComponent } from './auth/register/register.component';
import { FacturaComponent } from './componetes/factura/factura.component';
import { DetalleFacturaComponent } from './componetes/detalle-factura/detalle-factura.component';

import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';



export const routes: Routes = [

   { path: '', component: LoginComponent},
   {path: 'login', component: LoginComponent },
   {path: 'listaProductos', component: ListaProductoComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'producto/nuevo', component: FormularioProductoComponent },
   { path: 'producto/editar/:id', component: FormularioProductoComponent },
   {path: 'producto/:id', component: ProductoDetalleComponent },




];
