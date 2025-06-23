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
  

  public miProducto!: Producto;

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
  guardar() {
    if (this.miProducto.nombre.trim() === '') {
      alert('El nombre es obligatorio');
      return;
    }
  
    this.productoService.saveProducto(this.miProducto);
    alert('Producto guardado correctamente');
    this.limpiar();
  }
  

  limpiar(): void {
    this.miProducto = new Producto();
  }
 }

