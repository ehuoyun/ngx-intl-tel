import { TestBed, inject } from '@angular/core/testing';

import { NgxIntlTelService } from './ngx-intl-tel.service';

describe('NgxIntlTelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxIntlTelService]
    });
  });

  it('should be created', inject([NgxIntlTelService], (service: NgxIntlTelService) => {
    expect(service).toBeTruthy();
  }));
});
