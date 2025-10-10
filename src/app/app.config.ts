import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; // Necesario para Material

import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms'; // No es un provider root, pero se deja para referencia
import { provideCharts, withDefaultRegisterables, } from 'ng2-charts';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideCharts(withDefaultRegisterables()),
  ]
};
