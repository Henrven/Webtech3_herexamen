import { TestBed } from '@angular/core/testing';

import { OvertredingenService } from './overtredingen.service';

describe('OvertredingenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OvertredingenService = TestBed.get(OvertredingenService);
    expect(service).toBeTruthy();
  });
});
