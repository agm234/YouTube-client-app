import { TestBed } from '@angular/core/testing';

import { SortdataService } from './sortdata.service';

describe('SortdataService', () => {
  let service: SortdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
