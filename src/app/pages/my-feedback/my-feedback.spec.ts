import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeedback } from './my-feedback';

describe('MyFeedback', () => {
  let component: MyFeedback;
  let fixture: ComponentFixture<MyFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFeedback],
    }).compileComponents();

    fixture = TestBed.createComponent(MyFeedback);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
