import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobArchiveComponent } from './batchjob_archive.component';

describe('MasterdataTaTatypComponent', () => {
  let component: BatchjobArchiveComponent;
  let fixture: ComponentFixture<BatchjobArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchjobArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
