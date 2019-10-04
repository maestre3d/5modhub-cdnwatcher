import { TestBed, async, inject } from '@angular/core/testing';

import { PrivilegesGuard } from './privileges.guard';

describe('PrivilegesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivilegesGuard]
    });
  });

  it('should ...', inject([PrivilegesGuard], (guard: PrivilegesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
