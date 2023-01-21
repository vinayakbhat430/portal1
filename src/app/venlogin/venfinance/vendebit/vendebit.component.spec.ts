import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendebitComponent } from './vendebit.component';

describe('VendebitComponent', () => {
  let component: VendebitComponent;
  let fixture: ComponentFixture<VendebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
