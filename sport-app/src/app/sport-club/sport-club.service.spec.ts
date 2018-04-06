import { TestBed, inject } from '@angular/core/testing';

import { SportClubService } from './sport-club.service';

describe('SportClubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportClubService]
    });
  });

  it('should be created', inject([SportClubService], (service: SportClubService) => {
    expect(service).toBeTruthy();
  }));
});
