import { TestBed, inject } from '@angular/core/testing';

import { BackendApiService } from './backend-api.service';

describe('BackendApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendApiService]
    });
  });

  it('should ...', inject([BackendApiService], (service: BackendApiService) => {
    expect(service).toBeTruthy();
  }));
});
