import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { HourlyComponent } from './hourly/hourly';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ HeaderComponent, ConditionsComponent, HourlyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'weather-senior-project';
}
