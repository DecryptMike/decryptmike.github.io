import { Component, OnInit, OnDestroy, ViewChild, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed if you use Angular directives like NgIf, NgFor in template

@Component({
  selector: 'app-matrix-rain',
  standalone: true, // Assuming your project uses standalone components (default for new Angular)
  imports: [CommonModule],
  templateUrl: './matrix-rain.component.html',
  styleUrls: ['./matrix-rain.component.css']
})
export class MatrixRainComponent implements OnInit, OnDestroy {
  @ViewChild('matrixCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>; // Access the canvas

  private ctx!: CanvasRenderingContext2D;
  private animationFrameId!: number;
  private resizeTimeout: any; // NodeJS.Timeout is specific to Node.js, any is fine for browser setTimeout
  private drops: number[] = [];

  // Configuration for the rain effect
  private characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ﾊﾐﾋｰｳｼ...";
  private fontSize = 14;
  private primaryGreen = "#34d399";

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext("2d")!; // Use ! for non-null assertion if you're certain it won't be null

    this.handleResize(); // Initial size setup
    window.addEventListener("resize", this.handleResizeBound); // Use bound method for event listener
    this.draw(); // Start the animation

    // Optional: Hide scrollbars if they appear due to background
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId); // Stop animation
    window.removeEventListener("resize", this.handleResizeBound); // Clean up listener
    clearTimeout(this.resizeTimeout); // Clear any pending resize timeouts
    document.body.style.overflow = ''; // Restore overflow if it was changed
  }

  // Bind 'this' for event listener
  private handleResizeBound = this.handleResize.bind(this);

  private initializeMatrix() {
    const canvas = this.canvasRef.nativeElement;
    const columns = Math.floor(canvas.width / this.fontSize);
    this.drops = Array(columns).fill(1); // Reset drops array
  }

  private draw = () => { // Use arrow function to maintain 'this' context for requestAnimationFrame
    const canvas = this.canvasRef.nativeElement;
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Semi-transparent black for fade effect
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillStyle = this.primaryGreen; // Green characters
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
      if (this.drops[i] * this.fontSize > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0; // Reset drop to top
      }
      this.drops[i]++; // Move drop down
    }

    this.animationFrameId = requestAnimationFrame(this.draw); // Request next frame
  };

  private handleResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      const canvas = this.canvasRef.nativeElement;
      // We want the canvas to fill the entire window/viewport
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.initializeMatrix(); // Reinitialize matrix for new dimensions
    }, 250); // Debounce resize for performance
  }
}
