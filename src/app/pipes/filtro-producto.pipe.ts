import { Pipe, PipeTransform } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../Clases/producto';

@Pipe({
  name: 'filtroProducto',

})
export class FiltroProductoPipe implements PipeTransform {

  transform(productos: Producto[], texto: string): Producto[] {
    if (!texto) return productos;
    texto = texto.toLowerCase();
    return productos.filter(p =>
      p.nombre.toLowerCase().includes(texto) ||
      p.categoria.toLowerCase().includes(texto)
    );
  }
}
