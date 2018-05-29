import { TestBed, inject } from '@angular/core/testing';

import { OrganizerService } from './organizer.service';

describe('OrganizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizerService]
    });
  });

  it('should be created', inject([OrganizerService], (service: OrganizerService) => {
    expect(service).toBeTruthy();
  }));
});
