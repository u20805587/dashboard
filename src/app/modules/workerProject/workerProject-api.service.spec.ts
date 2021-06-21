import { TestBed } from '@angular/core/testing';

import { WorkerProjectApiService } from './workerProject-api.service';

describe('WorkerProjectApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkerProjectApiService = TestBed.get(WorkerProjectApiService);
    expect(service).toBeTruthy();
  });
});
