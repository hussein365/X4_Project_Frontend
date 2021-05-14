import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataTaTatypComponent } from './masterdata-ta-tatyp.component';

describe('MasterdataTaTatypComponent', () => {
  let component: MasterdataTaTatypComponent;
  let fixture: ComponentFixture<MasterdataTaTatypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdataTaTatypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdataTaTatypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
