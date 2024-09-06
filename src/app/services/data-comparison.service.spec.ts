import { TestBed } from '@angular/core/testing';

import { DataComparisonService } from './data-comparison.service';

describe('DataComparisonService', () => {
  let service: DataComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
