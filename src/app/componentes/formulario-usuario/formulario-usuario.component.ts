import { CommonModule } from '@angular/common';
import { Component,EventEmitter,input,Input,output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Usuario } from '../../Clases/usuario';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-formulario-usuario',
  imports: [FormsModule, MatInputModule, MatCardModule, MatIconModule, CommonModule],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {

 /* @input('miUsuario')
  public miUsuario: Usuario = new Usuario();

  @input ('indice')
   public i: number = 0;

  @Input()
  public odd: boolean = false; 

  
  @Output() edita = new EventEmitter<number>();*/
  
}

