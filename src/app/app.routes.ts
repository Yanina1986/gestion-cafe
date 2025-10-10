import { ChatComponent } from './components/chat/chat.component';
import { Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { RegisterComponent } from './auth/register/register.component';

import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { ProductosDisponiblesComponent } from './productos-disponibles/productos-disponibles.component';
import { FacturaComponent } from './factura/factura/factura.component';
import { GmailauthComponent } from './Pagina/gmailauth/gmailauth.component';

import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './home/home.component';





export const routes: Routes = [


  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productosdisponibles', component: ProductosDisponiblesComponent },
  { path: 'factura', component:FacturaComponent },
  { path: 'listaProductos', component: ListaProductoComponent },
  { path: 'producto/nuevo', component: FormularioProductoComponent },
  { path: 'producto/editar/:id', component: FormularioProductoComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  { path: 'test',component:GmailauthComponent},
  { path: 'chat/:id',component:ChatComponent },
  { path: 'reportes', component: ReportsComponent }
];


