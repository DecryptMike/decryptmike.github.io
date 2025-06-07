import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html', // <-- CORRECTED PATH
  styleUrl: './about.component.css', // Assuming you have about.component.css
})
export class AboutComponent {
  // Add any properties or methods for your about page here
}