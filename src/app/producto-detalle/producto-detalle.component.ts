import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../Clases/producto';

@Component({
  selector: 'app-producto-detalle',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {

  
  public miProducto!: Producto;
  esNuevo: boolean = false;

  constructor(public activeRoute: ActivatedRoute, public productoService: ProductoService) {

    this.activeRoute.paramMap.subscribe(
      param => {
        let idParametro = param.get("idProducto") ?? "";
        if (idParametro == "")
          this.miProducto = new Producto();
        else {
          this.miProducto = this.productoService.Producto.filter(prod => prod._id.toString() == idParametro)[0] ?? new Producto();
        }
      }
    );
  }

  public log(argumento: any) {
    console.info(argumento);
  }

  public guardar() {
    let productos: Array<Producto> = this.productoService.Producto;
    if (this.miProducto._id) {
      let anterior = productos.filter(prod => prod._id == this.miProducto._id)[0];
      anterior._nombre = this.miProducto._nombre;
      
    } else {
      this.miProducto.id = productos.length + 1;
      productos.push(this.miProducto);
    }
    this.productoService.saveProducto(productos);
  }

  public limpiar() {
    this.miProducto = new Producto();
  }
  
}