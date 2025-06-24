import { Component,OnInit } from "@angular/core";
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from "@angular/forms"
import { FormControl } from "@angular/forms";
import { Producto } from "../Clases/producto";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductoService } from "../servicios/producto.service";
import { FormsModule } from "@angular/forms";
import { Route} from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { filter } from "rxjs";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-producto',
  imports: [ReactiveFormsModule,FormsModule,MatIconModule,MatFormFieldModule],
  styleUrls: ['./producto.component.css'],
  templateUrl: './producto.component.html'

})

export class ProductoComponent {
  
  /*public miProducto!: Producto;

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
    anterior.descripcion = this.miProducto._descripcion;
    anterior._precio_arg = this.miProducto._precio_arg;
    anterior._categoria = this.miProducto._categoria;
    anterior._imagen= this.miProducto._imagen;
  } else {
    this.miProducto.id = productos.length + 1;
    productos.push(this.miProducto);
  }
  this.productoService.saveProducto(productos);
}

  public limpiar() {
    this.miProducto = new Producto();
  }*/
}

 

