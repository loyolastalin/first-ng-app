import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherForecast } from '../model/weather.type';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  http = inject(HttpClient);
  constructor() { }
  private apiURL = 'http://localhost:5090/api';
  getWeatherAPI()
  {
    return this.http.get<Array<WeatherForecast>>(this.apiURL +'/weather');
  }
}
