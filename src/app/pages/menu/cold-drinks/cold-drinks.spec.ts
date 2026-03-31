import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdDrinks } from './cold-drinks';

describe('ColdDrinks', () => {
  let component: ColdDrinks;
  let fixture: ComponentFixture<ColdDrinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColdDrinks],
    }).compileComponents();

    fixture = TestBed.createComponent(ColdDrinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
