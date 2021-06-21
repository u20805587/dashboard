import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerProjectComponent } from './workerProject.component';

describe('WorkerProjectComponent', () => {
  let component: WorkerProjectComponent;
  let fixture: ComponentFixture<WorkerProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
