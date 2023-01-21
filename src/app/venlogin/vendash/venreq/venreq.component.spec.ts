import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenreqComponent } from './venreq.component';

describe('VenreqComponent', () => {
  let component: VenreqComponent;
  let fixture: ComponentFixture<VenreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
