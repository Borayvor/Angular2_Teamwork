/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseService } from './base.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseService]
    });
  });

  it('should ...', inject([BaseService], (service: BaseService) => {
    expect(service).toBeTruthy();
  }));
});
