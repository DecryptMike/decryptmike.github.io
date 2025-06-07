// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Make sure these imports match the actual paths to your components
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, data: { animation: 'portfolioPage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'aboutPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contactPage' } },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' }, // <--- CRITICAL: This sets your default route
  // Add a wildcard route for 404s if desired
  // { path: '**', component: NotFoundComponent } // Example for a 404 page
];