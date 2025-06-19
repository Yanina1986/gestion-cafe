import { Routes } from '@angular/router';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ProductoComponent } from './producto/producto.component';  
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { Component } from '@angular/core';
import { FacturaComponent } from './factura/factura/factura.component';


export const routes: Routes = [
    {path: '',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegisterComponent},
    {path:'productos',component : ProductoComponent},
    {path:'factura',component:FacturaComponent},
    {path:'listaproductos',component:ListaProductoComponent},
    
    
    
    
    
   

];
