import { TestBed } from '@angular/core/testing';

import { RotService } from './rot.service';

describe('RotService', () => {
  let service: RotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
