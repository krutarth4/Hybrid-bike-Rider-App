import { TestBed } from '@angular/core/testing';

import { ErrorloggingService } from './errorlogging.service';

describe('ErrorloggingService', () => {
  let service: ErrorloggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorloggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
