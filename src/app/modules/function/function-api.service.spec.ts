import { TestBed } from '@angular/core/testing';

import { FunctionApiService } from './function-api.service';

describe('FunctionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionApiService = TestBed.get(FunctionApiService);
    expect(service).toBeTruthy();
  });
});
