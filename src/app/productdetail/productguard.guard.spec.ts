import { TestBed, async, inject } from '@angular/core/testing';

import { ProductguardGuard } from './productguard.guard';

describe('ProductguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductguardGuard]
    });
  });

  it('should ...', inject([ProductguardGuard], (guard: ProductguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
