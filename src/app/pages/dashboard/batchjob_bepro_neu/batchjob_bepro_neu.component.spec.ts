import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobBeproNeuComponent } from './batchjob_bepro_neu.component';

describe('MasterdataTaTatypComponent', () => {
  let component: BatchjobBeproNeuComponent;
  let fixture: ComponentFixture<BatchjobBeproNeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchjobBeproNeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobBeproNeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
