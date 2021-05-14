import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archive14Component } from './archive14.component';

describe('MasterdataTaTatypComponent', () => {
  let component: Archive14Component;
  let fixture: ComponentFixture<Archive14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Archive14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Archive14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
