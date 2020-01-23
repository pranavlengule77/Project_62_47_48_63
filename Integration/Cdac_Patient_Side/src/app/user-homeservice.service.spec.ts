import { TestBed } from '@angular/core/testing';

import { UserHomeserviceService } from './user-homeservice.service';

describe('UserHomeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserHomeserviceService = TestBed.get(UserHomeserviceService);
    expect(service).toBeTruthy();
  });
});
