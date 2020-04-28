import { TestBed } from '@angular/core/testing';

import { BananaEffectService } from './banana-effect.service';

describe('BananaEffectService', () => {
  let service: BananaEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BananaEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
