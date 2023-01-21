import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustcreditComponent } from './custcredit.component';

describe('CustcreditComponent', () => {
  let component: CustcreditComponent;
  let fixture: ComponentFixture<CustcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustcreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
