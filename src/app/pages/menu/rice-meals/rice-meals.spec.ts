import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceMeals } from './rice-meals';

describe('RiceMeals', () => {
  let component: RiceMeals;
  let fixture: ComponentFixture<RiceMeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiceMeals],
    }).compileComponents();

    fixture = TestBed.createComponent(RiceMeals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
