import { TestBed } from '@angular/core/testing';

import { NgxKeyvalueService } from './ngx-keyvalue.service';

describe('NgxKeyvalueService', () => {
  let service: NgxKeyvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKeyvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
