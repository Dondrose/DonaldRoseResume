import { TestBed, inject } from '@angular/core/testing';

import { InMemoryProfileDataService } from './in-memory-profile-data.service';

describe('InMemoryProfileDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryProfileDataService]
    });
  });

  it('should be created', inject([InMemoryProfileDataService], (service: InMemoryProfileDataService) => {
    expect(service).toBeTruthy();
  }));
});
