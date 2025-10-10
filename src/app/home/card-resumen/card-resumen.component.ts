import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-resumen',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './card-resumen.component.html',
  styleUrls: ['./card-resumen.component.css']
})
export class CardResumenComponent {
   @Input() title: string = '';
   @Input() value: string = '';
   @Input() icon: string = 'attach_money';
   @Input() color: string = 'primary';
}
