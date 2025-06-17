import { Routes } from '@angular/router';
import { ProductoComponent } from './Paginas/producto/producto.component';
import { ListaProductoComponent } from './Paginas/lista-producto/lista-producto.component';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { Producto } from './Clases/producto';


export const routes: Routes = [
    {path:'', component:ProductoComponent,},
    {path:'producto',component : ProductoComponent},
    {path:'producto/:idProducto', component: ProductoComponent },
    {path: 'listaProducto', component: ListaProductoComponent},
   

];
