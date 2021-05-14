import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archive13Component } from './archive13.component';

describe('MasterdataTaTatypComponent', () => {
  let component: Archive13Component;
  let fixture: ComponentFixture<Archive13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Archive13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Archive13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
