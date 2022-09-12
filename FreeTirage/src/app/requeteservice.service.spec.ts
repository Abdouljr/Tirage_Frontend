import { TestBed } from '@angular/core/testing';

import { RequeteserviceService } from './requeteservice.service';

describe('RequeteserviceService', () => {
  let service: RequeteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequeteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
