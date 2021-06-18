import { TestBed } from '@angular/core/testing';

import { WorkerFunctionApiService } from './workerFunction-api.service';

describe('WorkerFunctionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkerFunctionApiService = TestBed.get(WorkerFunctionApiService);
    expect(service).toBeTruthy();
  });
});
