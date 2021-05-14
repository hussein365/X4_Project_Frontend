import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archive16Component } from './archive16.component';

describe('MasterdataTaTatypComponent', () => {
  let component: Archive16Component;
  let fixture: ComponentFixture<Archive16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Archive16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Archive16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
