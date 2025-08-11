import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FiltroProductosPipe } from '../../pipes/filtro-productos.pipe';


@Component({

  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,FiltroProductosPipe,CommonModule,
    FormsModule
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ingresar() {
    if (this.loginForm.invalid) {
      this.error = 'Por favor completá todos los campos correctamente.';
      return;
    }

    const { email, password } = this.loginForm.value;

    this.http.post<any>('http://localhost:3000/api/auth/login', { email, password }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/productosdisponibles']);
      },
      error: (err) => {
        this.error = 'Credenciales inválidas o servidor no disponible.';
      }
    });

  }


}
















  /*
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
*/


