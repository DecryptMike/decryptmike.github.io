// src/app/contact/contact.component.ts // <--- This is the correct file name
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for standalone components

@Component({
  selector: 'app-contact',
  standalone: true, // <--- Make sure this is present
  imports: [CommonModule], // <--- Add CommonModule
  templateUrl: './contact.component.html', // <-- CORRECTED PATH (assuming your HTML is contact.component.html)
  styleUrls: ['./contact.component.css'] // Assuming your CSS is contact.component.css
})
export class ContactComponent {
  // Replace with your actual LinkedIn profile URL (if you use it in the template)
  linkedinUrl: string = 'https://www.linkedin.com/in/h4ck3rbyt3s/';
}