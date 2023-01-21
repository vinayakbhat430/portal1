import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VengoodsComponent } from './vengoods.component';

describe('VengoodsComponent', () => {
  let component: VengoodsComponent;
  let fixture: ComponentFixture<VengoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VengoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VengoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
