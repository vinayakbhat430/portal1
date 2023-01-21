import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsalpayslipComponent } from './empsalpayslip.component';

describe('EmpsalpayslipComponent', () => {
  let component: EmpsalpayslipComponent;
  let fixture: ComponentFixture<EmpsalpayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsalpayslipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsalpayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
