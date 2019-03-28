import { TestBed } from '@angular/core/testing';

import { SamplesErrorInterceptorServiceService } from './samples-error-interceptor-service.service';

describe('SamplesErrorInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamplesErrorInterceptorServiceService = TestBed.get(SamplesErrorInterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
