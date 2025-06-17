import { Component,OnInit } from "@angular/core";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";



@Component({
  selector: 'app-producto',
  imports: [],
  styleUrls: ['./producto.component.css'],
  templateUrl: './producto.component.html'

})

export class ProductoComponent implements OnInit{

  formularioProducto!: FormGroup;

  constructor (private fb:FormBuilder){}
  ngOnInit(): void {
      this.formularioProducto = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: [''],
        precio: [0, [Validators.required, Validators.min(1)]],
        categoria: ['', Validators.required],
       
      });
  }
  
  guardar(): void {
    console.log('Producto guardado:', this.formularioProducto.value);
  }
 }

