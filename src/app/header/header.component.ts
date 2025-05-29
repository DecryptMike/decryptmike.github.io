import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for common directives like *ngIf, *ngFor
import { RouterModule } from '@angular/router';   // <--- ADD THIS IMPORT for routerLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule // <--- ADD RouterModule to the imports array
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Your code here
}