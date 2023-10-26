import { TestBed } from '@angular/core/testing';

import { BsDataService } from './bs-data.service';

describe('BsDataService', () => {
  let service: BsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
