import { TestBed } from '@angular/core/testing';

import { SampleHeadersInterceptorService } from './sample-headers-interceptor.service';

describe('SampleHeadersInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleHeadersInterceptorService = TestBed.get(SampleHeadersInterceptorService);
    expect(service).toBeTruthy();
  });
});
