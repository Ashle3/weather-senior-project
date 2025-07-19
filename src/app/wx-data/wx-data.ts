import { Component, inject } from '@angular/core';
import { ConditionsComponent } from './conditions/conditions.component';
import { HourlyComponent } from './hourly/hourly';
import { HeaderComponent } from './header/header.component';
import { WxDataService } from './wx-data.service';
import { ErrorComponent } from './error/error';
import { TimePipe } from './time.pipe';
import { DailyComponent } from './daily/daily';

@Component({
  selector: 'app-wx-data',
  imports: [ConditionsComponent, HourlyComponent, HeaderComponent, ErrorComponent, DailyComponent],
  templateUrl: './wx-data.html',
  styleUrl: './wx-data.css',
  standalone: true
})
export class WxDataComponent {
  public weatherService = inject(WxDataService);
}
