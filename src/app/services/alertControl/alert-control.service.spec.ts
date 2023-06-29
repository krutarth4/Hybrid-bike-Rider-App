import { TestBed } from '@angular/core/testing';

import { AlertControlService } from './alert-control.service';

describe('AlertControlService', () => {
  let service: AlertControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
