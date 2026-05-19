import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtySignatureDrinks } from './specialty-signature-drinks';

describe('SpecialtySignatureDrinks', () => {
  let component: SpecialtySignatureDrinks;
  let fixture: ComponentFixture<SpecialtySignatureDrinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialtySignatureDrinks],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialtySignatureDrinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
