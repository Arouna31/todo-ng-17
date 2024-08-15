import { inject, Injectable } from '@angular/core';
import { ValueService } from './value.service';
import { HeroesService } from './heroes.service';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  valueService = inject(ValueService);
  heroesService = inject(HeroesService);
  // constructor(private valueService: ValueService) {}

  getValue() {
    return this.valueService.getValue();
  }

  setValue(value: { name: string; age: number }) {
    return this.valueService.setValue(value);
  }

  getHeroes() {
    return this.heroesService.getHeroes();
  }
}
