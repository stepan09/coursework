import { TestBed, inject } from '@angular/core/testing';

import { SportsmanService } from './sportsman.service';

describe('SportsmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportsmanService]
    });
  });

  it('should be created', inject([SportsmanService], (service: SportsmanService) => {
    expect(service).toBeTruthy();
  }));
});
