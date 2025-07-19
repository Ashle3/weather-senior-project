import { Component, inject, OnInit, signal } from '@angular/core';
import { WxDataService } from '../wx-data.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { TimePipe } from '../time.pipe';

@Component({
  selector: 'app-daily',
  imports: [DatePipe, TimePipe, DecimalPipe],
  templateUrl: './daily.html',
  styleUrl: './daily.css',
  standalone: true
})
export class DailyComponent implements OnInit{
  public weatherService = inject(WxDataService);
  public weatherData = signal<any>(undefined);
  
  ngOnInit(): void {
      this.weatherService.search.subscribe(
        (cityName: any) => {
          this.weatherService.cityName1 = cityName;
          this.weatherService.getConditions(this.weatherService.cityName1)
          .subscribe({
           next: (resData) => {
            this.weatherData.set(resData);
            this.weatherService.error1.set(false);
          },
            error: () => {
            this.weatherService.error1.set(true);
            }
      });
        }
      )

      this.weatherService.getConditions(this.weatherService.cityName1)
      .subscribe({
        next: (resData) => {
          console.log(resData);
          this.weatherData.set(resData);
        }
      });

}}
