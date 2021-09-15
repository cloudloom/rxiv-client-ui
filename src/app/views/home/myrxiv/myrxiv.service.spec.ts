import { TestBed } from '@angular/core/testing';

import { MyrxivService } from './myrxiv.service';

describe('MyrxivService', () => {
  let service: MyrxivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyrxivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
