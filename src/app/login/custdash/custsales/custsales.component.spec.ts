import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustsalesComponent } from './custsales.component';

describe('CustsalesComponent', () => {
  let component: CustsalesComponent;
  let fixture: ComponentFixture<CustsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
