import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../servicios/producto.service';

@Pipe({
  name: 'filtroProducto',

})
export class FiltroProductoPipe implements PipeTransform {

  transform(productos: Producto[], termino: string): Producto[] {
    return productos.filter(p =>
      p.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      p.categoria.toLowerCase().includes(termino.toLowerCase()));
  }
}
