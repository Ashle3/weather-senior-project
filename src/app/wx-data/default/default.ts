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

  defaultTrue() {
    
  }
}
