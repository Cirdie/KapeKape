import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdNonCoffeeDrinks } from './cold-non-coffee-drinks';

describe('ColdNonCoffeeDrinks', () => {
  let component: ColdNonCoffeeDrinks;
  let fixture: ComponentFixture<ColdNonCoffeeDrinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColdNonCoffeeDrinks],
    }).compileComponents();

    fixture = TestBed.createComponent(ColdNonCoffeeDrinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
