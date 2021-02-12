/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImgDivService } from './img-div.service';

describe('Service: ImgDiv', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgDivService]
    });
  });

  it('should ...', inject([ImgDivService], (service: ImgDivService) => {
    expect(service).toBeTruthy();
  }));
});
