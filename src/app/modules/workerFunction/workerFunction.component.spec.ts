import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerFunctionComponent } from './workerFunction.component';

describe('WorkerFunctionComponent', () => {
  let component: WorkerFunctionComponent;
  let fixture: ComponentFixture<WorkerFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
