import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustdebitComponent } from './custdebit.component';

describe('CustdebitComponent', () => {
  let component: CustdebitComponent;
  let fixture: ComponentFixture<CustdebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustdebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustdebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
