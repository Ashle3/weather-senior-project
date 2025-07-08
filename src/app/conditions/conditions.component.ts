import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-conditions',
  imports: [DecimalPipe],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css',
  standalone: true
})
export class ConditionsComponent implements OnInit{
  weatherData = signal<any>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit () {
    const subscription = this.httpClient.get(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/frisco%2C%20tx?unitGroup=us&include=days%2Ccurrent%2Calerts&key=UUYMN9MVZAQEYXMBE5XZKVRSH&contentType=json'
    ).subscribe({
      next: (resData) => {
        console.log(resData);
        this.weatherData.set(resData);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
