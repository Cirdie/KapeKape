import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCoffee } from './non-coffee';

describe('NonCoffee', () => {
  let component: NonCoffee;
  let fixture: ComponentFixture<NonCoffee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonCoffee],
    }).compileComponents();

    fixture = TestBed.createComponent(NonCoffee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
