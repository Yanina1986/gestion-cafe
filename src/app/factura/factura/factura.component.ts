import { Component } from '@angular/core';

@Component({
  selector: 'app-factura',
  imports: [],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  public muestra: boolean = false;
  public cantidad:Array<number> = [1,2,3,4,5,6,7];

  public aceptar() {
    this.muestra = !this.muestra;
  }

  public agregar(){
    this.cantidad.push(58);
  }

}
