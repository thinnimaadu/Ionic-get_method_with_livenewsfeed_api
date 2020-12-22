import { TestBed } from '@angular/core/testing';

import { IndianewsService } from './indianews.service';

describe('IndianewsService', () => {
  let service: IndianewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
