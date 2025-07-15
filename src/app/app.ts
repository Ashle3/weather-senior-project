import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WxDataComponent } from './wx-data/wx-data';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ HeaderComponent, WxDataComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'weather-senior-project';

  onCitySearched(city: string) {

  }
}
