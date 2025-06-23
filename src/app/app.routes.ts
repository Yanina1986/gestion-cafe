import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
//import { RegisterComponent } from './auth/register/register.component';


export const routes: Routes = [
    {
        path:'',component:ListaProductoComponent
     },
   /*{
      path:'producto/id',component:ProductoDetalleComponent
   },
     /*{
        path:'registrar',component:RegisterComponent
     },*/
     /*{
      path:'listado',component:ListaProductoComponent
     },
   {
      path:'producto',component:ProductoComponent
   }*/
];
