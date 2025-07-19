import { Component, inject } from '@angular/core';
import { WxDataService } from '../wx-data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.html',
  styleUrl: './default.css',
  standalone: true
})
export class DefaultComponent {
  public weatherService = inject(WxDataService);
  searchCityName = '';

  getDefaultCity(){
    this.weatherService.search.subscribe((cityName: any) => {
      this.searchCityName = cityName;
      localStorage.setItem('defaultCity', cityName);
    })
  
  }

  setDefaultCity(cityName: string){
        localStorage.setItem('defaultCity', cityName);
    }

}
