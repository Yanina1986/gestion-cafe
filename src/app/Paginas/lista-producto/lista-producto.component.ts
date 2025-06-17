import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validator } from '@angular/forms';
import { ProductoService } from '../../servicios/producto.service'; 
import { Producto } from '../../Clases/producto';
import { OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-lista-producto',
  imports: [],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  productos: Producto [] =[];

  constructor (private productoService : ProductoService){}

  ngOnInit ():void{
    this.productoService.listar().subscribe((data)=>{
      this.productos = data;

    });
  }  
  eliminar(id:number):void{
    this.productoService.eliminar(id).subscribe(()=>{
     this.productos = this.productos.filter(p => p._id !== id);
    });
  }
}




/*
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ProductoDetalleComponent } from "../producto-detalle/producto-detalle.component";
 


export class ListaProductoComponent {
  public productos: Array<Producto>;

  constructor(public route: Router, public productoService: ProductoService) {
    this.productos = this.productoService.Producto;
  }

  public editar(id: number) {
    this.route.navigateByUrl("producto/" + id.toString());
  }
}*/