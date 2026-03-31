import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCoffee } from './hot-coffee';

describe('HotCoffee', () => {
  let component: HotCoffee;
  let fixture: ComponentFixture<HotCoffee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotCoffee],
    }).compileComponents();

    fixture = TestBed.createComponent(HotCoffee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
