import { ComponentFixture, TestBed } from '@angular/core/testing'; // Keep this line as it's for testing

// Change this import to match the exported class name: FooterComponent
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => { // Change 'Footer' to 'FooterComponent' here
  let component: FooterComponent; // Change 'Footer' to 'FooterComponent' here
  let fixture: ComponentFixture<FooterComponent>; // Change 'Footer' to 'FooterComponent' here

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent] // If FooterComponent is standalone, import it here
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent); // Change 'Footer' to 'FooterComponent' here
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
