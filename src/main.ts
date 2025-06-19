import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './app/auth/login/login.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';



bootstrapApplication(LoginComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
*/