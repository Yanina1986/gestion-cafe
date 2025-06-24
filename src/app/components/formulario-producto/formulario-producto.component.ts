import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario-producto',
  imports: [ActivatedRoute,Router,ProductoService,ReactiveFormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})

export class FormularioProductoComponent implements OnInit {
  productoForm: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: ['', Validators.required],
      categoria: [''],
      imagen: ['']
    });
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.productoService.obtenerProducto(this.id).subscribe(prod => {
        this.productoForm.patchValue(prod);
      });
    }
  }

  guardar() {
    if (this.productoForm.invalid) return;

    const data = this.productoForm.value;

    if (this.id) {
      this.productoService.actualizarProducto(this.id, data).subscribe(() => this.router.navigate(['/']));
    } else {
      this.productoService.crearProducto(data).subscribe(() => this.router.navigate(['/']));
    }
  }

  limpiar() {
    this.productoForm.reset();
  }
}



