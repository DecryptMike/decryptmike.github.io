import { ComponentFixture, TestBed } from '@angular/core/testing'; // Keep this line
// import { RouterTestingModule } from '@angular/router/testing'; // You might need this if your app.component.html uses router-outlet directly in tests

// Correct this import to use AppComponent
import { AppComponent } from './app.component'; // Ensure path is correct, should be './app.component'

describe('AppComponent', () => { // Change 'App' to 'AppComponent' here
  let fixture: ComponentFixture<AppComponent>; // Change 'App' to 'AppComponent' here
  let component: AppComponent; // Change 'App' to 'AppComponent' here

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [
      //   RouterTestingModule // Include if you have router-outlet in app.component.html and testing it
      // ],
      imports: [AppComponent] // If AppComponent is standalone, import it here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); // Change 'App' to 'AppComponent' here
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title 'DecryptMike Portfolio'`, () => { // Update title string to match app.component.ts
    // The title property is 'title = 'DecryptMike Portfolio';' in app.component.ts
    expect(component.title).toEqual('DecryptMike Portfolio');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Update the expected text to match your actual title (or remove if you're not rendering it directly)
    // This expects an h1 element to contain the title. Adjust based on your app.component.html
    expect(compiled.querySelector('.content span')?.textContent).toContain('DecryptMike Portfolio app is running!');
    // If you explicitly have an h1 with the title:
    // expect(compiled.querySelector('h1')?.textContent).toContain('DecryptMike Portfolio');
  });
});