import { HttpClient } from "@angular/common/http";
import { DestroyRef, EventEmitter, inject, Injectable, OnInit, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

@Injectable({
    providedIn: 'root'
})
export class WxDataService{
    private httpClient = inject(HttpClient);
    public search = new EventEmitter<string>();
    public error1 = signal(false);

    public cityName1 = 'Hendron, VA';

    getConditions(cityName: any) {
        return this.httpClient.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=UUYMN9MVZAQEYXMBE5XZKVRSH`
        )
    }

    // onSearchCity(city: string) {
    //     this.cityName.set(city);
    // }
}