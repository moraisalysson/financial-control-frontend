import { TestBed } from '@angular/core/testing';

import { ContasServiceService } from './contas-service.service';

describe('ContasServiceService', () => {
  let service: ContasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
