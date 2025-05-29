// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

// Import your components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatrixRainComponent } from './matrix-rain/matrix-rain.component'; // <--- ADD THIS IMPORT

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MatrixRainComponent // <--- ADD MatrixRainComponent to the imports array
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DecryptMike Portfolio';
}