import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskLogComponent } from './projectTaskLog.component';

describe('ProjectTaskLogComponent', () => {
  let component: ProjectTaskLogComponent;
  let fixture: ComponentFixture<ProjectTaskLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTaskLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTaskLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
