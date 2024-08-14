import { inject, Injectable } from '@angular/core';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  valueService = inject(ValueService);
  // constructor(private valueService: ValueService) {}

  getValue() {
    return this.valueService.getValue();
  }

  setValue(value: { name: string; age: number }) {
    return this.valueService.setValue(value);
  }
}
