import { ChatComponent } from './components/chat/chat.component';
import { Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { RegisterComponent } from './auth/register/register.component';

import { DetalleFacturaComponent } from './componetes/detalle-factura/detalle-factura.component';

import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { ProductosDisponiblesComponent } from './productos-disponibles/productos-disponibles.component';
import { FacturaComponent } from './factura/factura/factura.component';
import { GmailauthComponent } from './Pagina/gmailauth/gmailauth.component';



export const routes: Routes = [


  {path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productosdisponibles', component: ProductosDisponiblesComponent },
  {path: 'factura', component:FacturaComponent },
  { path: 'listaProductos', component: ListaProductoComponent },
  { path: 'producto/nuevo', component: FormularioProductoComponent },
  { path: 'producto/editar/:id', component: FormularioProductoComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  { path: 'test',component:GmailauthComponent},
  { path: 'chat/:id',component:ChatComponent }
];





