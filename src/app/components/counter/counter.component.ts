import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  CounterValue = signal(0);

  Increment()
  {
    this.CounterValue.update(val => val+1);
  }

  Decrement()
  {
    this.CounterValue.update(val => val-1);
  }

  Reset()
  {
    this.CounterValue.set(0);
  }
}
