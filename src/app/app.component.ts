import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherForecast } from './model/weather.type';
import oboe from 'oboe';
import { CommonModule } from '@angular/common';
import { MsalModule } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CommonModule, MsalModule,HeaderComponent],
  template: `
 <app-header/>
<router-outlet/>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'first-ng-app';
  // weathers: WeatherForecast[] = [];
  // private apiURL = "http://localhost:5090/api/weather";
  
  ngOnInit(): void {
    
    
  }
}
