import { TestBed } from '@angular/core/testing';

import { WorkerProjectApiService } from './projectTask-api.service';

describe('ProjectTaskApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectTaskApiService = TestBed.get(ProjectTaskApiService);
    expect(service).toBeTruthy();
  });
});
