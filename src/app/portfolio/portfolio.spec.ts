import { ComponentFixture, TestBed } from '@angular/core/testing';

// Corrected import: Should be PortfolioComponent, not Portfolio
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => { // Changed description to match component name
  let component: PortfolioComponent; // Corrected type
  let fixture: ComponentFixture<PortfolioComponent>; // Corrected type

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent] // Corrected import
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent); // Corrected component creation
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
