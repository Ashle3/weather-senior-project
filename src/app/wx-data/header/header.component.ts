import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WxDataService } from '../wx-data.service';
import { DefaultComponent } from '../default/default';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true,
    imports: [FormsModule]
})
export class HeaderComponent{
    public weatherService = inject(WxDataService);
    searchCity = '';

    onSearch() {
        //console.log(this.searchCity);
        this.weatherService.search.emit(this.searchCity);
        this.searchCity = '';
    }

    onEnter(e: any) {
        if(e.keyCode === 13) {
            this.onSearch();
        }
    }
}