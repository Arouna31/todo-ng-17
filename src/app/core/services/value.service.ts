import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  tab = [
    { name: 'Ali', age: 12 },
    { name: 'Balil', age: 13 },
  ];

  getValue() {
    return this.tab;
  }

  setValue(value: { name: string; age: number }) {
    return this.tab.push(value);
  }
}
