import { TestBed } from '@angular/core/testing';

import { GuardActivateGuard } from './guard-activate.guard';

describe('GuardActivateGuard', () => {
  let guard: GuardActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
