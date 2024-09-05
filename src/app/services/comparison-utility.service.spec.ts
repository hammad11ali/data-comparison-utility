import { TestBed } from '@angular/core/testing';

import { ComparisonUtilityService } from './comparison-utility.service';

describe('ComparisonUtilityService', () => {
  let service: ComparisonUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparisonUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
