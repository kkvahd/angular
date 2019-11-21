import { TestBed } from '@angular/core/testing';

import { RouteguardAdminService } from './routeguardAdmin.service';

describe('RouteguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteguardAdminService = TestBed.get(RouteguardAdminService);
    expect(service).toBeTruthy();
  });
});
