/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityDescService } from './city-desc.service';

describe('CityDescService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityDescService]
    });
  });

  it('should ...', inject([CityDescService], (service: CityDescService) => {
    expect(service).toBeTruthy();
  }));
});
