import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WxDataService } from '../wx-data.service';
import { TimePipe } from '../time.pipe';

@Component({
  selector: 'app-hourly',
  imports: [DecimalPipe, TimePipe, DatePipe],
  templateUrl: './hourly.html',
  styleUrl: './hourly.css',
  standalone: true
})
export class HourlyComponent implements OnInit{
  time = new Date().getHours();

  public weatherService = inject(WxDataService);
  public weatherData = signal<any>(undefined);

  hours = [];
  
  ngOnInit(): void {
      this.weatherService.search.subscribe(
        (cityName: any) => {
          this.weatherService.cityName1 = cityName;
          this.weatherService.getConditions(this.weatherService.cityName1)
          .subscribe({
           next: (resData) => {
            console.log(resData);
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
          this.weatherData.set(resData);
        }
      });
}

}
