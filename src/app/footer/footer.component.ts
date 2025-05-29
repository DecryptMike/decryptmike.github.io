import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for common directives like *ngIf, *ngFor
import { RouterModule } from '@angular/router';   // <--- ADD THIS IMPORT for routerLink (if used in footer)

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule // <--- ADD RouterModule to the imports array (if used in footer)
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}