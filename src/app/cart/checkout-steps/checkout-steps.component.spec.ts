import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStepsComponent } from './checkout-steps.component';

describe('CheckoutStepsComponent', () => {
  let component: CheckoutStepsComponent;
  let fixture: ComponentFixture<CheckoutStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
