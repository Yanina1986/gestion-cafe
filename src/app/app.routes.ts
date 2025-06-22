import { Routes } from '@angular/router';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { RegisterComponent } from './auth/register/register.component';
//import { LoginComponent } from './auth/login/login.component';
import { Component } from '@angular/core';
import { FacturaComponent } from './factura/factura/factura.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';


export const routes: Routes = [
    {path: '',component:ListaProductoComponent},
    {path: 'add',component:ProductoDetalleComponent},
    {path:'factura',component:FacturaComponent},
    
    
    
    
    
    
   

];
