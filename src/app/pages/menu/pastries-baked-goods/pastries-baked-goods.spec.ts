import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastriesBakedGoods } from './pastries-baked-goods';

describe('PastriesBakedGoods', () => {
  let component: PastriesBakedGoods;
  let fixture: ComponentFixture<PastriesBakedGoods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastriesBakedGoods],
    }).compileComponents();

    fixture = TestBed.createComponent(PastriesBakedGoods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
