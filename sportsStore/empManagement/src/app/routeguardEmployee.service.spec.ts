import { TestBed } from '@angular/core/testing';

import { RouteguardEmployeeService } from './routeguardEmployee.service';

describe('RouteguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteguardEmployeeService = TestBed.get(RouteguardEmployeeService);
    expect(service).toBeTruthy();
  });
});
