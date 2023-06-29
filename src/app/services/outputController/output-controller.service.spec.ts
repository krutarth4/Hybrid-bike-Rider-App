import { TestBed } from '@angular/core/testing';

import { OutputControllerService } from './output-controller.service';

describe('OutputControllerService', () => {
  let service: OutputControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
