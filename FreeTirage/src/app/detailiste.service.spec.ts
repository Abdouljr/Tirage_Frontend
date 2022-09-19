import { TestBed } from '@angular/core/testing';

import { DetailisteService } from './detailiste.service';

describe('DetailisteService', () => {
  let service: DetailisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
