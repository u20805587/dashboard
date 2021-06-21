import { TestBed } from '@angular/core/testing';

import { WorkerProjectApiService } from './projectTaskLog-api.service';

describe('ProjectTaskLogApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectTaskLogApiService = TestBed.get(ProjectTaskLogApiService);
    expect(service).toBeTruthy();
  });
});
