import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
    name: 'time',
    standalone: true
})
export class TimePipe implements PipeTransform{
    transform(value: any) {
        const milis = value * 1000;
        const dateObject = new Date(milis);
        //const newTime = this.transform(value, 'shortTime')
        return dateObject;
    }
}