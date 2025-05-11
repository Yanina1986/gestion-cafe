import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../producto/producto.component';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-lista-producto',
  imports: [MatListModule,CommonModule,MatCardModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  public productos: Array <Producto>
  constructor (){
    this.productos =JSON.parse(localStorage.getItem("productos")??[]);
  }

}
