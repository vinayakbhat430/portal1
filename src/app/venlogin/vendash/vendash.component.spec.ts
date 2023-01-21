import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendashComponent } from './vendash.component';

describe('VendashComponent', () => {
  let component: VendashComponent;
  let fixture: ComponentFixture<VendashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
