import { Component, Input, input } from '@angular/core';
import { Bandera } from '../../Clases/bandera';

@Component({
  selector: 'app-bandera',
  imports: [],
  templateUrl: './bandera.component.html',
  styleUrl: './bandera.component.css'
})
export class BanderaComponent {
 @Input()
public pais! :Bandera;

}
 