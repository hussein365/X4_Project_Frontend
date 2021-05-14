import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archive12Component } from './archive12.component';

describe('MasterdataTaTatypComponent', () => {
  let component: Archive12Component;
  let fixture: ComponentFixture<Archive12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Archive12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Archive12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
