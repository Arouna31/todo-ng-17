import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let service: MasterService;
  // Declare Spy service of injects service
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    // create `getValue` spy on an object representing the ValueService
    const spy = jasmine.createSpyObj('ValueService', ['getValue', 'setValue']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [MasterService, { provide: ValueService, useValue: spy }],
    });
    // Inject both the service-to-test and its (spy) dependency
    service = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(
      ValueService,
    ) as jasmine.SpyObj<ValueService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud get value', () => {
    // set the value to return when the `getValue` spy is called.
    const stubValue = [{ name: 'Ali', age: 12 }];
    valueServiceSpy.getValue.and.returnValue(stubValue);

    expect(service.getValue())
      .withContext('service returned stub value')
      .toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy calls once')
      .toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(
      stubValue,
    );
  });

  it('should set value', () => {
    const parameters = { name: 'Badra', age: 20 };
    valueServiceSpy.setValue.and.returnValue(3);

    expect(service.setValue(parameters)).toBe(3);
    expect(valueServiceSpy.setValue).toHaveBeenCalledWith(parameters);
    expect(valueServiceSpy.setValue.calls.count()).toBe(1);
  });
});
