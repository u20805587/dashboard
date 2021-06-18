import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerRoleComponent } from './workerRole.component';

describe('WorkerRoleComponent', () => {
  let component: WorkerRoleComponent;
  let fixture: ComponentFixture<WorkerRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
