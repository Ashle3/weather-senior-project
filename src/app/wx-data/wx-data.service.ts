import { HttpClient } from "@angular/common/http";
import { DestroyRef, inject, Injectable, OnInit, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WxDataService{
    // private weatherData = signal<any>(undefined);
    // readWeather = this.weatherData.asReadonly();
    private httpClient = inject(HttpClient);

    cityName = 'Frisco, TX';

    getConditions() {
        return this.httpClient.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.cityName}?key=UUYMN9MVZAQEYXMBE5XZKVRSH`
        )
    }

    // ngOnInit() {
    //     const subscription = this.httpClient.get(
    //         //'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/frisco%2C%20tx?unitGroup=us&include=days%2Ccurrent%2Calerts&key=UUYMN9MVZAQEYXMBE5XZKVRSH&contentType=json'
    //         `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.cityName}?key=UUYMN9MVZAQEYXMBE5XZKVRSH`
    //     ).subscribe({
    //         next: (resData) => {
    //             console.log(resData);
    //             this.weatherData.set(resData);
    //         }
    //     });

    //     this.destroyRef.onDestroy(() => {
    //         subscription.unsubscribe();
    //     });
    // }
}