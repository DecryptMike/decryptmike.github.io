// src/app/portfolio/portfolio.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for *ngIf and *ngFor

// Define an interface for your project/repository data
interface Repository {
  name: string;
  description: string;
  link?: string; // Optional: Link to the GitHub repo or live demo
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: true, // Ensure this is true if your component is standalone
  imports: [CommonModule] // CommonModule is needed for directives like *ngIf and *ngFor
})
export class PortfolioComponent implements OnInit {

  // Your portfolio summary text
  portfolioSummary: string = `Where Innovation Meets Precision, And Every Project Reflects A Passion For Technology And Purposeful Design. From Secure Backend Systems To Elegant, User-Focused Interfaces, Each Build Is A Blend Of Creativity, Technical Skills, And Problem-Solving. Whether Working With AI, Cybersecurity, Or Scalable Web Architecture, I Approach Every Challenge With A Commitment To Quality And A Drive To Create Solutions That Make A Difference. Grab A Coffee, Take A Look Around, And Discover How I Turn Ideas Into Impactful Digital Experiences.`;

  // Array to hold your repository data (6 repositories as provided)
  repositories: Repository[] = [
    {
      name: 'DecryptMike-Log-Analyzer',
      link: 'https://github.com/DecryptMike/DecryptMike-Log-Analyzer',
      description: 'Python-Based Log Analyzer That Detects Brute-Force Attacks, Directory Traversal, And Suspicious Behavior In System Or Web Server Logs. Built For Threat Detection And Security Analysis.'
    },
    {
      name: 'DecryptMike-AI-Backend',
      link: 'https://github.com/DecryptMike/DecryptMike-AI-Backend',
      description: 'A Robust FastAPI Backend For Real-Time Phishing Email Analysis, Leveraging HuggingFace BERT For Advanced Natural Language Processing. Features A Matrix-Themed Swagger UI For Interactive API Exploration And Seamless Integration Into Cybersecurity Workflows.'
    },
    {
      name: 'DecryptMike-AI-Frontend',
      link: 'https://github.com/DecryptMike/DecryptMike-AI-Frontend',
      description: 'Matrix-Style Frontend For Phishing Detection With Animated UI, Next.js, Tailwind CSS, And HuggingFace API Integration.'
    },
    {
      name: 'DecryptMike-SecureFileTransfer',
      link: 'https://github.com/DecryptMike/DecryptMike-SecureFileTransfer',
      description: 'Secure File Transfer Tool Built With Python + Flask. End-To-End Encrypted File Upload & Download System - Like A Private Mini WeTransfer With AES Encryption.'
    },
    {
      name: 'DecryptMike-AI-Text-Summarizer',
      link: 'https://github.com/DecryptMike/DecryptMike-AI-Text-Summarizer',
      description: 'An AI-Powered Text Summarizer Web App Using OpenAI API.'
    },
    {
      name: 'DecryptMike-SaaS-Starter-Kit',
      link: 'https://github.com/DecryptMike/DecryptMike-SaaS-Starter-Kit',
      description: 'A Modern SaaS Boilerplate Built With Next.js And Stripe, Featuring Role-Based Access Control (RBAC), User Authentication, And A Clean Dashboard Layout. Perfect For Launching MVPs Fast.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}