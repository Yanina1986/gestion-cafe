import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-producto-detalle',
  imports: [FormsModule, MatInputModule, MatCardModule, MatIconModule, CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {

  form : FormGroup;

  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
        descripcion: [''],
        precio_arg: [0, [Validators.required, Validators.min(1)]],
        categoria: ['', Validators.required],
        imagen: ['', Validators.required],
       
    })
  }
  ngOninit(): void{

  }
  addProducto(){
   console.log('Add producto');
  }
}