import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario-producto',
  imports: [ReactiveFormsModule],
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
      precio_ars: ['', Validators.required],
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

    const data = this.productoForm.value;

  const precio = Number(data.precio_ars);
  if (isNaN(precio) || precio <= 0) {
   alert('El precio debe ser un número válido y mayor a 0');
    return;
  }

    data.precio_ars = precio;


    if (this.id) {
      // Modo edición
      this.productoService.obtenerProducto(this.id).subscribe(prod => {
    console.log('Producto cargado:', prod); // 👈 Agregá esto
    this.productoForm.patchValue(prod);
  });

    } else {

      this.productoService.crearProducto(data).subscribe(() => {
        alert('Producto creado con éxito');
        this.router.navigate(['/']);
      });
    }
  }


  limpiar() {
    this.productoForm.reset();
  }

}



