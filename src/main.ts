// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// No need to import provideAnimations here anymore as it's in app.config.ts
// import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    // This is the CRITICAL line that brings in all providers from app.config.ts (routing, animations)
    ...appConfig.providers,

    // Do NOT add provideAnimations() here again if it's in app.config.ts
  ]
}).catch((err) => console.error(err));