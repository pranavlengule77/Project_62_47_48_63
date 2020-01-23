import { TestBed } from '@angular/core/testing';

import { Home } from './home.service';

describe('HospitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Home = TestBed.get(Home);
    expect(service).toBeTruthy();
  });
});
