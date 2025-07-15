import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { WxDataService } from '../wx-data.service';

@Component({
  selector: 'app-conditions',
  imports: [DecimalPipe],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css',
  standalone: true
})
export class ConditionsComponent implements OnInit{
  [x: string]: any;
  public weatherService = inject(WxDataService);
  public weatherData = signal<any>(undefined);

  ngOnInit(): void {
      this.loadConditions();
  }

  loadConditions() {
    this.weatherService.getConditions()
    .subscribe({
      next: (resData) => {
        console.log(resData);
        this.weatherData.set(resData);
      }
    });
  }

  //currentConditions = this.weatherService.readWeather;
  // weatherData = signal<any>(undefined);
  // private httpClient = inject(HttpClient);
  // private destroyRef = inject(DestroyRef);

  // requestBase = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
  // cityName = 'Frisco, TX';
  // key = '?key=UUYMN9MVZAQEYXMBE5XZKVRSH';
  // requestLink = `${this.requestBase}${this.cityName}${this.key}`;


  // ngOnInit () {
  //   const subscription = this.httpClient.get(
  //     //'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/frisco%2C%20tx?unitGroup=us&include=days%2Ccurrent%2Calerts&key=UUYMN9MVZAQEYXMBE5XZKVRSH&contentType=json'
  //     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.cityName}?key=UUYMN9MVZAQEYXMBE5XZKVRSH`
  //   ).subscribe({
  //     next: (resData) => {
  //       console.log(resData);
  //       this.weatherData.set(resData);
  //     }
  //   });

  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }
}
