import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  getValue() {
    return [
      { name: 'Ali', age: 12 },
      { name: 'Balil', age: 13 },
    ];
  }
}
