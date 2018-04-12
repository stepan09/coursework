import { TestBed, inject } from '@angular/core/testing';

import { CourtService } from './court.service';

describe('CourtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourtService]
    });
  });

  it('should be created', inject([CourtService], (service: CourtService) => {
    expect(service).toBeTruthy();
  }));
});
