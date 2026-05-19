import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcedCoffee } from './iced-coffee';

describe('IcedCoffee', () => {
  let component: IcedCoffee;
  let fixture: ComponentFixture<IcedCoffee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcedCoffee],
    }).compileComponents();

    fixture = TestBed.createComponent(IcedCoffee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
