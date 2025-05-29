import { ComponentFixture, TestBed } from '@angular/core/testing';

// Change this import to match the exported class name: HeaderComponent
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => { // Change 'Header' to 'HeaderComponent' here
  let component: HeaderComponent; // Change 'Header' to 'HeaderComponent' here
  let fixture: ComponentFixture<HeaderComponent>; // Change 'Header' to 'HeaderComponent' here

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent] // If HeaderComponent is standalone, import it here
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent); // Change 'Header' to 'HeaderComponent' here
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
