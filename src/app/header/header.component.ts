import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true,
    imports: [FormsModule]
})
export class HeaderComponent{
    @Output() search = new EventEmitter<string>();
    searchCity = '';

    onSearch() {
        console.log(this.searchCity);
        this.search.emit(this.searchCity);
    }
}