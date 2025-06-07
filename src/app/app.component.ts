// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
  state // Make sure 'state' is imported if you use it in other animations
} from '@angular/animations';

// Import your custom components used in app.component.html
import { MatrixRainComponent } from './matrix-rain/matrix-rain.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatrixRainComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html', // <--- THIS LINE MUST BE './app.component.html'
  styleUrls: ['./app.component.css'],  // <--- THIS LINE MUST BE './app.component.css'
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 1
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('600ms ease-out', style({ left: '-100%', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('600ms ease-out', style({ left: '0%', opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'DecryptMike';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}