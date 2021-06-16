import { TestBed } from '@angular/core/testing';

import { TaskApiService } from './tasktask-api.service';

describe('SubTaskApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskApiService = TestBed.get(SubTaskApiService);
    expect(service).toBeTruthy();
  });
});
