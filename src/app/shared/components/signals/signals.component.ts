import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  readonly counter = signal(0);
  readonly doubleCounter = computed(() => this.counter() * 2); // Ajouter un effet dérivé de counter

  increment() {
    this.counter.update((c) => c + 1);
  }

  decrement() {
    this.counter.update((c) => c - 1);
  }

  reset() {
    this.counter.set(0);
  }
}
