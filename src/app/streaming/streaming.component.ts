import { Component, inject, OnInit, signal } from '@angular/core';
import { WeatherForecast } from '../model/weather.type';
import oboe from 'oboe';
import { StreamService } from '../services/stream.service';
import { catchError, filter, Subject, takeUntil } from 'rxjs';
import { MSAL_INSTANCE, MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType } from '@azure/msal-browser';
import { environment } from '../../environments/environment';
import { Platform } from '../model/platfom.type';

@Component({
  selector: 'app-streaming',
  standalone: true,
  imports: [],
  templateUrl: './streaming.component.html',
  styleUrl: './streaming.component.css'
})
export class StreamingComponent implements OnInit {
  weathersArray: WeatherForecast[] = [];
  streamservice = inject(StreamService);
  weathers = signal<Array<WeatherForecast>>([]);
  platforms : Platform[] = [];
  private readonly _destroying$ = new Subject<void>();
  msalService = inject(MsalService);
  ngOnInit(): void {
    // const options: oboe.Options = {
    //   url: this.apiURL +'/weather',
    //   method: 'GET',
    // };

    // const oboeService = oboe(options);
    // oboeService
    //   .node('!.*', (weather: WeatherForecast) => {
    //     this.weathers.push(weather);
    //     console.log(weather);
    //   })
    //   .done((_) => {
    //     console.log('completed');
    //   })
    //   .fail((erroor) => {
    //     console.log(erroor); // added
    //   });
  }

  LoadweatherAPI()
  {
  this.streamservice
      .getWeatherAPI()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((weather) => this.weathers.set(weather));
  }
  LoadPlatformAPI()
  {

    const options: oboe.Options = {
      url: 'http://localhost:5090/api/platform',
      method: 'GET',
      withCredentials:false,    
      headers:{
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    };

    const oboeService = oboe(options);
    oboeService
      .node('!.*', (platfom: Platform) => {
        this.platforms.push(platfom);
      })
      .done((_) => {
        console.log('completed');
      })
      .fail((erroor) => {
        console.log(erroor); // added
      });
  }
  LoadweatherAPIStream()
  {

    const options: oboe.Options = {
      url: 'http://localhost:5090/api/weather',
      method: 'GET',
      withCredentials:false,
      headers:{
       // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCIsImtpZCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCJ9.eyJhdWQiOiJhcGk6Ly81OTc3NzllZC03MGI2LTRlNjQtODM4Mi0yNDQ1NDc4ZjZmMDkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jMTZiYTEyZi0xYzdjLTRkOTMtYjAwMC0yY2IxMWYwMjgzNTcvIiwiaWF0IjoxNzMzODk4NjA1LCJuYmYiOjE3MzM4OTg2MDUsImV4cCI6MTczMzkwMjUwNSwiYWlvIjoiazJCZ1lERGRjMUo5cmRxTkpRbXU2WHU4NDZObUF3QT0iLCJhcHBpZCI6IjI0MWFlMGE5LTkxZDgtNDhlYy1hMzg2LTRmNzcxYTA1MWM5OSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2MxNmJhMTJmLTFjN2MtNGQ5My1iMDAwLTJjYjExZjAyODM1Ny8iLCJvaWQiOiIwNjc2M2QxYy1iNWMyLTRlYWUtYTBlZC00ODBlNmMyY2U0YjYiLCJyaCI6IjEuQVQwQUw2RnJ3WHdjazAyd0FDeXhId0tEVi0xNWQxbTJjR1JPZzRJa1JVZVBid2s5QUFBOUFBLiIsInJvbGVzIjpbIkFwcC5SZWFkIiwiQXBwLldyaXRlIl0sInN1YiI6IjA2NzYzZDFjLWI1YzItNGVhZS1hMGVkLTQ4MGU2YzJjZTRiNiIsInRpZCI6ImMxNmJhMTJmLTFjN2MtNGQ5My1iMDAwLTJjYjExZjAyODM1NyIsInV0aSI6InpUWXVRaDJ3UGtxMEJfbGxIc1lZQUEiLCJ2ZXIiOiIxLjAifQ.M7rZVfHSTI0R3GuP9QMY8u5PMMYkBUt65P-CUqaJ09vuIxF4dJpgIWBK--T8PcdTO-6Mtiw29zdCLsCrYlyDHE9YxN9OZ7Uh03scmyXh6lqzo8WrPFwzw3bzF8-lgiUOn0opqNFTamCBqCsx8wDNjsCLIpqVwuza9J0u2Lv4V3BDaCTmXz8c2JCMxMnLf0UQdkI4x5lbdV4-YK1E72XZND5EqXkqu9-mcNt-rFd5mZ_o4vaa9pgaAgenLMj4lnHWpkxxyMHvgbJlZ88Y4ZXTpq1dzO8ObPLbSF4JOQaS_srsnR6oJWIk9j2Wx3f0qBjqBrq6EGHODCoeU2Zx6Sca9g'

        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    };

    const oboeService = oboe(options);
    oboeService
      .node('!.*', (weather: WeatherForecast) => {
        this.weathersArray.push(weather);
      })
      .done((_) => {
        console.log('completed');
      })
      .fail((erroor) => {
        console.log(erroor); // added
      });
  }

  
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
