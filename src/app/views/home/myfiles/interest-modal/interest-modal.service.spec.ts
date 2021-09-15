import { TestBed } from '@angular/core/testing';

import { InterestModalService } from './interest-modal.service';

describe('InterestModalService', () => {
  let service: InterestModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
