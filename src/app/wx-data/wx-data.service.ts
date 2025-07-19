import { HttpClient } from "@angular/common/http";
import { DestroyRef, EventEmitter, inject, Injectable, OnInit, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

@Injectable({
    providedIn: 'root'
})
export class WxDataService{
    constructor() {
        
    }

    public currentTime = new Date().getTime();

    public getPlaceTime(epoch: string){
        let newDate = new Date(epoch).getTime();
        return newDate;
    }
    
    public getEpoch(epoch: string){
        let newEpoch = new Date(epoch).getTime();
        return newEpoch;
    }

    public check(time: any, epoch: any){
        if(time < epoch ){
            return true;
        } else {
            return false;
        }
    }

    private httpClient = inject(HttpClient);
    public search = new EventEmitter<string>();
    //public setDef = new EventEmitter<boolean>();
    public error1 = signal(false);
    public isClicked = false;

    public cityName1 = 'Hendron, VA';

    getConditions(cityName: any) {
        return this.httpClient.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&include=alerts%2Cdays%2Chours%2Ccurrent&key=UUYMN9MVZAQEYXMBE5XZKVRSH&contentType=json`
        )
    }

    setDefault() {
        this.isClicked = true;
        console.log(this.isClicked);
    }

    //sets local storage to Hendron
    originalDefault() {
        localStorage.setItem('defaultCity', 'Hendron, VA');
    }

    //sets local storage to searched city
    // setDefaultCity(cityName: string){
    //     this
    //     localStorage.setItem('defaultCity', cityName);
    // }

    setIcon(icon: string){
        let imgLink = "";
        if (icon === "snow"){
            imgLink = "https://tse2.mm.bing.net/th/id/OIP.g2zxOvzwBArsG1D7ztSPUAHaGd?pid=Api&P=0&h=220";
        } else if(icon === "snow-showers-day") {
            imgLink = "https://tse4.mm.bing.net/th/id/OIP.Nf45YlwPtmYapxo4tCyoXwAAAA?pid=Api&P=0&h=220";
        } else if(icon === "snow-showers-night"){
            imgLink = "https://tse4.mm.bing.net/th/id/OIP.43al3h6bgz1mLWFGsFEjXwAAAA?pid=Api&P=0&h=220"
        } else if(icon === "thunder-rain"){
            imgLink = "https://tse2.mm.bing.net/th/id/OIP.mnEV-wm0PayfS5K0QwoS0wAAAA?pid=Api&P=0&h=220"
        } else if(icon === "thunder-showers-day"){
            imgLink = "https://tse3.mm.bing.net/th/id/OIP.BBgSZeNehcV1cTLW3JBWugAAAA?pid=Api&P=0&h=220"
        } else if(icon === "thunder-showers-night"){
            imgLink = "https://tse1.mm.bing.net/th/id/OIP._aKrSalBLrNPcJeSl8soqwAAAA?pid=Api&P=0&h=220"
        } else if(icon === "rain"){
            imgLink = "https://tse4.mm.bing.net/th/id/OIP.NTgYJ0YMRpKVQ5qXEL-eoQAAAA?pid=Api&P=0&h=220"
        } else if(icon === "showers-day"){
            imgLink = "https://tse2.mm.bing.net/th/id/OIP.1REr2hPA7DQGx54mYjOO1AAAAA?pid=Api&P=0&h=220"
        } else if(icon === "showers-night"){
            imgLink = "https://tse4.mm.bing.net/th/id/OIP.9d61J9rqIfXcJXjbbqizrAAAAA?pid=Api&P=0&h=220"
        } else if(icon === "fog"){
            imgLink = "https://tse3.mm.bing.net/th/id/OIP.sK1m9PffWr3Yf07caiLuZgAAAA?pid=Api&P=0&h=220"
        } else if(icon === "wind"){
            imgLink = "https://tse2.mm.bing.net/th/id/OIP.0xEV2J6WqybuUCLftelPPgHaFq?pid=Api&P=0&h=220"
        } else if(icon === "cloudy"){
            imgLink = "https://tse1.mm.bing.net/th/id/OIP.WZbQa0KOJVbF0Q71-M5zaQHaEG?pid=Api&P=0&h=220"
        } else if(icon === "partly-cloudy-day"){
            imgLink = "https://tse3.mm.bing.net/th/id/OIP.KO4QFc3YaaI3ltsrdtNNFwAAAA?pid=Api&P=0&h=220"
        } else if(icon === "partly-cloudy-night"){
            imgLink = "https://tse2.mm.bing.net/th/id/OIP.TU_-DgrxiFlykTz8t5OjuwAAAA?pid=Api&P=0&h=220"
        } else if(icon === "clear-day"){
            imgLink = "https://tse3.mm.bing.net/th/id/OIP.WIDtiUtXvpVjbo7wh3bwaQHaHd?pid=Api&P=0&h=220"
        } else if(icon === "clear-night"){
            imgLink = "https://tse4.mm.bing.net/th/id/OIP.vnFcVhLtwYd394_w8XENbAAAAA?pid=Api&P=0&h=220"
        }
        return imgLink;
    }

    

    // onSearchCity(city: string) {
    //     this.cityName.set(city);
    // }
}