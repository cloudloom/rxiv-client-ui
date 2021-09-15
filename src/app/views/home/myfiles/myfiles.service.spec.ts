import { TestBed } from '@angular/core/testing';

import { MyfilesService } from './myfiles.service';

describe('MyfilesService', () => {
  let service: MyfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
