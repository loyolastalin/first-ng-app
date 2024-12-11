import { Component, OnInit, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { single } from 'rxjs';
import { CounterComponent } from '../components/counter/counter.component';
import { WeatherForecast } from '../model/weather.type';
import oboe from 'oboe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeMessage = signal('From Parent , Hello world');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
  ngOnInit(): void {    
  }
}
