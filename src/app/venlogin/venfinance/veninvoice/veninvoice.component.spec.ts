import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeninvoiceComponent } from './veninvoice.component';

describe('VeninvoiceComponent', () => {
  let component: VeninvoiceComponent;
  let fixture: ComponentFixture<VeninvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeninvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeninvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
