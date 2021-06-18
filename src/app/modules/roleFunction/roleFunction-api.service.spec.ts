import { TestBed } from '@angular/core/testing';

import { RoleFunctionApiService } from './roleFunction-api.service';

describe('RoleFunctionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleFunctionApiService = TestBed.get(RoleFunctionApiService);
    expect(service).toBeTruthy();
  });
});
