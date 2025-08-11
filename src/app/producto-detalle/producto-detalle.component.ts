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
  imports: [FormsModule, CommonModule,MatInputModule,MatCardModule, MatIconModule,MatCardModule,MatIconModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {


  @Input('miAtributo')
  public miProducto: Producto = new Producto();

  @Input('indice')
  public i: number = 0;

  @Input()
  public odd: boolean = false;

  @Output() edita = new EventEmitter<number>();

  public get even(): boolean {
    return !this.odd;
  }

  public editar() {
    this.edita.emit(this.miProducto._id);
    }

}
