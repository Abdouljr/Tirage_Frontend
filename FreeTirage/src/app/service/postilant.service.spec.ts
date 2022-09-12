import { TestBed } from '@angular/core/testing';

import { PostilantService } from './postilant.service';

describe('PostilantService', () => {
  let service: PostilantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostilantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
