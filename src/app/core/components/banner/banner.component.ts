import { Component, inject, signal } from '@angular/core';
import { ValueService } from '@core/services/value.service';

@Component({
  standalone: true,
  selector: 'app-banner',
  template: '<h1>{{title()}}</h1>',
  styles: ['h1 { color: green; font-size: 350%}'],
})
export class BannerComponent {
  title = signal('Test Tour of Heroes');

  private valueService = inject(ValueService);
}
