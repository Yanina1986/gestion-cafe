import { Component } from '@angular/core';
import { Producto } from '../../Clases/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
  
  //styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{

  formularioProducto !: FormGroup;

  constructor (private fb:FormBuilder, private productoService : ProductoService){

  }
  ngOnInit(): void {
      this.formularioProducto = this.fb.group({
      nombre : ['',Validators.required],
      descripcion: [''],
      precio_ars: [0,[Validators.required, Validators.min(1)]],
      categoria: ['',Validators.required],
      imagen: ['']
      });
  }
  
    guardar(): void {
      if (this.formularioProducto.valid) {
        console.log('Formulario válido:', this.formularioProducto.value);
      } else {
        console.log('Formulario inválido');
      }
    }
}

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

  
   guardar(): void{
    console.log('Guardando producto...');

   }
  

  public limpiar() {
    this.miProducto = new Producto();
  }
}*/