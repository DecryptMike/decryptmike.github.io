// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Correct these imports to match the generated filenames (e.g., portfolio.ts)
import { PortfolioComponent } from './portfolio/portfolio.component'; // <--- REMOVE .component
import { AboutComponent } from './about/about';           // <--- REMOVE .component
import { ContactComponent } from './contact/contact';       // <--- REMOVE .component

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'portfolio' }
];