import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FiltroProductoPipe } from '../../pipes/filtro-producto.pipe';


@Component({

  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,FiltroProductoPipe,CommonModule,
    FormsModule
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ingresar() {
    if (!this.loginForm.valid) return;

    const { email, password } = this.loginForm.value;

    this.http.post<any>('http://localhost:3000/api/login', { email, password }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        alert('Credenciales inválidas');
        
           }
    });
  }
  }



