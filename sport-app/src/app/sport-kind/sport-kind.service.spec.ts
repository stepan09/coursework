import { TestBed, inject } from '@angular/core/testing';

import { SportKindService } from './sport-kind.service';

describe('SportKindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportKindService]
    });
  });

  it('should be created', inject([SportKindService], (service: SportKindService) => {
    expect(service).toBeTruthy();
  }));
});
