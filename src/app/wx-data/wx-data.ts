import { Component } from '@angular/core';
import { ConditionsComponent } from './conditions/conditions.component';
import { HourlyComponent } from './hourly/hourly';

@Component({
  selector: 'app-wx-data',
  imports: [ConditionsComponent, HourlyComponent],
  templateUrl: './wx-data.html',
  styleUrl: './wx-data.css',
  standalone: true
})
export class WxDataComponent {

}
