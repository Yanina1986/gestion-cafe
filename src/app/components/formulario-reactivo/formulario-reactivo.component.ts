import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {

  formulario! : FormGroup;

  constructor (private fb:FormBuilder){}
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre:new FormControl ('', [Validators.required, Validators.minLength(10)]),
      /*descripcion: [''],
      precio: [0, [Validators.required, Validators.min(1)]],
      categoria: ['', Validators.required],
      imagen: ['']*/
    });
  }

  guardar(): void {
    console.log('Datos del producto:', this.formulario.value);
  }

}
