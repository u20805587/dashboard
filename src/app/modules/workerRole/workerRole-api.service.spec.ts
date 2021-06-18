import { TestBed } from '@angular/core/testing';

import { WorkerRoleApiService } from './workerRole-api.service';

describe('WorkerRoleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkerRoleApiService = TestBed.get(WorkerRoleApiService);
    expect(service).toBeTruthy();
  });
});
