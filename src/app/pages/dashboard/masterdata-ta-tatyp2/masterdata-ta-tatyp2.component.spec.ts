import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataTaTatyp2Component } from './masterdata-ta-tatyp2.component';

describe('MasterdataTaTatypComponent', () => {
  let component: MasterdataTaTatyp2Component;
  let fixture: ComponentFixture<MasterdataTaTatyp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdataTaTatyp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdataTaTatyp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
