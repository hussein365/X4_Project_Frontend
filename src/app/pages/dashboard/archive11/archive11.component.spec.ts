import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archive11Component } from './archive11.component';

describe('MasterdataTaTatypComponent', () => {
  let component: Archive11Component;
  let fixture: ComponentFixture<Archive11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Archive11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Archive11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
