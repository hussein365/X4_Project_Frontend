import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archive18Component } from './archive18.component';

describe('MasterdataTaTatypComponent', () => {
  let component: Archive18Component;
  let fixture: ComponentFixture<Archive18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Archive18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Archive18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
