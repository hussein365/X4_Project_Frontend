import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataTreeComponent } from './masterdata-tree.component';

describe('MasterdataTaTatypComponent', () => {
  let component: MasterdataTreeComponent;
  let fixture: ComponentFixture<MasterdataTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdataTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdataTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
