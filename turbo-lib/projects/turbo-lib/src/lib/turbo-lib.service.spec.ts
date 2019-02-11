import { TestBed } from '@angular/core/testing';

import { TurboLibService } from './turbo-lib.service';

describe('TurboLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurboLibService = TestBed.get(TurboLibService);
    expect(service).toBeTruthy();
  });
});
