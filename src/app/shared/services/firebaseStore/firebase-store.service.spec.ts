import { TestBed } from '@angular/core/testing';

import { FirebaseStoreService } from './firebase-store.service';

describe('FirebaseStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseStoreService = TestBed.get(FirebaseStoreService);
    expect(service).toBeTruthy();
  });
});
