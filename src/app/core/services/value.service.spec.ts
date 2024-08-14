import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get value', () => {
    expect(service.getValue())
      .withContext('La valeur à retournée')
      .toEqual([
        { name: 'Ali', age: 12 },
        { name: 'Balil', age: 13 },
      ]);
  });

  it('should set value', () => {
    const value = { name: 'Badra', age: 20 };

    expect(service.setValue(value)).toBe(3);
  });
});
