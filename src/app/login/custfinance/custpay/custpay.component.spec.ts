import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustpayComponent } from './custpay.component';

describe('CustpayComponent', () => {
  let component: CustpayComponent;
  let fixture: ComponentFixture<CustpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
