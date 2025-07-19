import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { WxDataService } from "./wx-data.service";

@Injectable({
    providedIn: 'root'
})

export class IconService{
    constructor() {

    }
    private httpClient = inject(HttpClient);
    weatherService = inject(WxDataService);

 
}