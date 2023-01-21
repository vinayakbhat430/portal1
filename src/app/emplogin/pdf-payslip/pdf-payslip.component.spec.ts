import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPayslipComponent } from './pdf-payslip.component';

describe('PdfPayslipComponent', () => {
  let component: PdfPayslipComponent;
  let fixture: ComponentFixture<PdfPayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfPayslipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
