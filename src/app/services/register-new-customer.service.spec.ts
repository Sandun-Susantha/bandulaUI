import { TestBed } from '@angular/core/testing';

import { RegisterNewCustomerService } from './register-new-customer.service';

describe('RegisterNewCustomerService', () => {
  let service: RegisterNewCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterNewCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
