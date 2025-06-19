import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator } from '@angular/forms';
import { ProductoService, Producto } from '../servicios/producto.service';

@Component({
  selector: 'app-lista-producto',
  imports: [],
  templateUrl:'./lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent implements OnInit{
  productos: Producto [] =[];

  constructor (private productoService : ProductoService){}

  ngOnInit ():void{
    this.productoService.listar().subscribe((data)=>{
      this.productos = data;

    });
  }  
  eliminar(id:number):void{
    this.productoService.eliminar(id).subscribe(()=>{
     this.productos = this.productos.filter(p => p.id !== id);
    });
  }
}
