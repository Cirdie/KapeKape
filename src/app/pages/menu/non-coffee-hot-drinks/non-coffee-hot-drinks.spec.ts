import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCoffeeHotDrinks } from './non-coffee-hot-drinks';

describe('NonCoffeeHotDrinks', () => {
  let component: NonCoffeeHotDrinks;
  let fixture: ComponentFixture<NonCoffeeHotDrinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonCoffeeHotDrinks],
    }).compileComponents();

    fixture = TestBed.createComponent(NonCoffeeHotDrinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
