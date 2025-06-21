import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ConditionsComponent } from './conditions/conditions.component';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ HeaderComponent, ConditionsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'weather-senior-project';
}
