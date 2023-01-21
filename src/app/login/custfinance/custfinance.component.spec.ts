import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustfinanceComponent } from './custfinance.component';

describe('CustfinanceComponent', () => {
  let component: CustfinanceComponent;
  let fixture: ComponentFixture<CustfinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustfinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
