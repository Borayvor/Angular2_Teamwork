/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdventureService } from './adventure.service';

describe('AdventureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdventureService]
    });
  });

  it('should ...', inject([AdventureService], (service: AdventureService) => {
    expect(service).toBeTruthy();
  }));
});
