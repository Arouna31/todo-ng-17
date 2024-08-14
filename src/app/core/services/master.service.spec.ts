import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let service: MasterService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(MasterService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should getvalue from ValueService', () => {
    service = new MasterService(new ValueService());

    expect(service.getValue()).toEqual([
      { name: 'Ali', age: 12 },
      { name: 'Balil', age: 13 },
    ]);

    const fakeService = { getValue: () => [{}] };
    service = new MasterService(fakeService as ValueService);
    expect(service.getValue()).toEqual([{ name: 'bada', age: 12 }]);
  });
});
