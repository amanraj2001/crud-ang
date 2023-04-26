import { TestBed } from '@angular/core/testing';

import { FservService } from './fserv.service';

describe('FservService', () => {
  let service: FservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
