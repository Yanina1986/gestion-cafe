import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProductos'
})
export class FiltroProductosPipe implements PipeTransform {

  transform(productos: any[], filtro: string): any[] {
    if (!filtro) return productos;
    filtro = filtro.toLowerCase();
    return productos.filter(p =>
      p.nombre.toLowerCase().includes(filtro) ||
      p.categoria.toLowerCase().includes(filtro)
    );
  }
}


