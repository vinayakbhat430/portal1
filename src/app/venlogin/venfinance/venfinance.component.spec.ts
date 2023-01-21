import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenfinanceComponent } from './venfinance.component';

describe('VenfinanceComponent', () => {
  let component: VenfinanceComponent;
  let fixture: ComponentFixture<VenfinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenfinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
