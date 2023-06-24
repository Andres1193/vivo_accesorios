import { TestBed } from '@angular/core/testing';

import { ServiceModalService } from './service-modal.service';

describe('ServiceModalService', () => {
  let service: ServiceModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
