import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenpayComponent } from './venpay.component';

describe('VenpayComponent', () => {
  let component: VenpayComponent;
  let fixture: ComponentFixture<VenpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
