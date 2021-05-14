import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobSettingsComponent } from './batchjob_settings.component';

describe('MasterdataTaTatypComponent', () => {
  let component: BatchjobSettingsComponent;
  let fixture: ComponentFixture<BatchjobSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchjobSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
