import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastItems } from './breakfast-items';

describe('BreakfastItems', () => {
  let component: BreakfastItems;
  let fixture: ComponentFixture<BreakfastItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakfastItems],
    }).compileComponents();

    fixture = TestBed.createComponent(BreakfastItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
