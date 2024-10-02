import { TestBed } from '@angular/core/testing';

import { AnimalDetailsService } from './animal-details.service';

describe('AnimalDetailsService', () => {
  let service: AnimalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
