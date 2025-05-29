// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // CRITICAL: Import provideRouter
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // CRITICAL: Import your routes

// (Environment imports and enableProdMode should be removed or commented out)

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // CRITICAL: Provide the router with your defined routes
  ]
})
.catch(err => console.error(err));