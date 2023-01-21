import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencreditComponent } from './vencredit.component';

describe('VencreditComponent', () => {
  let component: VencreditComponent;
  let fixture: ComponentFixture<VencreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VencreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
