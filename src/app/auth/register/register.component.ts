import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
error: string = '';

constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  this.registerForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}

registrar(): void {
  if (this.registerForm.invalid) {
    this.error = 'Por favor, completá todos los campos correctamente.';
    return;
  }

  this.auth.register(this.registerForm.value).subscribe({
    next: () => {
      alert('Registro exitoso');
      this.router.navigate(['/listaProductos']);      
      
    },
    error: () => {
      this.error = 'Error al registrar. Intenta nuevamente.';
    }
  });
}

}





/*import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  
  }

  registrar() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value);
      this.router.navigate(['/login']);
    }
  }
  
  

}*/
