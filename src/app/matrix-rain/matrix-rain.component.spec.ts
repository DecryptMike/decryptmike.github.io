import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixRain } from './matrix-rain';

describe('MatrixRain', () => {
  let component: MatrixRain;
  let fixture: ComponentFixture<MatrixRain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixRain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixRain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
