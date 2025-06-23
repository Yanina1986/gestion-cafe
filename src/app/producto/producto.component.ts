import { Component,OnInit } from "@angular/core";
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from "@angular/forms"
import { FormControl } from "@angular/forms";
import { Producto } from "../Clases/producto";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductoService } from "../servicios/producto.service";
import { FormsModule } from "@angular/forms";
import { Route } from "@angular/router";

@Component({
  selector: 'app-producto',
  imports: [ReactiveFormsModule,FormsModule],
  styleUrls: ['./producto.component.css'],
  templateUrl: './producto.component.html'

})

export class ProductoComponent {
  

  public miProducto: Producto;

  constructor (){
    this.miProducto = new Producto();
  }

  public guardar(){
    let producto:Array<Producto> = JSON.parse(localStorage.getItem("productos")??'[]');
    this.miProducto.id = producto.length +1;
    producto.push(this.miProducto);
    localStorage.setItem('producto',JSON.stringify(producto));
  }
  public limpiar() {
    this.miProducto = new Producto();
  }
}

 

